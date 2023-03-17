import React, { useEffect } from 'react'
import Drinks from '../Drinks/Drinks'
import { useState } from 'react';
import styles from "./DrinksContainer.module.css";

const DrinksContainer = () => {

    const [drinks, setdrinks] = useState([]);

useEffect(()=>{
    setdrinks([
         {
            name:"Coca-Cola",
            image:"https://i.postimg.cc/Z5y4bZQh/cocacola.png",
            price:1.22,
            category: drinks,
         },
         {
            name:"Diet Coke",
            image:"https://i.postimg.cc/V6z8WtkY/dietcoke.png",
            price:1.40,
            category: drinks,
         },
         {
            name:"Fanta",
            image:"https://i.postimg.cc/CKTYdXyn/fanta.png",
            price:1.22,
            category: drinks,
         },
         {
            name:"Sprite",
            image:"https://i.postimg.cc/cHTN9Jvf/sprite.png",
            price:1.22,
            category: drinks,
         },
         {
            name:"Water",
            image:"https://i.postimg.cc/rFHq2zQJ/agua.png",
            price:1.15,
            category: drinks,
         },
         {
            name:"Strawberry Fanta",
            image:"https://i.postimg.cc/yxdCwzRt/redfanta.png",
            price:1.22,
            category: drinks,
         },
         {
            name:"RockStar Orange",
            image:"https://i.postimg.cc/436GcPZL/rockstarorange.png",
            price:1.50,
            category: drinks,
         },
         {
            name:"Splash Lemonade",
            image:"https://i.postimg.cc/SsMh6Y3s/lemonade.png",
            price:1.33,
            category: drinks,
         },
    
         {
            name:"Vitamin Water",
            image:"https://i.postimg.cc/FzPXmbJT/gatorade.png",
            price:2.50,
            category: drinks,
         },
    ])
} ,[])

  return (
    <>
  
    <div className={styles.container} >
      {drinks.map(bebida => (
        <Drinks 
        key={bebida.nombre} {...bebida} 
        image={bebida.image}/>
      ))}
    </div>

   
    </>
  )
}

export default DrinksContainer
