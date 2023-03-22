import { Box, Flex } from "@chakra-ui/react";
import ItemContainer from "../../components/ItemContainer/ItemContainer";
import SubNavBar from "../../components/SubNavBar/SubNavBar";
import { sidesTermsFilter } from "../../Utils/sidesTermsFilters";
import FilterSides from "../../components/FilterSides/FilterSides";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "../../redux/actions";
import { useEffect } from "react";

const AllSides = () => {
  const dispatch = useDispatch();

  const filterSidesTerms = useSelector((state) => state.filterSidesTerms);
  const items = useSelector((state) => state.pizzas);
  const sides = items.filter((i) => i.category === "sides");
  const sidesFiltered = sidesTermsFilter({ sides, filterSidesTerms });

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <Flex bgGradient="linear(to-l,#000000, #272727)">
      <Box position="absolute" zIndex="10" w="100%">
        <SubNavBar />
      </Box>

      {/* ACA NO VAN ESTOS FILTROS, LOS PUSE COMO EJEMPLO PARA CUANDO PONGAMOS LOS QUE SI VAN! */}
      {/* ACA NO VAN ESTOS FILTROS, LOS PUSE COMO EJEMPLO PARA CUANDO PONGAMOS LOS QUE SI VAN! */}
      <Box flex="0 0 auto" ml="2.5rem" pt="100px">
        <FilterSides />
      </Box>
      <Box flex="1 1 auto" pt="100px" mr="2rem" ml="2rem">
        <ItemContainer items={sidesFiltered} />
      </Box>
    </Flex>
  );
};

export default AllSides;
