import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import PizzaCreated from "./PizzaCreated";
import IngredientSelector from "./IngredientSelector";
import { getIngredients, pushToCart } from "../../redux/actions";
import { Button, Text, Grid, GridItem, FormLabel, Radio, RadioGroup, Stack, Box,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image } from "@chakra-ui/react";
import validate from "./validate";
import css from './CreatePizza.module.css';
import { ok, createpizza } from "../../assets/CloudinaryImg";

const initialStateForm = {
  name: "Create your pizza",
  image: createpizza,
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
  quantity: 1,
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
  const [ isOpen, setIsOpen ] = useState(false);


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


  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);


  const handleSubmit = (e) => {
    e.preventDefault();
    const hasErrors = validate(form);
    setErrors(hasErrors);

    if(!Object.values(hasErrors).length){
      // const modal = document.querySelector("#createPizzaModal");
      // modal.showModal();
      dispatch(pushToCart(form));
      setForm(initialStateForm);
      handleOpen();
    }; 
  };



  return (
    <>
    <Box bgGradient="linear(to-l,#000000, #272727)"  height='100vh'>
      <Text fontSize="3.6rem" color="#f27825" width='60%' display="flex" justifyContent='flex-start' ml="2rem" mb='1rem' >CREATE NEW PIZZA</Text>
      
      <Box display='flex' heigth='100vh' width='96%' margin='0 auto' border='1px solid #fff' borderRadius='6px' >
        <Box display="flex" width='64%' mt='1.2rem'>        
            <Grid templateColumns="repeat(4, 1fr)" templateRows='50% 50%' width='100%' color="white"  >
              <GridItem ml='2.2rem' >
                <RadioGroup colorScheme="orange">
                  <FormLabel fontWeight="bold" >Dough type (Select 1):</FormLabel>
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
                <RadioGroup colorScheme="orange">
                  <FormLabel fontWeight="bold">Choose the bake (Select 1):</FormLabel>
                  <Stack >
                    {
                      typesOfBaking.map((t) => (
                        <Radio key={t.id} onChange={handleRadio} size="lg" type="radio" name="type" value={t.name} >
                          {t.name}
                        </Radio>))
                      }

                  </Stack>               
                </RadioGroup>
                {errors.type && <Text color="red">{errors.type}</Text>}
              </GridItem>

              <GridItem ml='1rem' >
                <RadioGroup colorScheme="orange">
                  <FormLabel fontWeight="bold">Choose the base (Select 1):</FormLabel>
                  <Stack direction="column">
                    {
                    sauceBases.map((base) => (
                        <Radio key={base.id} onChange={handleRadio} size="lg" type="radio"  name="base"  value={base.name} >
                          {base.name}
                        </Radio>
                      ))
                    }
                  </Stack>                
                </RadioGroup>
                {errors.base && <Text color="red">{errors.base}</Text> }
              </GridItem>

              <GridItem ml='2rem' >              
                <RadioGroup colorScheme="orange">
                  <FormLabel fontWeight="bold">Mozarella? (Select 1):</FormLabel>                
                  <Stack direction="column">
                    {
                      cheeseBases.map((base) => (
                        <Radio key={base.id} onChange={handleRadio} size="lg" type="radio" name="mozzarella"  value={base.name} >
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
          <Box display='flex' justifyContent='space-around' alignItems='center' ml="2rem" mr="2rem" mb='2rem' >
            <Box><Text color='#fff' fontSize='1.4rem' width='14rem' >Total price: {form.price}</Text></Box>
            <Button onClick={handleSubmit} type="submit" hoverbg="white" borderRadius="full" fontSize='2rem' padding="2rem 1.4rem" background="linear-gradient(to right, #f27833, #eab830)" >
              Add to cart
            </Button>
          </Box>
        </Box>
      </Box>
         
      <Modal isOpen={isOpen} onClose={handleClose} >
          <ModalOverlay backdropFilter='blur(6px)' bg='#000000b6' />
          <ModalContent margin='auto'  >
          <ModalCloseButton/>
            <Image src={ok} alt="ok" h='2.8rem' objectFit='contain' mt='1rem' mb='0' />
            <ModalHeader textAlign='center' fontSize='1.8rem' p='0' >Pizza created successfully!</ModalHeader>
            <ModalBody textAlign='center' fontSize='1.4rem' >
            <Link to='/allpizzas' ><Button mt='.6rem' fontSize='1.4rem' bg={"orange.400"} color={"white"} _hover={{ bg: "orange.500" }} onClick={handleClose} >Continue shopping</Button></Link>
            <Text>or</Text>
            <Link to='/cart' ><Button mb='.6rem' fontSize='1.4rem' bg={"orange.400"} color={"white"} _hover={{ bg: "orange.500" }} onClick='' >Go to cart</Button></Link>
            </ModalBody>
          </ModalContent>
        </Modal>

    </Box>
    </>
  );
};

export default CreatePizza;
