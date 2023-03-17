import Table from "./Helper/Table/Table";
// import CartExtras from "./Helper/CartExtras/CartExtras";
import CartFooter from "./Helper/CartFooter/CartFooter";

const Cart = () => {
  return (
    <div>
      <Table />
      {/* <CartExtras /> */}
      <CartFooter width="100%"/>
    </div>
  );
};

export default Cart;
