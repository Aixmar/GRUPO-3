import { Select, Box, FormLabel } from "@chakra-ui/react";

const SelectOrderPrice = (props) => {
  const { handleInputChange, valueState } = props;

  return (
    <Box>
      <FormLabel
        htmlFor="vegetarian"
        fontFamily="sans-serif"
        fontSize="xl"
        color="white"
      >
        Order by Price:
      </FormLabel>
      <Select
        id="vegetarian"
        name="selectOrderPrice"
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
        <option value="Up Price">Up Price</option>
        <option value="Lower Price">Lower Price</option>
      </Select>
    </Box>
  );
};

export default SelectOrderPrice;
