import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "../../redux/actions";
import Card from "../Card/Card";
import styles from "./CardsContainer.module.css";

const CardsContainer = () => {
  const dispatch = useDispatch();

  const pizzas = useSelector((state) => state.pizzas);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  useEffect(() => {
    pizzas.length && setIsLoading(false);
  }, [pizzas]);

  return (
    <div>
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
    </div>
  );
};

export default CardsContainer;
