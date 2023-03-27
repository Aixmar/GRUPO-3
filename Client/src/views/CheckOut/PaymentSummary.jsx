import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
  useDisclosure,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

export const PaymentSummary = () => {
  const cart = useSelector((state) => state.cart) || [];
  const totalPrice = cart.reduce((total, item) => total + item.price*item.quantity, 0) || 0;

 

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Total a Pagar</Heading>

      <Stack spacing="6">
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
            ${totalPrice || 0}
            
          </Text>
        </Flex>
      </Stack>
      
    </Stack>
    
  );
};
