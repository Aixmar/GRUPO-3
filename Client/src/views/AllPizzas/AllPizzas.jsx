import { useDispatch, useSelector } from "react-redux";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import SubNavBar from "../../components/SubNavBar/SubNavBar";
import { useEffect } from "react";
import FilterPizzas from "../../components/FilterPizzas/FilterPizzas";
import { Box, Flex } from "@chakra-ui/react";
import { getPizzas, getUserById } from "../../redux/actions";
import { pizzasTermsFilters } from "../../Utils/pizzasTermsFilters";
import { useAuthProv } from "../../context/AuthProvider";

const AllPizzas = () => {

  const { user } = useAuthProv();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizzas());
    dispatch(getUserById(user.id))
  }, []);

  const filterPizzasTerms = useSelector((state) => state.filterPizzasTerms);
  const items = useSelector((state) => state.pizzas);
  const pizzas = items.filter((drink) => drink.category === "pizza");

  const pizzasFiltered = pizzasTermsFilters({ pizzas, filterPizzasTerms });

  return (
    <Flex h='100vh'bgGradient="linear(to-l,#000000, #272727)">
      <Box position="absolute" zIndex="10" w="100%">
        <SubNavBar />
      </Box>

      <Box flex="0 0 auto" ml="2.5rem" pt="100px">
        <FilterPizzas />
      </Box>

      <Box flex="1 1 auto" pt="100px" mr="2rem" ml="2rem">
        <ItemContainer items={pizzasFiltered} />
      </Box>
    </Flex>
  );
};

export default AllPizzas;
