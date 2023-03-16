import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import styles from "./PizzaDetail.module.css";

const PizzaDetail = () => {
  const { id } = useParams();

  const [pizza, setPizza] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/pizzas/${id}`)
      .then((data) => data.data)
      .then((pizza) => setPizza(pizza));
  }, []);

  return (
    <div className={styles.container}>
      <h1>PIZZA DETAIL</h1>
      <h2>{pizza.name}</h2>
      <img src={pizza.image} alt={pizza.name} className={styles.image} />
      <span>Price: $ {pizza.price / 100}</span>
    </div>
  );
};

export default PizzaDetail;
