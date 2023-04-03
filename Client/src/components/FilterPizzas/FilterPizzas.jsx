import { Button, Flex, FormControl, Spacer } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { filterPizzasTerms } from "../../redux/actions";
import SearchBarPizzas from "./SearchBarPizzas/SearchBarPizzas";
import SelectOrderName from "./SelectOrderName/SelectOrderName";
import SelectOrderPrice from "./SelectOrderPrice/SelectOrderPrice";
import SelectStock from "./SelectStock/SelectStock";
import SelectOrderRating from "./SelectOrderRating/SelectOrderRating";
import SelectByType from "./SelectByType/SelectByType";

const FilterPizzas = () => {
  
  const [filterTerms, setFilterTerms] = useState({
    searchBarPizzas: "",
    selectByType: "",
    selectStock: "",
    selectOrderRating: "",
    selectOrderName: "",
    selectOrderPrice: "",
  });
  
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filterPizzasTerms(filterTerms));
  }, [filterTerms]);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "searchBarPizzas") {
      setFilterTerms({ ...filterTerms, [name]: value });
    }
    if (name === "selectStock") {
      setFilterTerms({ ...filterTerms, [name]: value});
    }
    if (name === "selectByType") {
      setFilterTerms({ ...filterTerms, [name]: value});
    }
    if (name === "selectOrderRating") {
      setFilterTerms({ ...filterTerms, [name]: value, selectOrderVolumen: "" , selectOrderPrice: "", selectOrderName: ""});
    }
    if (name === "selectOrderName") {
      setFilterTerms({ ...filterTerms, [name]: value, selectOrderVolumen: "" , selectOrderPrice: "", selectOrderRating: ""});
    }
    if (name === "selectOrderPrice") {
      setFilterTerms({ ...filterTerms, [name]: value, selectOrderName: "", selectOrderVolumen: "", selectOrderRating: ""});
    }
  };

  const handleOnClick = () => {
    setFilterTerms({
      searchBarPizzas: "",
      selectByType: "",
      selectStock: "",
      selectOrderRating: "",
      selectOrderName: "",
      selectOrderPrice: "",
    })
  }
  return (
    <Flex direction='column' gap='3' marginBottom='20px'>
      <SearchBarPizzas 
      handleInputChange={handleInputChange} 
      valueState={filterTerms.searchBarPizzas}
      />
      <Spacer />
      <SelectByType
        handleInputChange={handleInputChange}
        valueState={filterTerms.selectByType}
      />
      {/* <SelectStock
        handleInputChange={handleInputChange}
        valueState={filterTerms.selectStock}
      /> */}
      <br />
      <SelectOrderRating
        handleInputChange={handleInputChange}
        valueState={filterTerms.selectOrderRating}
      />
      <SelectOrderName
        handleInputChange={handleInputChange}
        valueState={filterTerms.selectOrderName}
      />
      <SelectOrderPrice
        handleInputChange={handleInputChange}
        valueState={filterTerms.selectOrderPrice}
      />
      <br />
      <Button w='70%' bgGradient="linear-gradient(to right, #f27825, #eab830)" onClick={handleOnClick}>CLEAR FILTERS</Button>
    </Flex>
  );
};

export default FilterPizzas;
