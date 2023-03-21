import { Select, Box, FormLabel } from "@chakra-ui/react";

const FilterTaste = (props) => {
  const { handleInputChange, valueState} = props;

  return (
    <Box>
      <FormLabel
        htmlFor="vegetarian"
        fontFamily="sans-serif"
        fontSize="xl"
        color="white"
      >
        Filter By Taste:
      </FormLabel>
      <Select
        id="vegetarian"
        name="filterTaste"
        onChange={handleInputChange}
        value={valueState}
        color="#f27825"
        w="160px"
        borderColor="white"
        borderWidth="2px"
        borderRadius="full"
        fontWeight="bold"
        _focus={{
          outline: "none",
          borderColor: "white",
          boxShadow: "none",
        }}
        _hover={{
          borderColor: "#f27825",
        }}
      >
        <option value="">None</option>
        <option value="Sweet">Sweet</option>
        <option value="Ice Cream">Ice Cream</option>
        <option value="Salad">Salad</option>
        <option value="Dips">Dips</option>

      </Select>
    </Box>
  );
};

export default FilterTaste;