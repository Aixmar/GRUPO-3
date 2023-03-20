import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SortSelect from "../../components/Sorters/SortSelect";
import SubNavBar from "../../components/SubNavBar/SubNavBar";
import { useState } from "react";
import Filters from "../../components/Filters/Filters";

import { Box, Flex } from "@chakra-ui/react";

const AllPizzas = () => {
  const dispatch = useDispatch();
  const [ selectedSort, setSelectedSort ] = useState("None");


  return (
    <Flex bgGradient="linear(to-l,#000000, #272727)">
      <Box position="absolute" zIndex="10" w="100%">
        <SubNavBar />
      </Box>
      <Box flex="0 0 auto" ml="2.5rem" pt="100px">
        {/* <SortSelect
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        /> */}
        <Box mt="1rem">
          <Filters />
        </Box>
      </Box>

      <Box flex="1 1 auto" pt="100px" mr="2rem" ml="2rem">
        <CardsContainer selectedSort={selectedSort} />
      </Box>
    </Flex>
  );
};

export default AllPizzas;
