import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_QUERY,
  GET_PIZZAS,
  PUSH_TO_CART,
  SORT_PIZZAS_ALPHABETICALLY,
} from "./actionTypes";
import axios from "axios";

export const getIngredients = () => {
  return async function (dispatch) {
    let response = await axios(`http://localhost:3001/ingredients`);
    return dispatch({ type: GET_INGREDIENTS, payload: response.data });
  };
};

export const getIngredientsQuery = (name) => {
  return async function (dispatch) {
    let response = await axios(
      `http://localhost:3001/ingredients?name=${name}`
    );
    return dispatch({ type: GET_INGREDIENTS_QUERY, payload: response.data });
  };
};

export const getPizzas = () => {
  return async function (dispatch) {
    let response = await axios.get(`http://localhost:3001/pizzas`);
    return dispatch({ type: GET_PIZZAS, payload: response.data });
  };
};

export const sortPizzasAlphabetically = (pizzas, state) => {
  console.log(pizzas);
  const sortedPizzas = pizzas.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();
    if (state === "A-Z") {
      if (nameA < nameB) return -1;
      if (nameA > nameB) return 1;
      return 0;
    } else if (state === "Z-A") {
      if (nameA > nameB) return -1;
      if (nameA < nameB) return 1;
      return 0;
    }
  });

  return { type: SORT_PIZZAS_ALPHABETICALLY, payload: sortedPizzas };
};

export const pushToCart = (form) => {
  return { type: PUSH_TO_CART, payload: form };
};
