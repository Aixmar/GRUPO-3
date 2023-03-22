import { Button, Flex, FormControl, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { filterDrinksTerms } from "../../redux/actions";
import SearchBarDrinks from "./SearchBarDrinks/SearchBarDrinks";
import FilterSugar from "./SelectSugar/FilterSugar";
import SelectOrderName from "./SelectOrderName/SelectOrderName";
import SelectOrderVolumen from "./SelectOrderVolumen/SelectOrderVolumen";
import SelectOrderPrice from "./SelectOrderPrice/SelectOrderPrice";
import SelectStock from "./SelectStock/SelectStock";
import SelectOrderRating from "./SelectOrderRating/SelectOrderRating";

const FilterDrinks = () => {
  
  const [filterTerms, setFilterTerms] = useState({
    searchBarDrinks: "",
    filterSugar: "",
    selectStock: "",
    selectOrderRating: "",
    selectOrderName: "",
    selectOrderVolumen: "",
    selectOrderPrice: "",
  });
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterDrinksTerms(filterTerms));
  }, [filterTerms]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "searchBarDrinks") {
      setFilterTerms({ ...filterTerms, [name]: value });
    }
    if (name === "filterSugar") {
      setFilterTerms({ ...filterTerms, [name]: value });
    }
    if (name === "selectStock") {
      setFilterTerms({ ...filterTerms, [name]: value});
    }
    if (name === "selectOrderRating") {
      setFilterTerms({ ...filterTerms, [name]: value, selectOrderVolumen: "" , selectOrderPrice: "", selectOrderName: ""});
    }
    if (name === "selectOrderName") {
      setFilterTerms({ ...filterTerms, [name]: value, selectOrderVolumen: "" , selectOrderPrice: "", selectOrderRating: ""});
    }
    if (name === "selectOrderVolumen") {
      setFilterTerms({ ...filterTerms, [name]: value, selectOrderName: "", selectOrderPrice: "", selectOrderRating: ""});
    }
    if (name === "selectOrderPrice") {
      setFilterTerms({ ...filterTerms, [name]: value, selectOrderName: "", selectOrderVolumen: "", selectOrderRating: ""});
    }
  };

  const handleOnClick = () => {
    setFilterTerms({
      searchBarDrinks: "",
      filterSugar: "",
      selectStock: "",
      selectOrderRating: "",
      selectOrderName: "",
      selectOrderVolumen: "",
      selectOrderPrice: "",
    })
  }
  return (
    <Flex direction='column' gap='3' marginBottom='20px'>
      <SearchBarDrinks 
      handleInputChange={handleInputChange} 
      valueState={filterTerms.searchBarDrinks}
      />
      <Spacer />
      <FilterSugar 
      handleInputChange={handleInputChange} 
      valueState={filterTerms.filterSugar}
      />
      <SelectStock
        handleInputChange={handleInputChange}
        valueState={filterTerms.selectStock}
      />
      <br />
      <SelectOrderRating
        handleInputChange={handleInputChange}
        valueState={filterTerms.selectOrderRating}
      />
      <SelectOrderName
        handleInputChange={handleInputChange}
        valueState={filterTerms.selectOrderName}
      />
      <SelectOrderVolumen
        handleInputChange={handleInputChange}
        valueState={filterTerms.selectOrderVolumen}
      />
      <SelectOrderPrice
        handleInputChange={handleInputChange}
        valueState={filterTerms.selectOrderPrice}
      />
      <br />
      <Button w='90%' onClick={handleOnClick}>CLEAR FILTERS</Button>
    </Flex>
  );
};

export default FilterDrinks;
