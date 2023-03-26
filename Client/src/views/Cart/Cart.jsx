import Table from "./Helper/Table/Table";
// import CartExtras from "./Helper/CartExtras/CartExtras";
import CartFooter from "./Helper/CartFooter/CartFooter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthProv } from "../../context/AuthProvider";
import { getUserById } from "../../redux/actions";
import { updateCartUser } from "../../redux/actions";
import CartExtras from "./Helper/CartExtras/CartExtras";

const Cart = () => {
  const { user } = useAuthProv();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById(user.id));
    

        // dispatch(updateCartUser(user.cart));
  });

  return (
    <div>
      <Table />
      <CartExtras />
      <CartFooter width="100%" />
    </div>
  );
};

export default Cart;
