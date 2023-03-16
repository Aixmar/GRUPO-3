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

  //---------------INFINIT SCROLLING---------------
  const [PizzasPerPage, setPizzasPerPage] = useState(6);
  const [actualPizzas, setActualPizzas] = useState(
    pizzas?.slice(0, PizzasPerPage)
  );

  useEffect(() => {
    setActualPizzas(pizzas?.slice(0, PizzasPerPage));
  }, [PizzasPerPage, actualPizzas]);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollHeight = event.target.documentElement.scrollHeight;
      const currentHeight =
        event.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        if (PizzasPerPage + 6 <= pizzas.length) {
          setPizzasPerPage(PizzasPerPage + 6);
        } else {
          setPizzasPerPage(pizzas.length);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [actualPizzas]);
  //-----------------END INFINIT SCROLLING-------------------

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
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className={styles.container}>
            {actualPizzas?.map((pizza) => {
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
