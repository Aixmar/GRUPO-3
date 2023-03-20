import React, { useEffect } from 'react'
import Drinks from '../Drinks/Drinks'
import { useState } from 'react';
import styles from "./DrinksContainer.module.css";
import { useDispatch, useSelector } from 'react-redux';
import { getPizzas } from '../../redux/actions';
import { Box } from '@chakra-ui/react';

const DrinksContainer = (props) => {
const {drinks} = props

console.log(props);
  return (
    <>
  
    <div className={styles.container} >
      { drinks.length ? drinks.map(bebida => (
        <Drinks 
        key={bebida.name} 
        id={bebida.id}
        image={bebida.image}
        price={bebida.price}
        name={bebida.name}
        rating={bebida.rating}
        stock={bebida.stock}
        />
      )): <Box fontFamily="sans-serif"
      fontSize="xl"
      color="white"
      >No results</Box>}
    </div>

   
    </>
  )
}

export default DrinksContainer
