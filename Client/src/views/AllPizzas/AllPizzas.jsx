import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SortSelect from "../../components/Sorters/SortSelect";
import { useState } from "react";
import Filters from "../../components/Filters/Filters";
import DrinksContainer from "../../components/DrinksContainer/DrinksContainer";

import { getPizzas } from "../../redux/actions";

const AllPizzas = () => {
  const dispatch = useDispatch();
  const [selectedSort, setSelectedSort] = useState("A-Z");

  return (
    <>

      <SortSelect
        Sort={[
          "A-Z",
          "Z-A",
          "Price: Low to high",
          "Price: High to low",
          "Avg. customers reviews",
        ]}
        selectedSort={selectedSort}
        setSelectedSort={setSelectedSort}
      />

      <Filters/>
      <DrinksContainer/>
      <CardsContainer selectedSort={selectedSort} />
    </>
  );
};

export default AllPizzas;
