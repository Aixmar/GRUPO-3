import {footerStyles, titleStyles, textStyles} from './footerStyles'
import { Box , Flex, Image, Text} from "@chakra-ui/react";
import { insta, twitter, fb } from '../../assets/CloudinaryImg';

const Footer = () => {
    return (
  
      //aplicamos estilos a los componentes utilizando la sintaxis de spread operator {...estilos}.
      <Box {...footerStyles}>
        <Flex justifyContent="space-between" mb={8}>
          <Box flex="1">
            <Text {...titleStyles}>Contact</Text>
            <Text {...textStyles}>support@mix2pizza.app</Text>
            <Flex mt={4}>
              <Image boxSize="30px" src={fb} mr={4} />
              <Image boxSize="30px" src={insta} mr={4} />
              <Image boxSize="30px" src={twitter} />
            </Flex>
          </Box>
          <Box flex="1">
            <Text {...titleStyles}>About us</Text>
            <Text {...textStyles}>Our history</Text>
            <Text {...textStyles}>Work with us</Text>
            <Text {...textStyles}>franchise yourself</Text>
          </Box>
          <Box flex="1">
            <Text {...titleStyles}>Nutrition and Quality</Text>
            <Text {...textStyles}>Without gluten</Text>
            <Text {...textStyles}>Nutritional values</Text>
            <Text {...textStyles}>Quality food</Text>
          </Box>
        </Flex>
        <Box textAlign="center">
          <Text fontSize="sm" color="#272727">
            © 2023 Mix2Pizza Todos los derechos reservados.
          </Text>
        </Box>
      </Box>
    );
  };
  
  export default Footer;