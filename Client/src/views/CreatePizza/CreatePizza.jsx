import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getIngredients, pushToCart } from "../../redux/actions";
import SearchBar from "../../components/SearchBar/SearchBar";
import { Button, Text, Grid, GridItem, CheckboxGroup, Checkbox, FormLabel, Radio, RadioGroup, Stack, Box, FormControl } from "@chakra-ui/react";
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


  const handleOnChange = (event) => {
    const { name, value, checked } = event.target;    
    const currentIngredient = ingredients.filter((ingr) => ingr.name === value);

    if (checked) {
      setForm({ ...form, detail: { ...form.detail, [name]: [ ...form.detail[name], value ]}, price: form.price + currentIngredient[0].price });
    } else {
      const ingredientsChecked = form.detail[name].filter((ingre) => ingre !== value);
      setForm({ ...form, detail: { ...form.detail, [name]: ingredientsChecked }, price: form.price - currentIngredient[0].price });
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
    } else {
      window.scrollTo(0, 0);
    };    
  };



  return (
    <Box bgGradient="linear(to-l,#000000, #272727)">
      <Text fontSize="5xl" color="#f27825" display="flex" ml="150px" pt="20px" pb="20px" >CREATE NEW PIZZA</Text>

      <Box display="flex" justifyContent="center" alignItems="center">        
        <form onSubmit={handleSubmit}>
          <Grid templateColumns="repeat(4, 1fr)" gap={4} color="white">

            <GridItem>
              <RadioGroup>
                <FormLabel fontWeight="bold">Dough (1 MAX Selection):</FormLabel>
                <Stack direction="column">
                  {
                    typesOfDough.map((dough) => (
                      <Radio key={dough.id} onChange={handleRadio} marginRight="3" size="lg" type="radio" name="dough" value={dough.name} >
                        {dough.name}
                      </Radio>
                      ))
                  }
                </Stack>
              </RadioGroup>
              {errors.dough && <Text color="red">{errors.dough}</Text>}
            </GridItem>

            <GridItem>
              <RadioGroup>
                <FormLabel fontWeight="bold">Type (1 MAX Selection):</FormLabel>
                <Stack direction="column">
                  {
                    typesOfBaking.map((t) => (
                      <Radio key={t.id} onChange={handleRadio} marginRight="3" size="lg" type="radio" name="type" value={t.name} >
                        {t.name}
                      </Radio>
                      ))
                  }
                </Stack>               
              </RadioGroup>
              {errors.type && <Text color="red">{errors.type}</Text>}
            </GridItem>

            <GridItem>
              <RadioGroup>
                <FormLabel fontWeight="bold">Base of (1 MAX Selection):</FormLabel>
                <Stack direction="column">
                  {
                  sauceBases.map((base) => (
                      <Radio key={base.id} onChange={handleRadio} marginRight="3" size="lg" type="radio"  name="base" value={base.name} >
                        {base.name}
                      </Radio>
                    ))
                  }
                </Stack>                
              </RadioGroup>
              {errors.base && <Text color="red">{errors.base}</Text> }
            </GridItem>

            <GridItem>              
              <RadioGroup>
                <FormLabel fontWeight="bold">Muzarella (1 MAX Selection):</FormLabel>                
                <Stack direction="column">
                  {
                    cheeseBases.map((base) => (
                      <Radio key={base.id} onChange={handleRadio} marginRight="3" size="lg" type="radio" name="mozzarella" value={base.name} >
                        {base.name}
                      </Radio>
                      ))
                  }
                </Stack>                
              </RadioGroup>
              {errors.mozzarella && ( <Text color="red">{errors.mozzarella}</Text> )}
            </GridItem>
          </Grid>
      
          <Box mb='2rem' >
            <SearchBar />
          </Box>

          {
            error_query === null ? (
              <Box>
                <Grid templateColumns="repeat(4, 1fr)" gap={4} color="white">

                  <GridItem gridColumn='1/3' display='flex' flexDirection='column' height='30rem' flexWrap='wrap' >
                    <CheckboxGroup>
                      <FormLabel fontWeight="bold">Toppings list (2 MAX Selection):</FormLabel>
                      {
                        toppings && toppings.map((ingr) => (
                          <Box key={ingr.id}>
                            <Checkbox
                              checked={ form.detail.toppingIngredients.includes(ingr.name) ? true : false }
                              disabled={ form.detail.toppingIngredients.length === 2 && !form.detail.toppingIngredients.includes(ingr.name) ? true : false }
                              onChange={handleOnChange}
                              marginRight="2"
                              marginBottom="2"
                              size="lg"
                              bg="teal.200"
                              type="checkbox"
                              name="toppingIngredients"
                              value={ingr.name} >
                            </Checkbox>
                            <FormLabel htmlFor={ingr.id} display='inline' >{ingr.name}</FormLabel>
                          </Box>
                        ))
                      }
                      {errors.toppingIngredients && ( <Text color="red">{errors.toppingIngredients}</Text> )}
                    </CheckboxGroup>
                  </GridItem>

                  <GridItem>
                    <CheckboxGroup>
                      <FormLabel fontWeight="bold">Cheeses list (3 MAX Selection):</FormLabel>
                      {
                        cheeses && cheeses.map((ingr) => (
                          <Box key={ingr.id} >
                            <Checkbox
                              checked={ form.detail.cheeseIngredients.includes(ingr.name) ? true : false }
                              disabled={ form.detail.cheeseIngredients.length === 3 && !form.detail.cheeseIngredients.includes(ingr.name) ? true : false }
                              onChange={handleOnChange}
                              marginRight="2"
                              marginLeft="20"
                              marginBottom="2"
                              size="lg"
                              bg="teal.200"
                              type="checkbox"
                              name="cheeseIngredients"
                              value={ingr.name} >                                  
                            </Checkbox>
                            <FormLabel htmlFor={ingr.id} display='inline' >{ingr.name}</FormLabel>
                          </Box>
                        ))
                      }
                      {errors.cheeseIngredients && ( <Text>{errors.cheeseIngredients}</Text> )}
                    </CheckboxGroup>
                  </GridItem>

                  <GridItem>
                    <CheckboxGroup>
                      <FormLabel fontWeight="bold"> Meats list (3 MAX Selection):</FormLabel>
                      <Box>                  
                        {
                          meats && meats.map((ingr) => (
                            <Box key={ingr.id}>
                              <Checkbox
                                checked={ form.detail.meatIngredients.includes(ingr.name) ? true : false }
                                disabled={ form.detail.meatIngredients.length === 3 && !form.detail.meatIngredients.includes(ingr.name) ? true : false } 
                                onChange={handleOnChange}
                                marginRight="2"
                                marginBottom="2"
                                size="lg"
                                bg="teal.200"
                                type="checkbox"
                                name="meatIngredients"
                                value={ingr.name} >                                    
                                </Checkbox>
                              <FormLabel htmlFor={ingr.id} display='inline' >{ingr.name}</FormLabel>
                            </Box>
                          ))
                        }
                      </Box>
                    </CheckboxGroup>
                  </GridItem>
                </Grid>
              </Box>

          ) : ( <Text color="red">{error_query.error}</Text> )}

          <Button type="submit" hoverbg="white" size="lg" borderRadius="full" padding="10px" margin="30px" background="linear-gradient(to right, #f27833, #eab830)" >
            Add to cart
          </Button>
        </form>

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
  );
};

export default CreatePizza;
