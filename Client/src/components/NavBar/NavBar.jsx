import { Box, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Spacer, ChakraProvider, Image, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import logopizza from "../../assets/logo-pizza-app.png";
import cart from "../../assets/cart.png";


const NavBar = () => {
  return (
    
      <Box bgGradient="linear(to-l,#000000, #272727)" color="white" py={0} px={8}>
        <Flex alignItems="center">
          <Box fontWeight="bold" fontSize="2xl">
            <Link as={RouterLink} to="/">
              <img src={logopizza} alt="Logo" width="65px" height="65px" />
            </Link>
          </Box>
          <Spacer />
          <Box>
            <Breadcrumb spacing="8px" separator="|">
              <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to="/home" _hover={{ color: "#f27825" }}>HOME</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to="/about" _hover={{ color: "#f27825" }}>ABOUT</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to="/createpizza" _hover={{ color: "#f27825" }}>CREATE PIZZA</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to="/allpizzas" _hover={{ color: "#f27825" }}>TRADITIONAL MENU</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to="/createuser" _hover={{ color: "#f27825" }}>SING IN</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
                <BreadcrumbLink as={RouterLink} to="/login" _hover={{ color: "#f27825" }}>LOGIN</BreadcrumbLink>
              </BreadcrumbItem>

              <BreadcrumbItem>
              <Link as={RouterLink} to="/cart">
              <img src={cart} alt="Logo" width="50px" height="50px" />
                </Link>
              </BreadcrumbItem>
            </Breadcrumb>
          </Box>
        </Flex>
      </Box>
    
  );
};

export default NavBar;
