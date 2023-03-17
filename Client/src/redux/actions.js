import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_QUERY,
  GET_PIZZAS,
  PUSH_TO_CART,
  SORT_PIZZAS,
  POP_TO_CART,
  FILTER_BY_VEGETARIAN,
  ERROR_QUERY 
} from "./actionTypes";
import axios from "axios";

export const getIngredients = () => {
  return async function (dispatch) {
    let response = await axios(`http://localhost:3001/ingredients`);
    return dispatch({ type: GET_INGREDIENTS, payload: response.data });
  };
};

export const getIngredientsQuery = (name) => {
  return function(dispatch){
    axios(`http://localhost:3001/ingredients?name=${name}`)
    .then(res => res.data)
    .then(data => dispatch({ type: GET_INGREDIENTS_QUERY, payload:data }))
}
};

export const getPizzas = () => {
  return async function (dispatch) {
    let response = await axios.get(`http://localhost:3001/pizzas`);
    return dispatch({ type: GET_PIZZAS, payload: response.data });
  };
};

export const sortPizzas = (pizzas, sortBy) => {
  let sortedPizzas;
  if (sortBy === "A-Z") {
    sortedPizzas = pizzas.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === "Z-A") {
    sortedPizzas = pizzas.sort((a, b) => b.name.localeCompare(a.name));
  } else if (sortBy === "Price: Low to high") {
    sortedPizzas = pizzas.sort((a, b) => a.price - b.price);
  } else if (sortBy === "Price: High to low") {
    sortedPizzas = pizzas.sort((a, b) => b.price - a.price);
  }
  return { type: SORT_PIZZAS, payload: sortedPizzas };
};

export const pushToCart = (form) => {
  return { type: PUSH_TO_CART, payload: form };
};

export const popToCart = (sliceForm) => {
  return { type: POP_TO_CART, payload: sliceForm };
};

export const filterByVegetarian = (filterVege) => {
  return {type:FILTER_BY_VEGETARIAN, payload: filterVege }
};