import { Select, FormControl, FormLabel } from "@chakra-ui/react";

// Estados: Z-A, A-Z, Precio: Del mas bajo al mas alto, Precio: Del mas alto al mas bajo, Promedio opinion del cliente
//   // States: Z-A, A-Z, Price: Low to high, Price: High to low, Avg. customers reviews

const SortSelect = ({ Sort, selectedSort, setSelectedSort }) => {
  const handleChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <FormControl colorScheme="orange">
      <FormLabel htmlFor="Sort-select" fontFamily="sans-serif" fontSize="xl" color="white">
        Sort by:
      </FormLabel>
      <Select
        id="Sort-select"
        value={selectedSort}
        onChange={handleChange}
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
        {Sort.map((Sort) => (
          <option key={Sort} value={Sort}>
            {Sort}
          </option>
        ))}
      </Select>
    </FormControl>
  );
};

export default SortSelect;

