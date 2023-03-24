import { Box, Text, FormLabel, Select } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import css from './CreatePizza.module.css';



const IngredientSelector = ({ toppings, setToppings, cheeses, setCheeses, meats, setMeats, form, setForm }) => {

    const { ingredients } = useSelector((state) => state);


    const handleOnChange = (event) => {
    const { name, value } = event.target;    
    const currentIngredient = (ingredients.filter((ingr) => ingr.name === value))[0];
    
    setForm({ ...form, detail: { ...form.detail, [name]: [ ...form.detail[name], value ] }, price: form.price + currentIngredient.price });
    
    if (currentIngredient.category === 'Toppings') return setToppings(toppings.filter((topping) => topping.name !== value));
    if (currentIngredient.category === 'Cheese') return setCheeses(cheeses.filter((cheese) => cheese.name !== value));
    if (currentIngredient.category === 'Meat') return setMeats(meats.filter((meat) => meat.name !== value));
  };



    return(
        <>
            <Box width='100%' color='black' display='flex' justifyContent='space-evenly' mt='1.2rem'>

                <Box className={css.contSelect} >                    
                    <FormLabel fontWeight="bold" mb='1.2rem' >Toppings list (Select MAX 2):</FormLabel>
                    <Select 
                        disabled={ form.detail.toppingIngredients.length === 2 ? true : false }
                        name='toppingIngredients'
                        onChange={handleOnChange}
                        width='15rem'
                        cursor='pointer'
                        color="#f27825"
                        >
                        <option>Select Toppings</option>
                        {
                            toppings?.map((topping) => (
                                <option key={topping.id} value={topping.name} >{topping.name}</option>
                            ))
                        }
                    </Select>
                </Box>

                <Box className={css.contSelect} >                    
                    <FormLabel fontWeight="bold" mb='1.2rem' >Cheeses list (Select MAX 3):</FormLabel>
                    <Select
                        disabled={ form.detail.cheeseIngredients.length === 3 ? true : false }
                        name='cheeseIngredients'
                        onChange={handleOnChange}
                        width='15rem'
                        cursor='pointer'
                        color="#f27825" >
                        <option>Select Cheeses</option>
                        {
                            cheeses?.map((cheese) => (
                                <option key={cheese.id} value={cheese.name} >{cheese.name}</option>
                            ))
                        }
                    </Select>  
                </Box>

                <Box className={css.contSelect} >                    
                    <FormLabel fontWeight="bold" mb='1.2rem' > Meats list (Select MAX 3):</FormLabel>
                    <Select 
                    disabled={ form.detail.meatIngredients.length === 3 ? true : false }
                    name='meatIngredients' 
                    onChange={handleOnChange}
                    width='15rem'
                    cursor='pointer'
                    color="#f27825" >
                        <option>Select Meats</option>
                        {
                            meats?.map((meat) => (
                                <option key={meat.id} value={meat.name} >{meat.name}</option>
                            ))
                        }
                    </Select>  
                </Box>                                       
            </Box>                   
        </>
    )
};


export default IngredientSelector;