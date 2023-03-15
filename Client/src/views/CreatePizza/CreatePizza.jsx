import {useState, useEffect }from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getIngredients, getIngredientsQuery } from '../../redux/actions';
// import SearchBar from '../../components/SearchBar/SearchBar';
import {Button, Text } from "@chakra-ui/react";

const CreatePizza = () => {

     const [form, setForm] = useState({
        dough:[],
        type:[],
        mozzarella:[],
        ingredients:[],
      });


      const [errors, setErrors] = useState({
        dough:"",
        type:"",
        mozzarella:"",
        ingredients:"",
      });


  const dispatch = useDispatch();
  let ingredients = useSelector((state) => state.ingredients);

  // const handlerQuery = (e) => {
  //   dispatch(getIngredientsQuery(e.target.value));
  // };

  
        
        const handleOnChange = (event) => {
          if(event.target.checked) 
          setForm({
            ...form,
            ingredients:[...form.ingredients, event.target.value]
          })
          else {
            const ingredientsChecked = form.ingredients.filter(ingre=> ingre !== event.target.value)
            setForm({
              ...form,
              ingredients:ingredientsChecked,
            })
          }
        }

        const handleRadio = (event) => {
          if(event.target.value) {
            setForm({
              ...form,
              dough: event.target.value
            })
          }
        }


        
        const validate = (form) => {
          const newErrors = {};
          
          if (!form.dough) newErrors.dough = "Dough required";   
          if (!form.type) newErrors.type = "Type of pizza required";
          if (!form.mozzarella) newErrors.mozzarella = "Mozzarella type required";
          if (!form.ingredients) newErrors.ingredients = "Ingredients required";
          
          setErrors(newErrors);
        }
        
        
        
        useEffect(()=>{
          dispatch(getIngredients());
        }, []);
        
        
      
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
         {
       ingredients.map((ingr) => {
          return(
            <div>
              <input type="checkbox" id={ingr.id} value={ingr.name} onChange={handleOnChange} disabled={form.ingredients.length === 2 && !form.ingredients.includes(ingr.name)? true : false}></input>
              <label for={ingr.id}>{ingr.name}</label>
            </div>
          ) 
        })  
        }


      {/* <SearchBar /> */}
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