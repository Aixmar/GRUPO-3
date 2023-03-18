import React, { useEffect } from 'react'
import Drinks from '../Drinks/Drinks'
import { useState } from 'react';
import styles from "./DrinksContainer.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getPizzas } from '../../redux/actions';

const DrinksContainer = () => {

   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getPizzas());
    }, [dispatch]);

    const drinks = useSelector((state) => state.pizzas);
    const OnlyDrinks = drinks.filter((items) =>  items.category === 'drinks')

  return (
    <>
  
    <div className={styles.container} >
      {OnlyDrinks.map(bebida => (
        <Drinks 
        key={bebida.name} 
        image={bebida.image}
        price={bebida.price}
        />
      ))}
    </div>

   
    </>
  )
}

export default DrinksContainer
