import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
  useDisclosure,
  Box
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const PaymentSummary = () => {
  const cart = useSelector((state) => state.cart) || [];
  const totalPrice = cart.reduce((total, item) => total + item.price*item.quantity, 0) || 0;

 

  return (
    <Stack spacing="" border='1px solid #bcbcbc' rounded="xl" padding="4" width="full">
      <Heading fontSize='1.6rem' m='.2rem 0' >Total to pay</Heading>
      <Text fontSize="sm" color='#aaa' cursor='pointer' >See more details</Text>

      <Stack >
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold" mt='2.6rem' >Final total:</Text>
          <Text fontSize="1.6rem" fontWeight="extrabold" mt='2rem' >${totalPrice || 0}</Text>
        </Flex>
      </Stack>
      
    </Stack>
    
  );
};
