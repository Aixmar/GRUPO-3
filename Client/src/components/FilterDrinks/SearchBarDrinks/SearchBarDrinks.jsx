import { Input } from "@chakra-ui/input";

const SearchBarDrinks = (props) => {
  const { handleInputChange, valueState } = props;

  return (
    <Input
      type="text"
      placeholder="Insert text here..."
      size="md"
      borderRadius="md"
      border="2px solid"
      borderColor="gray.100"
      color='white'
      _hover={{ borderColor: "gray.500" }}
      _focus={{ outline: "none", boxShadow: "outline" }}
      name="searchBarDrinks"
      value={valueState}
      onChange={handleInputChange}
    />
  );
};

export default SearchBarDrinks;
