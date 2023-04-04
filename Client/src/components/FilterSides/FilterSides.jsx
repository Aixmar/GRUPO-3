import { useEffect, useState } from "react"
import SelectOrderName from "./SelectOrderName/SelectOrderName"
import SelectOrderRating from "./SelectOrderRating/SelectOrderRating";
import SelectOrderPrice from "./SelectOrderPrice/SelectOrderPrice";
import FilterStock from "./FilterStock/FilterStock";
import FilterTaste from "./FilterTaste/FilterTaste";
import SearchBarSides from "./SearchBarSides/SearchBarSides";
import { useDispatch } from "react-redux";
import { filterSidesTerms } from "../../redux/actions";
import { Flex, Spacer, Button } from "@chakra-ui/react";


const FilterSides = () => {
    const dispatch = useDispatch()

    const [sidesTerms, setSidesTerms] = useState({
        searchBarSides: "",
        filterTaste: "",
        filterStock: "",
        selectOrderName: "",
        selectOrderPrice: "",
        selectOrderRating: ""
    })
    useEffect(() => {
        dispatch(filterSidesTerms(sidesTerms))
    }, [sidesTerms])

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === "searchBarSides") {
            setSidesTerms({ ...sidesTerms, [name]: value })
        }
        if (name === "filterTaste") {
            setSidesTerms({ ...sidesTerms, [name]: value })
        }
        if (name === "filterStock") {
            setSidesTerms({ ...sidesTerms, [name]: value })
        }
        if (name === "selectOrderName") {
            setSidesTerms({ ...sidesTerms, [name]: value, selectOrderPrice: "", selectOrderRating: "" })
        }
        if (name === "selectOrderRating") {
            setSidesTerms({ ...sidesTerms, [name]: value, selectOrderName: "", selectOrderPrice: "" })
        }
        if (name === "selectOrderPrice") {
            setSidesTerms({ ...sidesTerms, [name]: value, selectOrderName: "", selectOrderRating: "" })
        }
    }

    const handleOnClick = () => {
        setSidesTerms({
            searchBarSides: "",
            filterTaste: "",
            filterStock: "",
            selectOrderName: "",
            selectOrderPrice: "",
            selectOrderRating: ""
        })
    }

    return (
        <Flex direction='column' gap='3' marginBottom='20px'>

            <SearchBarSides
                handleInputChange={handleInputChange}
                valueState={sidesTerms.searchBarSides}
            />
            <Spacer />
            <FilterTaste 
                handleInputChange={handleInputChange}
                valueState={sidesTerms.filterTaste}
            />
            {/* <FilterStock
                handleInputChange={handleInputChange}
                valueState={sidesTerms.filterStock}
            /> */}
            <br />
            <SelectOrderRating
                handleInputChange={handleInputChange}
                valueState={sidesTerms.selectOrderRating}
            />
            <SelectOrderName
                handleInputChange={handleInputChange}
                valueState={sidesTerms.selectOrderName}
            />
            <SelectOrderPrice
                handleInputChange={handleInputChange}
                valueState={sidesTerms.selectOrderPrice}
            />
            <br />
            <Button w='70%' bgGradient="linear-gradient(to right, #f27825, #eab830)" onClick={handleOnClick}>CLEAR FILTERS</Button>
        </Flex>
    )
}

export default FilterSides