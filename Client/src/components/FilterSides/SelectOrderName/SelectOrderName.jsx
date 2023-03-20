import { Select, Box, FormLabel } from "@chakra-ui/react";

const SelectOrderName = (props) => {
  const { handleInputChange, valueState} = props;

  return (
    <Box>
      <FormLabel
        htmlFor="vegetarian"
        fontFamily="sans-serif"
        fontSize="xl"
        color="white"
      >
        Order by A-Z:
      </FormLabel>
      <Select
        id="vegetarian"
        name="selectOrderName"
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
        <option value="A-Z">A-Z</option>
        <option value="Z-A">Z-A</option>
      </Select>
    </Box>
  );
};

export default SelectOrderName;