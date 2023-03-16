import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_QUERY,
  GET_PIZZAS,
  PUSH_TO_CART,
  SORT_PIZZAS,
  POP_TO_CART,
} from "./actionTypes";

const initialState = {
  ingredients: [],
  pizzas: [],
  cart: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };
    case GET_INGREDIENTS_QUERY:
      return {
        ...state,
        ingredients: action.payload,
      };
    case GET_PIZZAS:
      return {
        ...state,
        pizzas: action.payload,
      };
    case PUSH_TO_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };
    case POP_TO_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case SORT_PIZZAS:
      return {
        ...state,
        pizzas: action.payload,
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
