import { Flex, Box } from "@chakra-ui/react";
import { CartOrderSummary } from "../Cart/Helper/Table/CartOrderSummary/CartOrderSummary";
import InfoPayment from "./InfoPayment";
import { PaymentSummary } from "./PaymentSummary";
import { Text, Link, useColorModeValue as mode } from "@chakra-ui/react";


const CheckOut = () => {
  return (
    <Flex direction="row" justify="center" gap="2rem" padding='2rem'>
      <InfoPayment />
      <Flex w='25rem' id="CheckOut" overflowY="auto" align='center' direction='column'>
        <PaymentSummary />
        <Link color={mode("orange.500", "orange.200")} href="/cart" >
         <Text>Go to cart</Text>
        </Link>
        <Link color={mode("orange.500", "orange.200")} href="/home" >
         <Text>Go to Home</Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default CheckOut;
