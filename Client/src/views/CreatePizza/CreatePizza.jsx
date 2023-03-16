import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getIngredients, pushToCart } from '../../redux/actions';
import SearchBar from '../../components/SearchBar/SearchBar';
import { Button, Text, Box } from "@chakra-ui/react";
import styles from './CreatePizza.module.css';

const CreatePizza = () => {

  const [form, setForm] = useState({
    name: "Create your pizza",
    image: "",
    dough: "",
    type: "",
    mozzarella: "",
    price: 0,
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

  const handleOnChange = (event) => {
    const currentIngredientPrice = ingredients.filter(ingr => ingr.name === event.target.value)
    console.log(currentIngredientPrice);
    if (event.target.checked) {
      // validate({
      //   ...form,
      //   ingredients: [...form.ingredients, event.target.value],
      //   price: form.price + currentIngredientPrice[0].price
      // })
      setForm({
        ...form,
        ingredients: [...form.ingredients, event.target.value],
        price: form.price + currentIngredientPrice[0].price
      })
    }
    else {
      const ingredientsChecked = form.ingredients.filter(ingre => ingre !== event.target.value)
      // validate({
      //   ...form,
      //   ingredients: ingredientsChecked,
      //   price: form.price - currentIngredientPrice[0].price})
      setForm({
        ...form,
        ingredients: ingredientsChecked,
        price: form.price - currentIngredientPrice[0].price
      })
    }
  }

  const handleRadio = (event) => {
    // validate({ ...form, [event.target.name]: event.target.value })
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }


  const validate = (form) => {
    const newErrors = {};

    if (!form.dough) newErrors.dough = "Dough required";
    if (!form.type) newErrors.type = "Type of pizza required";
    if (!form.mozzarella) newErrors.mozzarella = "Mozzarella type required";
    if (!form.ingredients.length) newErrors.ingredients = "Ingredients required";

    setErrors(newErrors);
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    validate(form)
    // !form.dough || !form.type || !form.mozzarella || !form.ingredients.length ? (null) : (dispatch(pushToCart(form)))
    if (!form.dough || !form.type || !form.mozzarella || !form.ingredients.length) return null
    else {
      const modal = document.querySelector('#createPizzaModal');
      dispatch(pushToCart(form))
      modal.showModal();
    }
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
        {errors.dough && <span>{errors.dough}</span>}

        <div>
          <label> Type:</label>

          <label> <input type="radio" name="type" value="thin" onChange={handleRadio} /> Thin </label>
          <label> <input type="radio" name="type" value="gross" onChange={handleRadio} /> Gross </label>

        </div>
        {errors.type && <span>{errors.type}</span>}

        <div>
          <label> Muzarella:</label>
          <label> <input type="radio" name="mozzarella" value="mozarella" onChange={handleRadio} /> Mozzarella </label>
          <label> <input type="radio" name="mozzarella" value="vegan mozarella" onChange={handleRadio} /> Vegan Mozzarella </label>
          <label> <input type="radio" name="mozzarella" value="lactose-free mozarella" onChange={handleRadio} /> Lactose-free Mozzarella </label>
          <label> <input type="radio" name="mozzarella" value="without mozarella" onChange={handleRadio} /> Without Mozzarella </label>
        </div>
        {errors.mozzarella && <span>{errors.mozzarella}</span>}

        <div>
          <SearchBar />
          {
            !ingredients.length ? <p>no results</p> :
              ingredients.map((ingr) => {
                return (
                  <div>
                    <input type="checkbox" id={ingr.id} value={ingr.name} key={ingr.id} checked={form.ingredients.includes(ingr.name) ? true : false} onChange={handleOnChange} disabled={form.ingredients.length === 2 && !form.ingredients.includes(ingr.name) ? true : false}></input>
                    <label for={ingr.id}>{ingr.name}</label>
                  </div>
                )
              })
          }
          {errors.ingredients && <span>{errors.ingredients}</span>}
        </div>

        <Button
          type='submit'
          // isDisabled={errors.dough || errors.type || errors.mozzarella || errors.ingredients ? true : false}
          hoverbg="white"
          size="lg"
          borderRadius="full"
          padding="10px"
          margin="30px"
          background="linear-gradient(to right, #f27833, #eab830)"
        >
          Add to cart
        </Button>

        <dialog id='createPizzaModal' >
          <h2>Pizza created succesfully!</h2>
          <div className={styles.contButton} >
            <Link to='/cart' className={styles.linkBtn} ><Button bg={'orange'} fontSize={'2rem'} width={'90%'} p={'1.6rem'} margin={'1.2rem 0 .8rem 0'} >Go to cart</Button></Link>
          </div>
        </dialog>
      </form>

    </>


  )
}

export default CreatePizza;