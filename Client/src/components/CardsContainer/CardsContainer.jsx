import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas, sortPizzasAlphabetically } from "../../redux/actions";
import Card from "../Card/Card";

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
    setSortedPizzas(dispatch(sortPizzasAlphabetically(pizzas, selectedSort)));
  }, [selectedSort, pizzas]);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
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
