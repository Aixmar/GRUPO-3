import {GET_INGREDIENTS,GET_INGREDIENTS_QUERY,GET_PIZZAS} from './actionTypes'


const initialState = {
  ingredients:[],
  pizzas: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS:
      return{
        ...state,
        ingredients:action.payload
      }
      case GET_INGREDIENTS_QUERY:
        return{
          ...state,
          ingredients:action.payload
        }
    case GET_PIZZAS:
      return{
        ...state,
        pizzas:action.payload
      }
    default:
      return { ...state };
  }
};

export default rootReducer;
