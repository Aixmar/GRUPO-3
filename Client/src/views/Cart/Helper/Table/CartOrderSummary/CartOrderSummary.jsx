import {
  Button,
  Flex,
  Heading,
  Link,
  Stack,
  Text,
  useColorModeValue as mode,
} from '@chakra-ui/react'
// import { FaArrowRight } from 'react-icons/fa'
// import { formatPrice } from './PriceTag'
const OrderSummaryItem = (props) => {
  const { label, value, children } = props
  return (
    <Flex justify="space-between" fontSize="sm">
      <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
        {label}
      </Text>
      {value ? <Text fontWeight="medium">{value}</Text> : children}
    </Flex>
  )
}

export const CartOrderSummary = (props) => {

    console.log(props.totalPrice);
  return (
    <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
      <Heading size="md">Order Summary</Heading>

      <Stack spacing="6">
        {/* <OrderSummaryItem label="Subtotal" value={formatPrice(597)} /> */}
        <OrderSummaryItem label="Shipping + Tax">
          <Link href="#" textDecor="underline" onClick={()=>alert('Esto Hace algo,  tranqui')}>
            Calculate shipping
          </Link>
        </OrderSummaryItem>
        <OrderSummaryItem label="Coupon Code">
          <Link href="#" textDecor="underline" onClick={()=>alert('Esto tambien hace algo, no te alteres')}>
            Add coupon code
          </Link>
        </OrderSummaryItem>
        <Flex justify="space-between">
          <Text fontSize="lg" fontWeight="semibold">
            Total
          </Text>
          <Text fontSize="xl" fontWeight="extrabold">
          ${props.totalPrice || 0}
          </Text>
        </Flex>
      </Stack>
      <Button colorScheme="orange" size="lg" fontSize="md" onClick={()=> alert('AQUI TE MANDO AL CHECKOUT KEEP-CALM PORFAVORCITO')}>
        Checkout
      </Button>
    </Stack>
  )
}
