import { useDispatch, useSelector } from "react-redux";
import { popToCart } from "../../../../redux/actions";
import styles from "./Table.module.css";

const Table = () => {
  const cart = useSelector((state) => state.cart) || [];
  console.log(cart);
  // console.log(totalPrice);

  const dispatch = useDispatch();

  const removeItem = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    dispatch(popToCart(newCart));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className={styles.shoppingCart}>
      <div className={styles.title}>Shopping Cart</div>
      {cart.length > 0 &&
        cart.map((item, index) => (
          <div className={styles.shoppingCartItem} key={index}>
            <div className={styles.itemName}>{item.name}</div>
            <div className={styles.itemPrice}>${item.price}</div>
            
            <button onClick={() => removeItem(index)}>Remove</button>
          </div>
        ))}

      <label> PRECIO TOTAL </label>
      <div>${totalPrice} </div>
    </div>
  );
};

export default Table;
