import {useState, useEffect }from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getIngredients, getIngredientsQuery } from '../../redux/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import {Button, Text } from "@chakra-ui/react";

const CreatePizza = () => {

 

    const [form, setForm] = useState({
        dough:[],
        type:[],
        mozzarella:[],
      });

      const dispatch = useDispatch();
  let ingredients = useSelector((state) => state.ingredients);

  const handlerQuery = (e) => {
    dispatch(getIngredientsQuery(e.target.value));
  };
    

      //  console.log(ingredients);
    return (
        <>
    <Text fontSize='5xl'>CREATE NEW PIZZA</Text>
        
      <form>
        <div>
          <label> Dough:</label>
        
            <label> <input type="radio" name= "dough" value="wholemeal flour" /> wholemeal flour </label>
            <label> <input type="radio" name= "dough" value="wheat" /> wheat </label> 
            <label> <input type="radio" name= "dough" value="gluten free" /> gluten free </label>
                            
         </div> 

         <div>
          <label> Type:</label>
        
            <label> <input type="radio" name= "type" value="thin" /> Thin </label>
            <label> <input type="radio" name= "type" value="gross" /> Gross </label> 
                 
         </div> 

         <div>
          <label> Muzarella:</label>
            <label> <input type="radio" name= "mozzarella" value="mozarella" /> Mozzarella </label>
            <label> <input type="radio" name= "mozzarella" value="vegan mozarella" /> Vegan Mozzarella </label>
            <label> <input type="radio" name= "mozzarella" value="lactose-free mozarella" /> Lactose-free Mozzarella </label>
            <label> <input type="radio" name= "mozzarella" value="without mozarella" /> Without Mozzarella </label>              
         </div> 

         <div>
      <SearchBar />
    </div>

    <Button
          hoverbg="white"
          size="lg"
          borderRadius="full"
          padding="10px"
          margin="30px"
          background="linear-gradient(to right, #f27833, #eab830)"
        >
          Add to cart
        </Button>
        

         </form>

        </>


)}

export default CreatePizza;
