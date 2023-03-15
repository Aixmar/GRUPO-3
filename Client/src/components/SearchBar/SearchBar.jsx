import { useDispatch, useSelector } from "react-redux";
import { getIngredients, getIngredientsQuery } from "../../redux/actions";


const SearchBar = () => {
  const dispatch = useDispatch();
  let ingredients = useSelector((state) => state.ingredients);

  const handlerQuery = (e) => {
    dispatch(getIngredientsQuery(e.target.value));
  };

  return (
    <div>
      <label>Insert ingredient: </label>
      <input
        type="text"
        autoComplete="off"
        name="ingredients"
        onChange={handlerQuery}
        placeholder="Search..."
      ></input>
      {ingredients.map((ingr) => (
        <h1>{ingr.name}</h1>
      ))}
    </div>
  );
};

export default SearchBar;
