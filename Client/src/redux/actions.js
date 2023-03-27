import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_QUERY,
  GET_PIZZAS,
  PUSH_TO_CART,
  SORT_PIZZAS,
  POP_TO_CART,
  FILTER_BY_VEGETARIAN,
  ERROR_QUERY,
  FILTER_DRINKS_TERMS,
  FILTER_SIDES_TERMS,
  FILTER_PIZZAS_TERMS,
  GET_DATA_USERS,
  GET_USER_BY_ID,
  UPDATE_CART_USER,
  PUT_CART_USER,
  CLEAR_CART_LOGOUT,
  GET_ALL_USERS,
  UPDATE_CART_ITEM_QUANTITY,
  OPEN_SIGNUP_DRAWER,

} from "./actionTypes";
import axios from "axios";

export const getIngredients = () => {
  return async function (dispatch) {
    let response = await axios(`/ingredients`);
    return dispatch({ type: GET_INGREDIENTS, payload: response.data });
  };
};

export const getUserById = (id) => {
  return async function (dispatch) {
    let response = await axios.get(`/users/${id}`);
    return dispatch({ type: GET_USER_BY_ID, payload: response.data });
  };
};

export const getIngredientsQuery = (name) => {
  return function (dispatch) {
    axios(`/ingredients?name=${name}`)
      .then((res) => res.data)
      .then((data) => dispatch({ type: GET_INGREDIENTS_QUERY, payload: data }));
  };
};

export const getPizzas = () => {
  return async function (dispatch) {
    let response = await axios.get(`/pizzas`);
    return dispatch({ type: GET_PIZZAS, payload: response.data });
  };
};
export const getDataUsers = () => {
  return async function (dispatch) {
    let response = await axios.get("/users");
    return dispatch({ type: GET_DATA_USERS, payload: response.data });
  };
};

export const getAllUsers = () => {
  return async function (dispatch) {
    let response = await axios.get("/users");
    return dispatch({ type: GET_ALL_USERS, payload: response.data });
  };
}
export const sortPizzas = (selectedSort) => {
  return { type: SORT_PIZZAS, payload: selectedSort };
};

export const pushToCart = (itemCart) => {
  return { type: PUSH_TO_CART, payload: itemCart };
};

export const popToCart = (sliceForm) => {
  return { type: POP_TO_CART, payload: sliceForm };
};

export const updateCartItemQuantity = (itemId, quantity) => {
  return {type: UPDATE_CART_ITEM_QUANTITY, payload: { itemId, quantity }}
}


export const putCartUser = (updateCartUser) => {

  return async function (dispatch) {
    await axios.put(`/users/updateCart`, updateCartUser );
    return;
  };
};



export const clearCartUser = () => {
    return { type: CLEAR_CART_LOGOUT, payload: [] };
  };

export const filterByVegetarian = (filterVege) => {
  return { type: FILTER_BY_VEGETARIAN, payload: filterVege };
};

export const filterDrinksTerms = (filterTerms) => {
  return { type: FILTER_DRINKS_TERMS, payload: filterTerms };
};

export const filterSidesTerms = (sidesTerms) => {
  return { type: FILTER_SIDES_TERMS, payload: sidesTerms };
};

export const filterPizzasTerms = (pizzasTerms) => {
  return { type: FILTER_PIZZAS_TERMS, payload: pizzasTerms };
};

export const updateCartUser = (cartUser) => {
  return { type: UPDATE_CART_USER, payload: cartUser };
};

export const openSignupDrawer = (boolean) => {
  return { type: OPEN_SIGNUP_DRAWER, payload: boolean };
};
