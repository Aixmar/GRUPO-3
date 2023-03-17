import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { pushToCart } from "../../redux/actions";
import { Button } from "@chakra-ui/react";
import axios from "axios";
import styles from "./PizzaDetail.module.css";

const PizzaDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [pizza, setPizza] = useState({});

  const clickHandler = () => {
    const modal = document.querySelector('#createPizzaModal');
    dispatch(pushToCart(pizza))
    modal.showModal();
  }
  const clickHandlerModal = () => {
    const modal = document.querySelector('#createPizzaModal');
    modal.close()
  }
  useEffect(() => {
    axios
      .get(`http://localhost:3001/pizzas/${id}`)
      .then((data) => data.data)
      .then((pizza) => setPizza(pizza));
  }, []);

  return (
    <div className={styles.container}>
      <h1>PIZZA DETAIL</h1>
      <h2>{pizza.name}</h2>
      <img src={pizza.image} alt={pizza.name} className={styles.image} />
      <span>Price: $ {pizza.price}</span>
      <div className={styles.linkBtn}>
        <Link to='/allpizzas'><Button hoverbg="white"
          size="lg"
          borderRadius="full"
          padding="10px"
          margin="30px"
          background="linear-gradient(to right, #f27833, #eab830)" >Back to menu</Button>
        </Link>
        <Button
          onClick={clickHandler}
          hoverbg="white"
          size="lg"
          borderRadius="full"
          padding="10px"
          margin="30px"
          background="linear-gradient(to right, #f27833, #eab830)"
        >Add to cart</Button>
      </div>
      <dialog id='createPizzaModal' >
        <h2>Pizza created succesfully!</h2>
        <div className={styles.contButton}>
          <Link to='/allpizzas' className={styles.linkBtn}><Button bg={'orange'} fontSize={'2rem'} width={'90%'} p={'1.6rem'} margin={'1.2rem 0 .8rem 0'} >Continue buying</Button></Link>
          <Link to='/cart' className={styles.linkBtn}><Button bg={'orange'} fontSize={'2rem'} width={'90%'} p={'1.6rem'} margin={'1.2rem 0 .8rem 0'} >Go to cart</Button></Link>
        </div>
      </dialog>
    </div>
  );
};

export default PizzaDetail;
