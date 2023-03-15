import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients, pushToCart } from '../../redux/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Button, Text } from "@chakra-ui/react";

const CreatePizza = () => {

  const [form, setForm] = useState({
    name: "Create your pizza",
    image: "",
    dough: "",
    type: "",
    mozzarella: "",
    ingredients: [],
  });


  const [errors, setErrors] = useState({
    dough: "",
    type: "",
    mozzarella: "",
    ingredients: "",
  });


  const dispatch = useDispatch();
  let ingredients = useSelector((state) => state.ingredients);

  // const handlerQuery = (e) => {
  //   dispatch(getIngredientsQuery(e.target.value));
  // };



  const handleOnChange = (event) => {
    if (event.target.checked)
      setForm({
        ...form,
        ingredients: [...form.ingredients, event.target.value]
      })
    else {
      const ingredientsChecked = form.ingredients.filter(ingre => ingre !== event.target.value)
      setForm({
        ...form,
        ingredients: ingredientsChecked,
      })
    }
  }

  const handleRadio = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    })
  }


  const validate = (form) => {
    const newErrors = {};

    if (!form.dough) newErrors.dough = "Dough required";
    if (!form.type) newErrors.type = "Type of pizza required";
    if (!form.mozzarella) newErrors.mozzarella = "Mozzarella type required";
    if (!form.ingredients) newErrors.ingredients = "Ingredients required";

    setErrors(newErrors);
  }

  const handleSubmit =(e) => { 
    e.preventDefault()
    dispatch(pushToCart(form))
  }
  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  return (
    <>
      <Text fontSize='5xl'>CREATE NEW PIZZA</Text>

      <form onSubmit={handleSubmit}>
        <div>
          <label> Dough:</label>

          <label> <input type="radio" name="dough" value="wholemeal flour" onChange={handleRadio} /> wholemeal flour </label>
          <label> <input type="radio" name="dough" value="wheat" onChange={handleRadio} /> wheat </label>
          <label> <input type="radio" name="dough" value="gluten free" onChange={handleRadio} /> gluten free </label>

        </div>

        <div>
          <label> Type:</label>

          <label> <input type="radio" name="type" value="thin" onChange={handleRadio} /> Thin </label>
          <label> <input type="radio" name="type" value="gross" onChange={handleRadio} /> Gross </label>

        </div>

        <div>
          <label> Muzarella:</label>
          <label> <input type="radio" name="mozzarella" value="mozarella" onChange={handleRadio} /> Mozzarella </label>
          <label> <input type="radio" name="mozzarella" value="vegan mozarella" onChange={handleRadio} /> Vegan Mozzarella </label>
          <label> <input type="radio" name="mozzarella" value="lactose-free mozarella" onChange={handleRadio} /> Lactose-free Mozzarella </label>
          <label> <input type="radio" name="mozzarella" value="without mozarella" onChange={handleRadio} /> Without Mozzarella </label>
        </div>

        <div>
          <SearchBar />
          {
            !ingredients.length? <p>no results</p> :
            ingredients.map((ingr) => {
              return (
                <div>
                  <input type="checkbox" id={ingr.id} value={ingr.name}  key={ingr.id} checked={form.ingredients.includes(ingr.name) ? true : false} onChange={handleOnChange} disabled={form.ingredients.length === 2 && !form.ingredients.includes(ingr.name) ? true : false}></input>
                  <label for={ingr.id}>{ingr.name}</label>
                </div>
              )
            })
          }
        </div>
        <Button
          // disabled
          type='submit'
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


  )
}

export default CreatePizza;