import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas, sortPizzas } from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";

const CardsContainer = ({ selectedSort }) => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizzas);
  const [isLoading, setIsLoading] = useState(true);
  const [sortedPizzas, setSortedPizzas] = useState([]);

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch, selectedSort]);

  useEffect(() => {
    pizzas.length && setIsLoading(false);
  }, [pizzas]);

  useEffect(() => {
    setSortedPizzas(dispatch(sortPizzas(pizzas, selectedSort)));
  }, [selectedSort, pizzas]);

  return (
    <>
      <h1>WORKING HERE</h1>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.container}>
            {pizzas.map((pizza) => {
              return (
                <Card
                  key={pizza.id}
                  id={pizza.id}
                  name={pizza.name}
                  image={pizza.image}
                />
              );
            })}
          </div>
        </>
      )}
    </>
  );
};

export default CardsContainer;
