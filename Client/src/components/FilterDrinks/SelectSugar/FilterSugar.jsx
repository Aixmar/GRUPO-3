import { Select, Box, FormLabel } from "@chakra-ui/react";

const FilterSugar = (props) => {
  const { handleInputChange, valueState } = props;

  return (
    <Box>
      <FormLabel
        htmlFor="vegetarian"
        fontFamily="sans-serif"
        fontSize="xl"
        color="white"
      >
        Filter by Sugar:
      </FormLabel>
      <Select
        id="vegetarian"
        name="filterSugar"
        value={valueState}
        onChange={handleInputChange}
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
        <option value="">All Drinks</option>
        <option value="sugar">Sugar</option>
        <option value="nosugar">X No-Sugar</option>
      </Select>
    </Box>
  );
};

export default FilterSugar;
