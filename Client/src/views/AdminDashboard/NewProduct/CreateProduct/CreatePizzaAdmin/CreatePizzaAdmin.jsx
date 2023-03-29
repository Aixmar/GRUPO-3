import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CreatedPizza from "./CreatedPizza";
import IngredientSelector from "./IngredientSelector";
import { getIngredients } from "../../../../../redux/actions";
import { Button, Text, Grid, GridItem, FormLabel, Radio, RadioGroup, Stack, Box, Input, Switch, Select } from "@chakra-ui/react";
import validate from "./validate";
import css from '../CreateProduct.module.css';
import { ok } from "../../../../../assets/CloudinaryImg.js";

const initialStateForm = {
  name: "",
  image: "",
  price: 0,
  detail: {
    dough: "",
    type: "",
    base: "",
    mozzarella: "",
    toppingIngredients: [],
    cheeseIngredients: [],
    meatIngredients: [],
  },
  category: 'pizza',
  vegetarian: false,
  active: false
};

const CreatePizzaAdmin = () => {

  const { ingredients } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [typesOfDough, setTypesOfDough] = useState([]);
  const [typesOfBaking, setTypesOfBaking] = useState([]);
  const [sauceBases, setSauceBases] = useState([]);
  const [cheeseBases, setCheeseBases] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [cheeses, setCheeses] = useState([]);
  const [meats, setMeats] = useState([]);  
  const [errors, setErrors] = useState({});
  const [form, setForm] = useState(initialStateForm);


  useEffect(() => {
    dispatch(getIngredients());
  }, []);


  useEffect(() => {
    const typesOfDoughFilter = ingredients.filter((i) => i.category === "Dough");
    const typesOfBakingFilter = ingredients.filter((i) => i.category === "Type");
    const sauceBasesFilter = ingredients.filter((i) => i.category === "Sauce base");
    const cheeseBasesFilter = ingredients.filter((i) => i.category === "Cheese base");
    const toppingIngredientsFilter = ingredients.filter((i) => i.category === "Toppings");
    const cheeseIngredientsFilter = ingredients.filter((i) => i.category === "Cheese");
    const meatIngredientsFilter = ingredients.filter((i) => i.category === "Meat");
    setTypesOfDough(typesOfDoughFilter);
    setTypesOfBaking(typesOfBakingFilter);
    setSauceBases(sauceBasesFilter);
    setCheeseBases(cheeseBasesFilter);
    setToppings(toppingIngredientsFilter);
    setCheeses(cheeseIngredientsFilter);
    setMeats(meatIngredientsFilter);
  }, [ingredients]);
  

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleRadio = (event) => {
    const { name, value } = event.target;
    const currentIngredient = ingredients.filter((ingr) => ingr.name === value);

    if (form.detail[name]) {
      const priceToRest = (ingredients.filter((ingr) => ingr.name === form.detail[name]))[0].price;
      setForm({ ...form, detail: { ...form.detail, [name]: value }, price: (form.price - priceToRest) + currentIngredient[0].price });
    } else {
      setForm({ ...form, detail: { ...form.detail, [name]: value }, price: form.price + currentIngredient[0].price });
      errors[name] && setErrors(validate({ ...form, detail: { ...form.detail, [name]: value } }));
    };
  };

  const handleSwitchChange = (event) => {
    const { name, checked } = event.target;
    setForm({ ...form, [name]: checked });
  };

  const handleUpdateImage = async (event) => {
    const { files } = event.target;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'users_photo');
    const { data } = await axios.post(`https://api.cloudinary.com/v1_1/dozwiqjh1/image/upload`, formData);
    setForm({ ...form, image: data.secure_url });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const hasErrors = validate(form);
    setErrors(hasErrors);

    if(!Object.values(hasErrors).length){
        const modal = document.querySelector("#createPizzaModal");
        const { data } = await axios.post('/pizzas', form);
        setForm(initialStateForm);
        modal.showModal();
    }; 
  };



  return (
    <>
    <Box bgGradient="linear(to-l,#000000, #272727)"  height='100vh'>
        <Box display='flex' heigth='auto' width='96%' margin='0 auto' bg='#fff' border='1px solid black' borderRadius='6px' >
            <Box display="flex" flexDir='column' width='64%' >        
                <Box display='flex' alignItems='center' borderBottom='1px solid #545454b9' h='3.6rem' margin='1rem .4rem' pb='1rem' >
                    <FormLabel htmlFor='name' w='3.4rem' h='auto' fontWeight="bold" >Pizza name:</FormLabel>
                    <Input type='text' name='name' value={form.name} onChange={handleInputChange} w='40%' border='1px solid #545454b9' mr='1rem' />
                    <FormLabel htmlFor='image' w='3.4rem' fontWeight="bold" >Pizza image:</FormLabel>
                    <Input type='file' name='image' onChange={handleUpdateImage} w='40%' border='1px solid #545454b9' h='2.6rem' pt='4px' cursor='pointer' />
                </Box>
                
                <Grid templateColumns="repeat(4, 1fr)" templateRows='78% 4rem 1fr' width='100%' h='60%' color="black" >
                    <GridItem ml='2.2rem'  >
                        <RadioGroup>
                        <FormLabel fontWeight="bold">Dough type (Select 1):</FormLabel>
                        <Stack >
                            {
                            typesOfDough.map((dough) => (
                                <Radio key={dough.id} onChange={handleRadio} size="lg" type="radio" name="dough" border='1px solid #545454b9' value={dough.name} >
                                {dough.name}
                                </Radio>
                                ))
                            }
                        </Stack>
                        </RadioGroup>
                        {errors.dough && <Text color="red">{errors.dough}</Text>}
                    </GridItem>

                    <GridItem ml='1rem' >
                        <RadioGroup>
                        <FormLabel fontWeight="bold">Choose the bake (Select 1):</FormLabel>
                        <Stack >
                            {
                            typesOfBaking.map((t) => (
                                <Radio key={t.id} onChange={handleRadio} size="lg" type="radio" name="type" border='1px solid #545454b9' value={t.name} >
                                {t.name}
                                </Radio>))
                            }

                        </Stack>               
                        </RadioGroup>
                        {errors.type && <Text color="red">{errors.type}</Text>}
                    </GridItem>

                    <GridItem ml='1rem' >
                        <RadioGroup>
                        <FormLabel fontWeight="bold">Choose the base (Select 1):</FormLabel>
                        <Stack direction="column">
                            {
                            sauceBases.map((base) => (
                                <Radio key={base.id} onChange={handleRadio} size="lg" type="radio"  name="base" border='1px solid #545454b9' value={base.name} >
                                {base.name}
                                </Radio>
                            ))
                            }
                        </Stack>                
                        </RadioGroup>
                        {errors.base && <Text color="red">{errors.base}</Text> }
                    </GridItem>

                    <GridItem ml='2rem' lineHeight='1.4rem' >              
                        <RadioGroup>
                        <FormLabel fontWeight="bold">Mozarella? (Select 1):</FormLabel>                
                        <Stack direction="column">
                            {
                            cheeseBases.map((base) => (
                                <Radio key={base.id} onChange={handleRadio} size="lg" type="radio" name="mozzarella" border='1px solid #545454b9' value={base.name} >
                                {base.name}
                                </Radio>
                                ))
                            }
                        </Stack>                
                        </RadioGroup>
                        {errors.mozzarella && ( <Text color="red">{errors.mozzarella}</Text> )}
                    </GridItem>

                    <GridItem gridColumn='1/-1' h='4rem' borderTop='1px solid #545454b9' m='0 .4rem' >
                        <Stack align='center' h='4rem' direction='row' display='flex' alignItems='center' justifyContent='space-evenly' >
                            <Box display='flex' gap='0 1rem' >
                              <Switch size='lg' name='vegetarian' onChange={handleSwitchChange} id='vegetarian' />
                              <FormLabel htmlFor='vegetarian' fontWeight="bold" >Vegetarian</FormLabel>                
                            </Box>
                            <Box display='flex' gap='0 1rem' >                            
                              <Switch size='lg' name='active' onChange={handleSwitchChange} id='active' />
                              <FormLabel htmlFor='active' fontWeight="bold">Active (in stock)</FormLabel>                
                            </Box>
                        </Stack>
                    </GridItem>

                    <GridItem gridColumn='1/-1' gridRow='3/4' m='0 .4rem' >                
                        <Box width='100%' borderTop='1px solid #545454b9' height='auto'  >
                        <IngredientSelector toppings={toppings} setToppings={setToppings} cheeses={cheeses} setCheeses={setCheeses} meats={meats} setMeats={setMeats} form={form} setForm={setForm} ></IngredientSelector>
                        </Box>   
                    </GridItem>

                </Grid>
            </Box>
    

            
            
            <Box width='36%' height='70vh' display='flex' flexDirection='column' borderLeft='1px solid #545454b9'  >
                <CreatedPizza form={form} setForm={setForm} toppings={toppings} setToppings={setToppings} cheeses={cheeses} setCheeses={setCheeses} meats={meats} setMeats={setMeats} ></CreatedPizza>
                <Box display='flex' justifyContent='space-around' alignItems='center' mb='2rem' >
                  <Box >
                    <FormLabel htmlFor='price' fontWeight="bold" >Suggested price:</FormLabel>
                    <Input type='number' name='price' value={form.price} onChange={handleInputChange} border='1px solid #545454b9' htmlSize={2} width='50%' />
                  </Box>
                  <Button onClick={handleSubmit} type="submit" hoverbg="black" borderRadius="full" fontSize='2rem' mt='1.4rem' padding="2rem 1.4rem" background="linear-gradient(to right, #f27833, #eab830)" >
                    Create new pizza
                  </Button>
                </Box>
            </Box>
        </Box>
         

          <dialog id="createPizzaModal" className={css.modalCreatePizza} >
            <img src={ok} alt="ok" className={css.okIco} />
            <h2>Pizza created successfully!</h2>
            <div>
              <Link to="/allpizzas">
                <Button bg={"orange"} fontSize={"2rem"} width={"90%"} p={"1.6rem"} margin={"1.2rem 0 .8rem 0"} >
                  Go to menu
                </Button>
              </Link>
            </div>
          </dialog>
    </Box>
    </>
  );
};

export default CreatePizzaAdmin;
