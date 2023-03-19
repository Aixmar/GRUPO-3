import { Flex, Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function SubNavbar() {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      wrap="wrap"
      padding="1rem"
      bgGradient="linear-gradient(to right, #f27825, #eab830)"
      color="white"
    >
      <Box ml={8}>
        <ChakraLink as={Link} to="/allpizzas" mr={6}>
          All Pizzas
        </ChakraLink>
        <ChakraLink as={Link} to="/alldrinks">
          All Drinks
        </ChakraLink>
        <ChakraLink as={Link} to="/allsides" mr={6}>
          Sides
        </ChakraLink>
      </Box>
    </Flex>
  );
}

export default SubNavbar;
