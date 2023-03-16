import { useDispatch } from "react-redux";
import CardsContainer from "../../components/CardsContainer/CardsContainer";
import SortSelect from "../../components/Sorters/SortSelect";
import { useState } from "react";

import { getPizzas } from "../../redux/actions";

const AllPizzas = () => {
  const dispatch = useDispatch();
  const [selectedSort, setSelectedSort] = useState("A-Z");

  return (
    <>
      <p>SOY EL COMPONENTE ALLPIZZAS</p>
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
      <CardsContainer selectedSort={selectedSort} />
    </>
  );
};

export default AllPizzas;
