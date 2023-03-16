import { Box , Flex, Image, Text, Divider} from "@chakra-ui/react";
import {cartFooterStyles, titleStyles, textStyles, secondFooter} from './cartFooterStyles'
import phone2 from "../../../../assets/phone2.gif";
import mp2 from "../../../../assets/mp2.png";
import pizza from "../../../../assets/pizza.gif";
import lock from "../../../../assets/lock.gif";
import tic from "../../../../assets/tic.gif";

const CartFooter = () => {
  return (
    <>
          <Box {...cartFooterStyles } >

       <Flex justifyContent="space-between" mb="2" mt="0">

          
            <Box flex="1" align="center" >
                 <Text {...titleStyles}>Contact Us</Text> 
                 <Image boxSize="40px"  src={phone2} mr={2}  align="center"/>
                 <Text {...textStyles}>+025 455 665</Text>
                 <Text {...textStyles}>support@mix2pizza.app</Text>
            </Box>

            <Box flex="1" align="center">
                <Text {...titleStyles}>Payment</Text>
                <Image  src={mp2} boxSize="60px" objectFit="contain" />
               
              </Box>

      </Flex>

      <Divider color="green.500" mt="2" mb="2" />

      <Box flex="1">
         <Text {...titleStyles} textAlign="center" >¿Why should you choose us?</Text>

         <Flex justifyContent="space-between" mb="1">

          <Box  padding="3" align="center">
            <Image  src={pizza} boxSize="30px" objectFit="contain" />
            <Text {...textStyles} >You can have a unique pizza</Text>
          </Box>

        
          <Box  padding="3" align="center">
              <Image  src={lock} boxSize="30px"  objectFit="contain" />
              <Text {...textStyles} >Your information is safe</Text>
          </Box>
      
          <Box  padding="3" align="center">
         <Image  src={tic} boxSize="30px" objectFit="contain" />
         <Text {...textStyles}  >First quality ingredients</Text>
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