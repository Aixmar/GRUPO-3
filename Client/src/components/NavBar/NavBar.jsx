import { Box, Flex, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Spacer, ChakraProvider, Image, Link , Badge} from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";
import logopizza from "../../assets/logo-pizza-app.png";
import cart from "../../assets/cart.png";
import { useSelector } from "react-redux";


const NavBar = () => {

  const cartItems = useSelector(state => state.cart);
  
  return (
    
      <Box bgGradient="linear(to-l,#000000, #272727)" color="white" py={0} px={8}>
        <Flex alignItems="center">
          <Box fontWeight="bold" fontSize="2xl">
          <motion.div
  whileHover={{ scale: 1.1, rotate: 5 }}
  whileTap={{ scale: 0.9 }}
>
  <Link as={RouterLink} to="/">
    <motion.img
      src={logopizza}
      alt="Logo"
      width="85px"
      height="85px"
      initial={{ opacity: 0, rotate: 0 }}
      animate={{ opacity: 1, rotate: 360 }}
      transition={{ duration: 0.5 }}
    />
  </Link>
</motion.div>
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
                <Badge
                    className="cart-icon"
                    borderRadius="full"
                    px={2}
                    py={1}
                    colorScheme="orange"
                    border="2px"
                    borderColor="orange.500"
                    position="relative"
                    transform="translateX(-60%)"
                    >
                    
                    <span >{cartItems.length}</span>
                  </Badge>
                
              </BreadcrumbItem>
              

            </Breadcrumb>
          </Box>
        </Flex>
      </Box>
    
  );
};

export default NavBar;
