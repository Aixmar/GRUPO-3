import { Select, FormControl, FormLabel } from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { filterByVegetarian } from "../../redux/actions";

const Filters = () => {
  const dispatch = useDispatch();
  const pizzas = useSelector((state) => state.pizzas);

  const handleInputChange = (event) => {
    dispatch(filterByVegetarian(event.target.value));
  };

  return (
    <FormControl colorScheme="purple">
      <FormLabel htmlFor="vegetarian" fontFamily="sans-serif" fontSize="xl" color="white">
        Filter by:
      </FormLabel>
      <Select
        id="vegetarian"
        name="vegetarian"
        onChange={handleInputChange}
        color="#f27825"
        borderColor="white"
        borderWidth="2px"
        borderRadius="full"
        fontWeight="bold"
        _focus={{
          outline: "none",
          borderColor: "white",
          boxShadow: "none"
        }}
        _hover={{
          borderColor: "#f27825"
        }}
      >
        <option value="all">All Pizzas</option>
        <option value="yes">✓ Vegetarian</option>
        <option value="no">X Non-Vegetarian</option>
      </Select>
    </FormControl>
  );
};

export default Filters;