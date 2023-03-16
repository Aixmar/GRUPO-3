import { Box , Flex, Image, Text, Divider} from "@chakra-ui/react";
import {cartFooterStyles, titleStyles, textStyles, secondFooter} from './cartFooterStyles'
import phone from "../../../../assets/phone.png";
import mp from "../../../../assets/mp.png";
import pizza from "../../../../assets/pizza.png";
import lock from "../../../../assets/lock.png";
import tic from "../../../../assets/tic.png";

const CartFooter = () => {
  return (
    <>
    <div>CartFooter</div>
      <Box {...cartFooterStyles } >

       <Flex justifyContent="space-between" mb="2" mt="0">

          
            <Box flex="1">
              <Text {...titleStyles}>Contact Us</Text>

              <Flex mt={2}>
                <Image boxSize="30px" src={phone} mr={2} />
              </Flex>

              <Text {...textStyles}>+025 455 665</Text>
              <Text {...textStyles}>support@mix2pizza.app</Text>
            </Box>

            <Box flex="1">
              <Text {...titleStyles}>Payment</Text>
                <Image  src={mp} boxSize="40px" objectFit="contain" />
                <Text>Mercado Pago</Text>
              </Box>

      </Flex>

      <Divider color="green.500" mt="2" mb="2" />

      <Box flex="1">
         <Text {...titleStyles} textAlign="center" >¿Why should you choose us?</Text>

         <Flex justifyContent="space-between" mb="1">

          <Box>
            <Image  src={pizza} boxSize="30px" objectFit="contain" />
            <Text {...textStyles}>You can have a unique pizza</Text>
          </Box>

        
          <Box>
              <Image  src={lock} boxSize="30px" objectFit="contain" />
              <Text {...textStyles}>Your information is safe</Text>
          </Box>
      
          <Box>
         <Image  src={tic} boxSize="30px" objectFit="contain" />
         <Text {...textStyles}>First quality ingredients</Text>
         </Box>

         </Flex>

      </Box>

      <Divider color="green.500" mt="4" mb="0" />
     
        <Box {...secondFooter } textAlign="center" padding="8">
          <Text fontSize="sm" color="#fcfaf7">
              © 2023 Mix2Pizza Todos los derechos reservados.
          </Text>
        </Box>

      </Box>
      </>
  )
}

export default CartFooter