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
    base: "",
    mozzarella: "",
    price: 0,
    toppingIngredients: [],
    cheeseIngredients: [],
    meatIngredients: [],
  });
  const [errors, setErrors] = useState({
    dough: "",
    type: "",
    base: "",
    mozzarella: "",
    toppingIngredients: "",
    cheeseIngredients: "",
    meatIngredients: "",
  });
  const [typesOfDough, setTypesOfDough] = useState([])
  const [typesOfBaking, setTypesOfBanking] = useState([])
  const [sauceBases, setSauceBases] = useState([])
  const [cheeseBases, setCheeseBases] = useState([])
  const [toppings, setToppings] = useState([])
  const [cheeses, setCheeses] = useState([])
  const [meats, setMeats] = useState([])
  const [extras,setExtras] = useState([])
  const dispatch = useDispatch();
  
  const ingredients = useSelector((state) => state.ingredients);
  
  const validate = (form) => {
    const newErrors = {};

    if (!form.dough) newErrors.dough = "Dough required";
    if (!form.type) newErrors.type = "Type of pizza required";
    if (!form.base) newErrors.base = "Type of base required"
    if (!form.mozzarella) newErrors.mozzarella = "Mozzarella type required";
    // if (!form.toppingIngredients.length) newErrors.toppingIngredients = "Ingredients required";
    // if (!form.cheeseIngredients.length) newErrors.cheeseIngredients = "Ingredients required";

    setErrors(newErrors);
  }

  const handleOnChange = (event) => {
    const currentIngredientPrice = ingredients.filter(ingr => ingr.name === event.target.value)
    if (event.target.checked) {
      // validate({
      //   ...form,
      //   ingredients: [...form.ingredients, event.target.value],
      //   price: form.price + currentIngredientPrice[0].price
      // })
      setForm({
        ...form,
        [event.target.name]: [...form[event.target.name], event.target.value],
        price: form.price + currentIngredientPrice[0].price
      })
    }
    else {
      const ingredientsChecked = form[event.target.name].filter(ingre => ingre !== event.target.value)
      // validate({
      //   ...form,
      //   ingredients: ingredientsChecked,
      //   price: form.price - currentIngredientPrice[0].price})
      setForm({
        ...form,
        [event.target.name]: ingredientsChecked,
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



  const handleSubmit = (e) => {
    e.preventDefault()
    validate(form)
    // !form.dough || !form.type || !form.mozzarella || !form.ingredients.length ? (null) : (dispatch(pushToCart(form)))
    if (!form.dough || !form.type || !form.base || !form.mozzarella) return null
    // || !form.toppingIngredients.length || !form.cheeseIngredients.length
    else {
      const modal = document.querySelector('#createPizzaModal');
      dispatch(pushToCart(form))
      modal.showModal();
    }
  }
  useEffect(() => {
    dispatch(getIngredients());
  }, []);

  useEffect(() => {
    const typesOfDoughFilter = ingredients.length && ingredients.filter(i => i.category === "Dough")
    const typesOfBakingFilter = ingredients.length && ingredients.filter(i => i.category === "Type")
    const sauceBasesFilter = ingredients.length && ingredients.filter(i => i.category === "Sauce base")
    const cheeseBasesFilter = ingredients.length && ingredients.filter(i => i.category === "Cheese base")
    const toppingIngredientsFilter = ingredients.length && ingredients.filter(i => i.category === "Toppings")
    const cheeseIngredientsFilter = ingredients.length && ingredients.filter(i => i.category === "Cheese")
    const meatIngredientsFilter = ingredients.length && ingredients.filter(i => i.category === "Meat")
    const extraIngredientes = ingredients.length && ingredients.filter(i => i.extra)
    setTypesOfDough(typesOfDoughFilter)
    setTypesOfBanking(typesOfBakingFilter)
    setSauceBases(sauceBasesFilter)
    setCheeseBases(cheeseBasesFilter)
    setToppings(toppingIngredientsFilter)
    setCheeses(cheeseIngredientsFilter)
    setMeats(meatIngredientsFilter)
    setExtras(extraIngredientes)
  }, [ingredients])

  return (
    <>
      <Text fontSize='5xl'>CREATE NEW PIZZA</Text>

      <form onSubmit={handleSubmit}>
        <div>
          {/* <label> Dough (1):</label> */}
          <br></br>
          {/* {
            typesOfDough && typesOfDough.map((dough) => {
              return (
                <label> <input type="radio" name="dough" value={dough.name} onChange={handleRadio} />{dough.name} </label>
              )
            })
          } */}
          <label> Dough (1):</label>
          <br></br>
          <label> <input type="radio" name="dough" value="wheat" onChange={handleRadio} /> Wheat </label>
          <label> <input type="radio" name="dough" value="wholemeal flour" onChange={handleRadio} /> Wholemeal flour </label>
          <label> <input type="radio" name="dough" value="gluten free" onChange={handleRadio} /> Gluten free </label>
        </div>
        {errors.dough && <span>{errors.dough}</span>}
        <br></br>
        <div>
          {/* <label> Type (1):</label> */}
          <br></br>
          {/* {
            typesOfBaking && typesOfBaking.map((t) => {
              return (
                <label> <input type="radio" name="type" value={t.name} onChange={handleRadio} />{t.name}</label>
              )
            })
          } */}
          <label> Type (1):</label>
          <br></br>
          <label> <input type="radio" name="type" value="thin" onChange={handleRadio} /> Thin </label>
          <label> <input type="radio" name="type" value="gross" onChange={handleRadio} /> Gross </label>
        </div>
        {errors.type && <span>{errors.type}</span>}
        <br></br>
        <div>
          {/* <label> Base of (1):</label> */}
          <br></br>
          {/* {
            sauceBases && sauceBases.map((base) => {
              return (
                <label> <input type="radio" name="base" value={base.name} onChange={handleRadio} />{base.name} </label>
              )
            })
          } */}
          <label> Base of (1):</label>
          <br></br>
          <label> <input type="radio" name="base" value="tomato" onChange={handleRadio} /> Tomato </label>
          <label> <input type="radio" name="base" value="milk cream" onChange={handleRadio} /> Milk cream </label>
          <label> <input type="radio" name="base" value="white sauce" onChange={handleRadio} /> White sauce </label>
        </div>
        {errors.base && <span>{errors.base}</span>}
        <br></br>
        <div>
          {/* <label> Muzarella (1):</label> */}
          <br></br>
          {/* {
            cheeseBases && cheeseBases.map((base) => {
              return (
                <label> <input type="radio" name="mozzarella" value={base.name} onChange={handleRadio} /> {base.name} </label>
              )
            })
          } */}
          <label> Muzarella (1):</label>
          <br></br>
          <label> <input type="radio" name="mozzarella" value="mozarella" onChange={handleRadio} /> Mozzarella </label>
          <label> <input type="radio" name="mozzarella" value="vegan mozarella" onChange={handleRadio} /> Vegan Mozzarella </label>
          <label> <input type="radio" name="mozzarella" value="lactose-free mozarella" onChange={handleRadio} /> Lactose-free Mozzarella </label>
          <label> <input type="radio" name="mozzarella" value="without mozarella" onChange={handleRadio} /> Without Mozzarella </label>
        </div>
        {errors.mozzarella && <span>{errors.mozzarella}</span>}
        <br></br>
        <div>
          <SearchBar />
          <br></br>
          <label>Toppings list (2):</label>
          {
            toppings && toppings.map((ingr) => {
                return (
                  <div>
                    <input type="checkbox" id={ingr.id} name="toppingIngredients" value={ingr.name} key={ingr.id} checked={form.toppingIngredients.includes(ingr.name) ? true : false} onChange={handleOnChange} disabled={form.toppingIngredients.length === 2 && !form.toppingIngredients.includes(ingr.name) ? true : false}></input>
                    <label htmlFor={ingr.id}>{ingr.name}</label>
                  </div>
                )
              })
          }
          {errors.toppingIngredients && <span>{errors.toppingIngredients}</span>}
        </div>
        <br></br>
        <div>
          <label>Cheeses list (3): </label>
          {
            
            cheeses && cheeses.map((ingr) => {
              return (
                <div>
                  <input type="checkbox" key={ingr.id} id={ingr.id} name="cheeseIngredients" value={ingr.name} checked={form.cheeseIngredients.includes(ingr.name) ? true : false} onChange={handleOnChange} disabled={form.cheeseIngredients.length === 3 && !form.cheeseIngredients.includes(ingr.name) ? true : false}></input>
                  <label htmlFor={ingr.id}>{ingr.name}</label>
                </div>
              )
            })
          }
          {errors.cheeseIngredients && <span>{errors.cheeseIngredients}</span>}
        </div>
        <br></br>

        <div>
          <label>Meats list (3) :</label>
          {
            
            meats && meats.map((ingr) => {
              return (
                <div>
                  <input type="checkbox" key={ingr.id} id={ingr.id} name="meatIngredients" value={ingr.name} checked={form.meatIngredients.includes(ingr.name) ? true : false} onChange={handleOnChange} disabled={form.meatIngredients.length === 3 && !form.meatIngredients.includes(ingr.name) ? true : false}></input>
                  <label htmlFor={ingr.id}>{ingr.name}</label>
                </div>
              )
            })
          }
            
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
          <h2>Pizza created successfully!</h2>
          <div className={styles.contButton} >
            <Link to='/cart' className={styles.linkBtn} ><Button bg={'orange'} fontSize={'2rem'} width={'90%'} p={'1.6rem'} margin={'1.2rem 0 .8rem 0'} >Go to cart</Button></Link>
          </div>
        </dialog>
      </form>

    </>


  )
}

export default CreatePizza;