import { Box, Flex, Link, Spacer, ChakraProvider } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logopizza from "../../assets/logo-pizza-app.png";
import navbarStyles from "./navbarStyles";

const NavBar = () => {
  return (
    <ChakraProvider theme={navbarStyles}>
      <Box bgGradient="linear(to-l,#000000, #272727)" color="white" py={0} px={8}>
        <Flex alignItems="center">
          <Box fontWeight="bold" fontSize="2xl">
            <Link as={RouterLink} to="/">
              <img src={logopizza} alt="Logo" width="65px" height="65px" />
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Link as={RouterLink} to="/home">
              HOME
            </Link>
            <Link as={RouterLink} to="/about">
              ABOUT
            </Link>
            <Link as={RouterLink} to="/createpizza">
              CREATE PIZZA
            </Link>
            <Link as={RouterLink} to="/allpizzas">
              TRADITIONAL MENU
            </Link>
            <Link as={RouterLink} to="/createuser">
              SING IN
            </Link>
            <Link as={RouterLink} to="/login">
              LOGIN
            </Link>
            <Link as={RouterLink} to="/cart">
              CART
            </Link>
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default NavBar;
