import {GET_INGREDIENTS,GET_INGREDIENTS_QUERY,GET_PIZZAS,PUSH_TO_CART} from "./actionTypes"
import axios from 'axios'

export const getIngredients = ()=>{
    return async function(dispatch){
        let response = await axios(`http://localhost:3001/ingredients`)
        return dispatch({type:GET_INGREDIENTS , payload:response.data})
    }
}

export const getIngredientsQuery = (name)=>{
    return async function(dispatch){
        let response = await axios(`http://localhost:3001/ingredients?name=${name}`)
        return dispatch({type:GET_INGREDIENTS_QUERY , payload:response.data})
    }
}

export const getPizzas = () => {
    return async function(dispatch) {
        let response = await axios.get(`http://localhost:3001/pizzas`)
        return dispatch({type: GET_PIZZAS, payload : response.data})
    }
}

export const pushToCart = (form) => {
    return {type:PUSH_TO_CART, payload:form}
}   