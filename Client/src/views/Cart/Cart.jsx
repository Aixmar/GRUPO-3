import Table from "./Helper/Table/Table";
// import CartExtras from "./Helper/CartExtras/CartExtras";
import CartFooter from "./Helper/CartFooter/CartFooter";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAuthProv } from "../../context/AuthProvider";
import { getUserById } from "../../redux/actions";
import { updateCartUser } from "../../redux/actions";
import CartExtras from "./Helper/CartExtras/CartExtras";
import {Box} from "@chakra-ui/react"

const Cart = () => {
  const { user } = useAuthProv();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserById(user.id));
    

        // dispatch(updateCartUser(user.cart));
  });

  return (
    <Box bgGradient="linear(to-l,#000000, #272727)">
      <Box >
      <Table />
      </Box>
      <Box pt="5px">
      <CartExtras />
      </Box>
      <Box pt="40px">
      <CartFooter width="100%" />
      </Box>
    </Box>
  );
};

export default Cart;