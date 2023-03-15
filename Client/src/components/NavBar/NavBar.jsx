import { Link } from "react-router-dom";
import style from "./NavBar.module.css";

const NavBar = () => {
  return (
    <div className={style.mainContainer}>
      <Link to="/about" className={style.item}>
        ABOUT
      </Link>
      <Link to="/createpizza" className={style.item}>
        CREATE PIZZA
      </Link>
      <Link to="/allpizzas" className={style.item}>
        TRADITIONAL MENU
      </Link>
      <Link to="/home" className={style.item}>
        HOME
      </Link>
      <Link to="/cart" className={style.item}>
        CART
      </Link>
    </div>
  );
};

export default NavBar;
