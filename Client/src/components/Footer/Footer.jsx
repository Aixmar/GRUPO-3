import {footerStyles, titleStyles, textStyles} from './footerStyles'
import { Box , Flex, Image, Text} from "@chakra-ui/react";
import { insta, twitter, fb } from '../../assets/CloudinaryImg';
import { Link } from 'react-router-dom';
import CustomModal from './Helper/CustomModal';
import { useState } from 'react';

const Footer = () => {

  const [showModal, setShowModal] = useState(false);

  const handleWorkClick = () => {
    setShowModal(true);
  };


    return (
  
      //aplicamos estilos a los componentes utilizando la sintaxis de spread operator {...estilos}.
      <Box {...footerStyles}>
        <Flex wrap="wrap" justifyContent="space-between" mb={8}>
          <Box flex="1">
            <Text {...titleStyles}>Contact</Text>
            <Text {...textStyles}>support@mix2pizza.app</Text>
            <Flex mt={4}>

            <Link to="https://www.facebook.com/pizzeriaguerrin/" target="_blank">
              <Image boxSize="30px" src={fb} mr={4} />
            </Link>

            <Link to="https://www.instagram.com/pizzeriaguerrin/" target="_blank">
              <Image boxSize="30px" src={insta} mr={4} />
            </Link>

            <Link to="https://twitter.com/PizzeriaGuerrin" target="_blank" >
              <Image boxSize="30px" src={twitter} />
            </Link>

            </Flex>
          </Box>
          <Box flex="1">
            <Text {...titleStyles}>About us</Text>

          <Link to="/ourstory" >
            <Text {...textStyles}>Our history</Text>
          </Link>

            <Text {...textStyles} onClick={handleWorkClick} cursor="pointer"  >Work with us</Text>
            {showModal && <CustomModal onClose={() => setShowModal(false)} />}
            {/* <Text {...textStyles}>franchise yourself</Text> */}
          </Box>
          <Box flex="1">
            <Text {...titleStyles}>Nutrition and Quality</Text>
            <Text {...textStyles}>Without gluten ✓</Text>
            <Text {...textStyles}>Nutritional values ✓ </Text>
            <Text {...textStyles}>Quality food ✓</Text>
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