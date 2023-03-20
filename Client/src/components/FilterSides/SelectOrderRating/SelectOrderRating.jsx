import { Select, Box, FormLabel } from "@chakra-ui/react";
const SelectOrderRating = (props) => {
  const { handleInputChange,valueState} = props;

  return (
    <Box>
      <FormLabel
        htmlFor="vegetarian"
        fontFamily="sans-serif"
        fontSize="xl"
        color="white"
      >
        Order by Rating:
      </FormLabel>
      <Select
        id="vegetarian"
        name="selectOrderRating"
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
        <option value="Up Rating">Up Rating</option>
        <option value="Lower Rating">Lower Rating</option>
      </Select>
    </Box>
  );
  };
  
  export default SelectOrderRating;