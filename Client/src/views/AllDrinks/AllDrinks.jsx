import { Link } from "react-router-dom";
import DrinksContainer from "../../components/DrinksContainer/DrinksContainer";
import { Flex, Box } from "@chakra-ui/layout";
import SortSelect from "../../components/Sorters/SortSelect";
import { useState } from "react";
import Filters from "../../components/Filters/Filters";


const AllDrinks = () => {

  const [selectedSort, setSelectedSort] = useState("A-Z");

  return (
    <Flex bgGradient="linear(to-l,#000000, #272727)">
      <Box flex="0 0 auto" mr="1rem">
        <div>
          <h2>esto es la sub navbar</h2>
          <Link to="/allpizzas">All Pizzas</Link>
          <Link to="/alldrinks">All Drinks</Link>
        </div>
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
        <DrinksContainer selectedSort={selectedSort} />
      </Box>
    </Flex>

  );
};

export default AllDrinks;
