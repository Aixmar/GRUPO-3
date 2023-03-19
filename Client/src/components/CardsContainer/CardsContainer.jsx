import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas, sortPizzas } from "../../redux/actions";
import Card from "../Card/Card";
import { SimpleGrid } from "@chakra-ui/react";

const CardsContainer = ({ selectedSort }) => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizzas);
  const onlyPizzas = pizzas.filter((items) =>  items.category === 'pizza');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    !actualPizzas.length && dispatch(getPizzas());
  }, [dispatch]); 

  useEffect(() => {
    pizzas.length && setIsLoading(false);
  }, [pizzas]);

  useEffect(() => {
    dispatch(sortPizzas(selectedSort));
  }, [selectedSort]);


  //---------------INFINIT SCROLLING---------------
  const [PizzasPerPage, setPizzasPerPage] = useState(8);
  const [actualPizzas, setActualPizzas] = useState([]);


  useEffect(() => {
    setActualPizzas(onlyPizzas.slice(0, PizzasPerPage));
  }, [pizzas, PizzasPerPage]);

  useEffect(() => {
    const handleScroll = (event) => {
      const scrollHeight = event.target.documentElement.scrollHeight;
      const currentHeight =
        event.target.documentElement.scrollTop + window.innerHeight;
      if (currentHeight + 1 >= scrollHeight) {
        if (PizzasPerPage + 6 <= pizzas.length) {
          setPizzasPerPage(PizzasPerPage + 8);
        } else {
          setPizzasPerPage(pizzas.length);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [actualPizzas]);
  //-----------------END INFINIT SCROLLING-------------------

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <SimpleGrid columns={[2, 2, 4]} spacing={10}>
            {actualPizzas?.map((pizza) => {
              return (
                <Card
                  key={pizza.id}
                  id={pizza.id}
                  name={pizza.name}
                  image={pizza.image}
                  price={pizza.price}
                />
              );
            })}
          </SimpleGrid>
        </>
      )}
    </>
  );
};

export default CardsContainer;

