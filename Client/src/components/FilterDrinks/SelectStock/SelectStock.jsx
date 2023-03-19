import { Select, Box, FormLabel } from "@chakra-ui/react";

const SelectStock = (props) => {
  const { handleInputChange, valueState } = props;

  return (
    <Box>
      <FormLabel
        htmlFor="vegetarian"
        fontFamily="sans-serif"
        fontSize="xl"
        color="white"
      >
        Filter by Stock:
      </FormLabel>
      <Select
        id="vegetarian"
        name="selectStock"
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
        <option value="">None</option>
        <option value="Available">Available</option>
        <option value="No Available">No Available</option>
      </Select>
    </Box>
  );
};

export default SelectStock;
