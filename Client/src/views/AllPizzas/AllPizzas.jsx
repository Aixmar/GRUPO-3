import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SortSelect from "../../components/Sorters/SortSelect";
import { useState } from "react";
import Filters from "../../components/Filters/Filters";
import DrinksContainer from "../../components/DrinksContainer/DrinksContainer";
import { getPizzas } from "../../redux/actions";
import { Box, Flex } from "@chakra-ui/react";

const AllPizzas = () => {
  const dispatch = useDispatch();
  const [selectedSort, setSelectedSort] = useState("A-Z");

  return (
    <Flex bgGradient="linear(to-l,#000000, #272727)">
      <Box flex="0 0 auto" mr="1rem">
        <SortSelect
          Sort={[
            "A-Z",
            "Z-A",
            "Price: Low to high",
            "Price: High to low",
            "Avg. customers reviews",
          ]}
          selectedSort={selectedSort}
          setSelectedSort={setSelectedSort}
        />
        <Filters />
      </Box>

      <Box flex="1 1 auto">
        <DrinksContainer />
        <CardsContainer selectedSort={selectedSort} />
      </Box>
    </Flex>
  );
};

export default AllPizzas;
