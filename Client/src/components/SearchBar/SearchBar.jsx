import { useDispatch, useSelector } from "react-redux";
import { getIngredients, getIngredientsQuery } from "../../redux/actions";
import { useEffect } from "react";


const SearchBar = () => {
  const dispatch = useDispatch();

  const handlerQuery = (e) => {
    dispatch(getIngredientsQuery(e.target.value));
  };

  useEffect(() => {
    return () => dispatch(getIngredientsQuery(""))
  },[])

  return (
    <div>
      <label>Insert ingredient: </label>
      <input
        type="text"
        autoComplete="off"
        name=""
        onChange={handlerQuery}
        placeholder="Search..."
      ></input>
    </div>
  );
};

export default SearchBar;
