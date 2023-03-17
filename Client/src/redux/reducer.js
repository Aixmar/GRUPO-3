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

const initialState = {
  ingredients: [],
  pizzas: [],
  pizzasbackup: [],
  cart: [],
  error_query: null


};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return {
        ...state,
        ingredients: action.payload,
      };
    case GET_INGREDIENTS_QUERY:
      
      if(Array.isArray(action.payload)){
        let ingredientsQuery = action.payload.filter(ingre => ingre.category === "Toppings" || ingre.category === "Cheese" || ingre.category === "Meat")
        let ingredientsTotal = state.ingredients.filter(ingre => ingre.category === "Dough" || ingre.category === "Type" || ingre.category === "Sauce base" || ingre.category === "Cheese base" )
        return {
          ...state,
          ingredients: ingredientsTotal.concat(ingredientsQuery),
          error_query:null,
        };
      }else{
        return{
          ...state,
          error_query:action.payload
      }
      }
      
    
      
    case GET_PIZZAS:
      return {
        ...state,
        pizzas: action.payload,
        pizzasbackup: action.payload,
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

      case FILTER_BY_VEGETARIAN:
      //  if(action.payload === "all") return {...state}  
      const filtrados = action.payload === "yes"? state.pizzasbackup.filter((pizz)=>pizz.vegetarian === true) : state.pizzasbackup.filter((pizz)=>pizz.vegetarian === false)              
      // if(action.payload === "yes") {
      //   const filtrado = state.pizzas.filter((pizz)=>pizz.vegetarian === true)
      // } else {    
      return {
          ...state,
         pizzas: filtrados,
             };  

    default:
      return { ...state };
  }
};

export default rootReducer;
