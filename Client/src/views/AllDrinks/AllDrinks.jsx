import { useDispatch, useSelector } from "react-redux";
import SubNavBar from "../../components/SubNavBar/SubNavBar";
import FilterDrinks from "../../components/FilterDrinks/FilterDrinks";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import { useEffect } from "react";

import { Box, Flex } from "@chakra-ui/react";
import { getPizzas, getUserById } from "../../redux/actions";

import { drinksTermsFilters } from "../../Utils/drinksTermsFilters";
import { useAuthProv } from "../../context/AuthProvider";

const AllDrinks = () => {
  
  const { user } = useAuthProv();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPizzas());
    dispatch(getUserById(user.id))
  }, [dispatch]);

  const filterDrinksTerms = useSelector((state) => state.filterDrinksTerms);
  const items = useSelector((state) => state.pizzas);
  const drinks = items.filter((drink) => drink.category === "drinks");
  const drinksFiltered = drinksTermsFilters({ drinks, filterDrinksTerms });

  return (
    <Flex bgGradient="linear(to-l,#000000, #272727)">
      <Box position="absolute" zIndex="10" w="100%">
        <SubNavBar />
      </Box>

      <Box flex="0 0 auto" ml="2.5rem" pt="100px">
        <FilterDrinks />
      </Box>

      <Box flex="1 1 auto" pt="100px" mr="2rem" ml="2rem" >
        <ItemContainer items={drinksFiltered} />
      </Box>
    </Flex>
  );
};
export default AllDrinks;
