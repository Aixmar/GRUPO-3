import { Input } from "@chakra-ui/input";

const SearchBarPizzas = (props) => {
  const { handleInputChange, valueState } = props;

  return (
    <Input
      type="text"
      placeholder="Insert text here..."
      size="md"
      borderRadius="md"
      border="2px solid"
      borderColor="gray.100"
      color="#f27825"
      _hover={{ borderColor: "#f27825" }}
      _focus={{ outline: "none", boxShadow: "outline" }}
      name="searchBarPizzas"
      value={valueState}
      onChange={handleInputChange}
    />
  );
};

export default SearchBarPizzas;
