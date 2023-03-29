import { Flex, Button, Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SubNavbar() {
  return (
    <Flex
      as="nav"
      padding="1rem"
      bgGradient="linear-gradient(to right, #f27825, #eab830)"
      color="white"
    >
      <Box >
        
        <Button
          bgGradient="linear(to-l,#000000, #272727)"
          borderRadius="full"
          mr="255px"
          ml="275px"
        >
          <ChakraLink as={Link} to="/allpizzas" color="#f27825">
            All Pizzas
          </ChakraLink>
        </Button>
        
        
        <Button bgGradient="linear(to-l,#000000, #272727)"
          borderRadius="full" mr="255px">
        <ChakraLink as={Link} to="/alldrinks" color="#f27825" >
          All Drinks
        </ChakraLink>
        </Button>
       
        
        <Button bgGradient="linear(to-l,#000000, #272727)"
          borderRadius="full">
        <ChakraLink as={Link} to="/allsides" color="#f27825">
          Sides
        </ChakraLink>
        </Button>
      </Box>
    </Flex>
  );
}

export default SubNavbar;
