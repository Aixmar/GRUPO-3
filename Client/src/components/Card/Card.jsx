import { Link } from "react-router-dom";
import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <Link to={`/pizzadetail/${props.id}`}>
      <div className={styles.container}>
        <h1>{props.name}</h1>
        <img src={props.image} alt="" className={styles.image}></img>
      </div>
    </Link>
  );
};

export default Card;
