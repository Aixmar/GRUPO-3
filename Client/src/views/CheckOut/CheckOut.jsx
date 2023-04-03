import { Flex, Box } from "@chakra-ui/react";
import { CartOrderSummary } from "../Cart/Helper/Table/CartOrderSummary/CartOrderSummary";
import InfoPayment from "./InfoPayment";
import { PaymentSummary } from "./PaymentSummary";
import { Button, Text, Link, useColorModeValue as mode } from "@chakra-ui/react";


const CheckOut = () => {
  return (
    <Flex direction="row" gap="1rem" justifyContent='center' w='60%' margin='0 auto' padding='2rem'>
      <Box display='flex' justifyContent='center' w='26rem' rounded="lg" h='auto' border='1px solid #bcbcbc' >
        <InfoPayment />
      </Box>
      <Flex w='25rem' id="CheckOut" align='center' direction='column' >
        <PaymentSummary />
        <Flex direction="row" pt="10px" >
        <Link color={mode("orange.500", "orange.200")} style={{ textDecoration: "none" }} href="/cart" >
          <Button borderRadius="full"
          padding="1.4rem 1rem"
          size="lg"
          fontSize="lg"
          margin="2px 16px"
          // background="linear-gradient(to right, #f27833, #eab830)"
          colorScheme="orange"
          color="white"
          // _hover={{ background: "linear-gradient(to right, #eab830, #f27833)" }}
          // _focus={{ boxShadow: "none" }}
          // _active={{ boxShadow: "none" }}
          transition="all 0.2s">
         <Text>Go to cart</Text>
         </Button>
        </Link>
        <Link color={mode("orange.500", "orange.200")} style={{ textDecoration: "none" }} href="/home" >
          <Button  borderRadius="full"
          padding="1.4rem 1rem"
          size="lg"
          fontSize="lg"
          margin="2px 16px"
          // background="linear-gradient(to right, #f27833, #eab830)"
          colorScheme="orange"
          color="white"
          // _hover={{ background: "linear-gradient(to right, #eab830, #f27833)" }}
          // _focus={{ boxShadow: "none" }}
          // _active={{ boxShadow: "none" }}
          transition="all 0.2s">
         <Text>Go to Home</Text>
         </Button>
        </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CheckOut;

