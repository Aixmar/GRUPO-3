import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PizzaCreated from "./PizzaCreated";
import IngredientSelector from "./IngredientSelector";
import { getIngredients, pushToCart } from "../../redux/actions";
import { Button, Text, Grid, GridItem, FormLabel, Radio, RadioGroup, Stack, Box } from "@chakra-ui/react";
import createdpizzas from "../../assets/createdpizzas.png";
import validate from "./validate";
import css from './CreatePizza.module.css';
import okIco from "../../assets/nice.png";

const initialStateForm = {
  name: "Create your pizza",
  image: createdpizzas,
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
  category: 'pizza'
}

const CreatePizza = () => {

  const ingredients = useSelector((state) => state.ingredients);
  const error_query = useSelector((state) => state.error_query);
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


  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = validate(form);
    setErrors(hasErrors);

    if(!Object.values(hasErrors).length){
      const modal = document.querySelector("#createPizzaModal");
      dispatch(pushToCart(form));
      setForm(initialStateForm);
      modal.showModal();
    }; 
  };



  return (
    <>
    <Box bgGradient="linear(to-l,#000000, #272727)"  height='100vh'>
      <Text fontSize="3.6rem" color="#f27825" width='60%' display="flex" justifyContent='center' mb='1rem' >CREATE NEW PIZZA</Text>
      
      <Box display='flex' heigth='100vh' width='96%' margin='0 auto' border='1px solid #fff' borderRadius='6px' >
        <Box display="flex" width='64%' mt='1.2rem'>        
            <Grid templateColumns="repeat(4, 1fr)" templateRows='50% 50%' width='100%' color="white"  >
              <GridItem ml='2.2rem' >
                <RadioGroup>
                  <FormLabel fontWeight="bold">Dough type (Select 1):</FormLabel>
                  <Stack >
                    {
                      typesOfDough.map((dough) => (
                        <Radio key={dough.id} onChange={handleRadio} size="lg" type="radio" name="dough" value={dough.name} >
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
                        <Radio key={t.id} onChange={handleRadio} size="lg" type="radio" name="type" value={t.name} >
                          {t.name}
                        </Radio>
                        ))
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
                        <Radio key={base.id} onChange={handleRadio} size="lg" type="radio"  name="base" value={base.name} >
                          {base.name}
                        </Radio>
                      ))
                    }
                  </Stack>                
                </RadioGroup>
                {errors.base && <Text color="red">{errors.base}</Text> }
              </GridItem>

              <GridItem ml='2rem' >              
                <RadioGroup>
                  <FormLabel fontWeight="bold">Mozarella? (Select 1):</FormLabel>                
                  <Stack direction="column">
                    {
                      cheeseBases.map((base) => (
                        <Radio key={base.id} onChange={handleRadio} size="lg" type="radio" name="mozzarella" value={base.name} >
                          {base.name}
                        </Radio>
                        ))
                    }
                  </Stack>                
                </RadioGroup>
                {errors.mozzarella && ( <Text color="red">{errors.mozzarella}</Text> )}
              </GridItem>

              <GridItem gridColumn='1/-1' gridRow='2/3' >                
                <Box width='100%' borderTop='1px solid #fff' height='100%' >
                  <IngredientSelector toppings={toppings} setToppings={setToppings} cheeses={cheeses} setCheeses={setCheeses} meats={meats} setMeats={setMeats} form={form} setForm={setForm} ></IngredientSelector>
                </Box>   
              </GridItem>

            </Grid>
          </Box>
          
        <Box width='36%' height='70vh' display='flex' flexDirection='column' borderLeft='1px solid #fff' >
          <PizzaCreated form={form} setForm={setForm} toppings={toppings} setToppings={setToppings} cheeses={cheeses} setCheeses={setCheeses} meats={meats} setMeats={setMeats} ></PizzaCreated>
          <Box display='flex' justifyContent='space-around' alignItems='center' mb='2rem' >
            <Box><Text color='#fff' fontSize='1.4rem' width='14rem' >Total price: {form.price.toFixed(2)}</Text></Box>
            <Button onClick={handleSubmit} type="submit" hoverbg="white" borderRadius="full" fontSize='2rem' padding="2rem 1.4rem" background="linear-gradient(to right, #f27833, #eab830)" >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
         

          <dialog id="createPizzaModal" className={css.modalCreatePizza} >
            <img src={okIco} alt="nice" className={css.okIco} />
            <h2>Pizza created successfully!</h2>
            <div>
              <Link to="/cart">
                <Button bg={"orange"} fontSize={"2rem"} width={"90%"} p={"1.6rem"} margin={"1.2rem 0 .8rem 0"} >
                  Go to cart
                </Button>
              </Link>
            </div>
          </dialog>
    </Box>
    </>
  );
};

export default CreatePizza;
