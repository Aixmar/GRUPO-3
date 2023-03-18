import React from 'react'
import styles from "./Drinks.module.css";

const Drinks = (props) => {



  return (
    <>
      <div className={styles.container}>
        <h1>{props.name}</h1>
        <img src={props.image} alt="" className={styles.image} ></img>
        <h1>${props.price}</h1>
      </div>
    </>
  )
}

export default Drinks
