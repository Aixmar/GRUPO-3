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

const OrderSummaryItem = (props) => {
  const { label, value, children } = props;
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode("gray.600", "gray.400")}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  );
};

export const PaymentSummary = () => {
  const cart = useSelector((state) => state.cart) || [];
  const totalPrice = cart.reduce((total, item) => total + item.price, 0).toFixed(2) || 0;

  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Checkout Items</Heading>

      <Stack spacing="6">
        <OrderSummaryItem label="Subtotal" value={totalPrice} />
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
