import { Box , Flex, Image, Text, Divider} from "@chakra-ui/react";
import {cartFooterStyles, titleStyles, textStyles, secondFooter} from './cartFooterStyles'
import { tel, mp, pizza,lock, tic } from "../../../../assets/CloudinaryImg";

const CartFooter = () => {
  return (
    <>
          <Box {...cartFooterStyles } bgGradient="linear-gradient(to right, #f27825, #eab830)" >

       <Flex justifyContent="space-between" mb="2" mt="0">

          
            <Box flex="1" align="center" >
                 <Text {...titleStyles}>Contact Us</Text> 
                 <Image boxSize="40px"  src={tel} mr={2}  align="center"/>
                 <Text {...textStyles}>+025 455 665</Text>
                 <Text {...textStyles}>support@mix2pizza.app</Text>
            </Box>

            <Box flex="1" align="center">
                <Text {...titleStyles}>Payment</Text>
                <Image  src={mp} boxSize="60px" objectFit="contain" />
               
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

      <Divider color="white" mt="4" mb="0" />
     
          <Box justifyContent="center" alignItems="center" pt="20px">
          <Text justifyContent="center"  fontSize="sm" color="#fcfaf7">
              © 2023 Mix2Pizza All rights reserved.
          </Text>
          </Box>
        

      </Box>
      </>
  )
}

export default CartFooter