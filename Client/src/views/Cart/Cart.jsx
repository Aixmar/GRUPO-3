import Table from "./Helper/Table/Table";
import TotalBuy from "./Helper/TotalBuy/TotalBuy";
import CartExtras from "./Helper/CartExtras/CartExtras";
import CartFooter from "./Helper/CartFooter/CartFooter";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  return (
    <div>
      <Table />
      <TotalBuy />
      <CartExtras />
      <CartFooter />
    </div>
  );
};

export default Cart;
