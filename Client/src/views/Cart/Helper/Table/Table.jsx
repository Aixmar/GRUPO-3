import { useDispatch, useSelector } from "react-redux";
import { popToCart } from "../../../../redux/actions";
import { Link as RouterLink } from "react-router-dom";
import {Box, Flex, Heading, HStack, Link, Stack, useColorModeValue as mode, useDisclosure,} from "@chakra-ui/react";
import { CartItem } from "./CartItem/CartItem";
import { CartOrderSummary } from "./CartOrderSummary/CartOrderSummary";
// import { cartData } from './_data'

const Table = () => {
  const cart = useSelector((state) => state.cart) || [];

  const dispatch = useDispatch();

  const onClickDelete = (index) => {
    const newCart = cart.filter((item, i) => i !== index);
    dispatch(popToCart(newCart));
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <Box maxW={{ base: "3xl", lg: "7xl" }} mx="auto" px={{ base: "4", md: "8", lg: "12" }} py={{ base: "6", md: "8", lg: "12" }}>
      <Stack direction={{ base: "column", lg: "row" }} align={{ lg: "flex-start" }} spacing={{ base: "8", md: "16" }}>
        <Stack spacing={{ base: "8", md: "10" }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart
          </Heading>

          <Stack spacing="6">
          {cart.length > 0 && cart.map((item, index) => (
              <CartItem
                key={index}
                {...item}
                index={index}
                onClickDelete={onClickDelete}
              />
            ))}
            {cart.length < 1 && <Box>NO ITEMS TO DISPLAY</Box> }
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary totalPrice={totalPrice.toFixed(2)} />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode("orange.500", "orange.200")} as={RouterLink} to="/allpizzas">
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};

export default Table;
