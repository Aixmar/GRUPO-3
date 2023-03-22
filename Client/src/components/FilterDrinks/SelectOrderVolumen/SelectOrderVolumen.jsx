import { Select, Box, FormLabel } from "@chakra-ui/react";

const SelectOrderVolumen = (props) => {
  const { handleInputChange, valueState } = props;

  return (
    <Box>
      <FormLabel
        htmlFor="vegetarian"
        fontFamily="sans-serif"
        fontSize="xl"
        color="white"
      >
        Order by Volumen:
      </FormLabel>
      <Select
        id="vegetarian"
        name="selectOrderVolumen"
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
        <option value="Up Volumen">Up Volumen</option>
        <option value="Low Volumen">Low Volumen</option>
      </Select>
    </Box>
  );
};

export default SelectOrderVolumen;
