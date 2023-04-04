import { Button, Text, FormLabel, Box, Select } from "@chakra-ui/react";
import { useState } from "react";
import CreatePizzaAdmin from './CreatePizzaAdmin/CreatePizzaAdmin';
import CreateDrinkAdmin from './CreateDrinkAdmin/CreateDrinkAdmin';
import CreateSideAdmin from './CreateSideAdmin/CreateSideAdmin';
import css from './CreateProduct.module.css';
import { Link } from "react-router-dom";



const CreateProduct = () => {

    const [ itemCategory, setItemCategory ] = useState('Pizzas');


    const itemCategoryHandler = (event) => {
        const { value } = event.target;
        setItemCategory(value);
      };
    

    return (
        <>        
            <Box display='flex' bgGradient="linear(to-l,#000000, #272727)" alignItems='center'  >
                <Box ml='2rem' ><Link to='/admin' ><Button px='8px' >🡸 Back to dashboard</Button></Link></Box>
                <Text fontSize="3.6rem" color="#f27825" width='60%' display="flex" justifyContent='center' mb='1rem' >CREATE NEW ITEM</Text>
                <Box color='#fff' w='20%' className={css.contSelect} ml="40px" >
                    <FormLabel >Select item category: </FormLabel>
                    <Select onChange={itemCategoryHandler} color="#f27825">    
                        <option>Pizzas</option>
                        <option>Drinks</option>
                        <option>Sides</option>
                    </Select>
                </Box>
            </Box>
            { itemCategory === 'Pizzas' && <Box><CreatePizzaAdmin /></Box>}
            { itemCategory === 'Drinks' && <Box><CreateDrinkAdmin /></Box>}
            { itemCategory === 'Sides' && <Box><CreateSideAdmin /></Box>}
        </>
    )
};



export default CreateProduct;