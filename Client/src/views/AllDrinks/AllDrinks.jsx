import { Link } from "react-router-dom";
import DrinksContainer from "../../components/DrinksContainer/DrinksContainer";


const AllDrinks = () => {
  return (
    <div>
      <div>
        <h2>esto es la sub navbar</h2>
        <Link to="/allpizzas">All Pizzas</Link>
        <Link to="/alldrinks">All Drinks</Link>
      </div>
      <div>AllDrinks</div>
      <DrinksContainer  />
    </div>

  );
};

export default AllDrinks;
