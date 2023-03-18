import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
import { Button } from "@chakra-ui/button";
import { pushToCart } from "../../redux/actions";

const Card = (props) => {


  return (
    <div className={styles.container}>
      <Link to={`/itemdetail/${props.id}`}>
        <div >
          <h1>{props.name}</h1>
          <img src={props.image} alt="" className={styles.image}></img>
          <h1>${props.price}</h1>
        </div>
      </Link>
    </div>
  );
};

export default Card;
