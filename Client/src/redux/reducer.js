import {
  GET_INGREDIENTS,
  GET_INGREDIENTS_QUERY,
  GET_PIZZAS,
  UPDATE_CART_ITEM_QUANTITY,
  PUSH_TO_CART,
  CLEAR_CART_LOGOUT,
  POP_TO_CART,
  SORT_PIZZAS,
  FILTER_BY_VEGETARIAN,
  FILTER_DRINKS_TERMS,
  FILTER_SIDES_TERMS,
  FILTER_PIZZAS_TERMS,
  GET_DATA_USERS,
  GET_USER_BY_ID,
  UPDATE_CART_USER,
  GET_ALL_USERS,
  OPEN_SIGNUP_DRAWER,
  GET_ITEM_DETAIL,
  USER_FAVORITES,
  CLEAR_USER,
  GET_SALES

} from "./actionTypes";

const initialState = {
  ingredients: [],
  pizzas: [],
  itemDetail:{},
  pizzasbackup: [],
  cart: [],
  error_query: null,
  //-peruano3000--------
  filterDrinksTerms: {},
  //--------------------
  filterSidesTerms: {},
  //--------------------
  filterPizzasTerms: {},
  user: {},
  users:[],
  signupDrawer: false,

  sales: [],

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };

    case GET_USER_BY_ID:
      return { ...state, user: action.payload };

    case GET_INGREDIENTS_QUERY:
      if (Array.isArray(action.payload)) {
        let ingredientsQuery = action.payload.filter(
          (ingre) =>
            ingre.category === "Toppings" ||
            ingre.category === "Cheese" ||
            ingre.category === "Meat"
        );
        let ingredientsTotal = state.ingredients.filter(
          (ingre) =>
            ingre.category === "Dough" ||
            ingre.category === "Type" ||
            ingre.category === "Sauce base" ||
            ingre.category === "Cheese base"
        );
        return {
          ...state,
          ingredients: ingredientsTotal.concat(ingredientsQuery),
          error_query: null,
        };
      } else {
        return {
          ...state,
          error_query: action.payload,
        };
      }

    case GET_PIZZAS:
      const orderedById = OrderById(action.payload);
      return {
        ...state,
        pizzas: orderedById,
        pizzasbackup: orderedById,
      };
    case GET_ITEM_DETAIL:
      return{
        ...state,
        itemDetail:action.payload
      }
    case UPDATE_CART_ITEM_QUANTITY:
      const updatedCart = state.cart.map((item) => {
        if (item.id === action.payload.itemId) {
          return { ...item, quantity: parseInt(action.payload.quantity) };
        } else {
          return item;
        }
      });
      return { ...state, cart: updatedCart };

    case UPDATE_CART_USER:
      return {
        ...state,
        cart: [...state.cart, ...action.payload],
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

    case CLEAR_CART_LOGOUT:
      return {
        ...state,
        cart: action.payload,
      };

    case SORT_PIZZAS:
      if (action.payload === "None") return { ...state };

      let sortedPizzas;
      if (action.payload === "From A to Z") {
        sortedPizzas = state.pizzas.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      } else if (action.payload === "From Z to A") {
        sortedPizzas = state.pizzas.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      } else if (action.payload === "Low to high") {
        sortedPizzas = state.pizzas.sort((a, b) => a.price - b.price);
      } else if (action.payload === "High to low") {
        sortedPizzas = state.pizzas.sort((a, b) => b.price - a.price);
      }
      return {
        ...state,
        pizzas: [...sortedPizzas],
      };

    case FILTER_BY_VEGETARIAN:
      if (action.payload === "all")
        return { ...state, pizzas: state.pizzasbackup };

      const filtrados =
        action.payload === "yes"
          ? state.pizzasbackup.filter((pizz) => pizz.vegetarian === true)
          : state.pizzasbackup.filter((pizz) => pizz.vegetarian === false);

      return {
        ...state,
        pizzas: filtrados,
      };

    case FILTER_DRINKS_TERMS:
      return { ...state, filterDrinksTerms: action.payload };

    case FILTER_SIDES_TERMS:
      return { ...state, filterSidesTerms: action.payload };

    case FILTER_PIZZAS_TERMS:
      return { ...state, filterPizzasTerms: action.payload };
    case GET_DATA_USERS:
      return {
        ...state,
        user: action.payload,
      };

    case GET_ALL_USERS:
      return{
        ...state,
        users:action.payload
      }

    case OPEN_SIGNUP_DRAWER:
      return { ...state, signupDrawer: action.payload };

    case USER_FAVORITES:
      return { ...state, user: action.payload };

    case CLEAR_USER:

      return {...state, user:{}};
    
    case GET_SALES:
      return {...state, sales: action.payload}

      
    default:
      return { ...state };
  }
};

const OrderById = (items) => {
  items.sort(function (a, b) {
    if (a.id > b.id) return 1;
    if (b.id > a.id) return -1;
    return 0;
  });
  return items;
};

export default rootReducer;
