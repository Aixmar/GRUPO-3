import {
  Box,

  Heading,
  UnorderedList,
  ListItem,
  Flex,
  Input,
  Text,
  Breadcrumb,
  Radio,
  BreadcrumbItem,
  BreadcrumbLink,
  Spacer,
  Link,
  Badge,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Button,
  Image,
  CloseButton,
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import useLogout from "../../Utils/useLogout";
import { cartlogo, pizzalogo } from "../../assets/CloudinaryImg";
import { useAuthProv } from "../../context/AuthProvider";
import useAuth from "../../Utils/useAuth";
import UserForm from "../../views/UserForm/UserForm";
import UserLogin from "../../views/UserLogin/UserLogin";
import profImg from "../../assets/profileImage.png";
import React from "react";
import { popToCart,  clearCartUser, putCartUser } from "../../redux/actions";
// import CartDrawer from "../../views/Cart/Helper/CartDrawer";
import { useState } from "react";

const NavBar = () => {
  const cartItems = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const logout = useLogout();
  const { user, googleLogout } = useAuthProv();

  ///////////////DRAWER CART 
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const[openDrawCart1, setopenDrawCart1] = useState(false);
 
  const handleopenDrawCart1 = () => {
    setopenDrawCart1(true);
    }

  const handleCloseDrawCart1 = () => {
    setopenDrawCart1(false);
    }



  const onClickDelete = (index) => {
    const newCart = cartItems.filter((item, i) => i !== index);
    dispatch(popToCart(newCart));
  };
  ///////////////////

  const updateCartUser = { cart: cartItems, userId: user.id };


  const signOut = async () => {
    if (user.displayName) {
      googleLogout();
    }
    dispatch(putCartUser(updateCartUser));
    dispatch(clearCartUser(clearCartUser));
    await logout();
    navigate("/home");
  };

  const openModal = () => onOpen();

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
                src={pizzalogo}
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
          <Breadcrumb spacing="12px" separator="|">
            <BreadcrumbItem>
              <BreadcrumbLink
                as={RouterLink}
                to="/home"
                _hover={{ color: "#f27825" }}
              >
                HOME
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                as={RouterLink}
                to="/createpizza"
                _hover={{ color: "#f27825" }}
              >
                CREATE PIZZA
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                as={RouterLink}
                to="/allpizzas"
                _hover={{ color: "#f27825" }}
              >
                TRADITIONAL MENU
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                as={RouterLink}
                to="/about"
                _hover={{ color: "#f27825" }}
              >
                ABOUT
              </BreadcrumbLink>
            </BreadcrumbItem>

            {user.email && (
              <BreadcrumbItem>
                <BreadcrumbLink
                  as={RouterLink}
                  to="/profile/account"
                  _hover={{ color: "#f27825" }}
                >
                  PROFILE
                </BreadcrumbLink>
              </BreadcrumbItem>
            )}
            {/* <Button onClick={onOpen}>Login</Button> */}
            {/* <BreadcrumbItem>
                  <BreadcrumbLink marginRight="3" as={RouterLink} to="/createuser" _hover={{ color: "#f27825" }}>REGISTER</BreadcrumbLink>
                </BreadcrumbItem> */}
            {/* <BreadcrumbItem>
                  <BreadcrumbLink marginRight="3" as={RouterLink} to="/login" _hover={{ color: "#f27825" }}>LOGIN</BreadcrumbLink>
                </BreadcrumbItem> */}
            //////////////////////////////////////////////////// DRAWER CART ///////////////////////////////////////
            
              <BreadcrumbItem>
                
                  <Image onClick={handleopenDrawCart1}  src={cartlogo} width="50px" height="50px" />
                
                <Drawer
                  isOpen={openDrawCart1}
                  placement="right"
                  onClose={handleCloseDrawCart1}
                  finalFocusRef={btnRef}
                >
                  <DrawerOverlay />
                  <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>CART</DrawerHeader>

                    <DrawerBody>
                      <Heading color="#f27825" pb="20px">Selected products </Heading>

                      <UnorderedList listStyleType="none">
                        {cartItems.map((item, index) => (
                          <ListItem key={item.name}>
                            <Image
                              src={item.image}
                              alt={item.name}
                              boxSize="50px"
                              mr="4"
                            />
                            <span>{item.name}</span>
                            <span style={{ marginLeft: "1rem" }}>
                              ${item.price}
                            </span>
                            <CloseButton
                              onClick={() => onClickDelete(index)}
                              
                              w="4rem"
                              color="red"
                            >
                              Delete
                            </CloseButton>
                          </ListItem>
                        ))}
                      </UnorderedList>
                    </DrawerBody>

                    <DrawerFooter>
                      <Button variant="outline" mr={3} onClick={handleCloseDrawCart1}>
                        Continue shopping
                      </Button>


                      <Link as={RouterLink} to='/cart'>
                        <Button colorScheme="orange">Go to Cart</Button>
                      </Link>

                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>

         
                <Badge
                  className="cart-icon"
                  borderRadius="full"
                  px={2}
                  py={1}
                  cursor="pointer"
                  colorScheme="orange"
                  border="2px"
                  borderColor="orange.500"
                  position="relative"
                  transform="translateX(-60%)"
                >
                  <span>{cartItems.length}</span>
                </Badge>
              </BreadcrumbItem>
           
            /////////////////////////////////////////////////////////

     
            {user.email ? (
              <Box ml="1rem" textAlign="center" display="flex" flexDir="column">
                <Box display="flex" alignItems="center">
                  <Text>{user.displayName ? user.displayName : user.name}</Text>
                </Box>
                {/* <Button onClick={signOut} >SIGN OUT</Button> */}
                <BreadcrumbItem>
                  <Link _hover={{ color: "#f27825" }} onClick={signOut}>
                    SIGN OUT
                  </Link>
                </BreadcrumbItem>
              </Box>
            ) : (
              <>

                <BreadcrumbItem w="5rem">
                  <Link _hover={{ color: "#f27825" }} onClick={openModal}>
                    LOGIN
                  </Link>
                </BreadcrumbItem>
              </>
            )}
            {user.email && (
              <Image src={profImg} alt="profile" h="2.6rem" ml="2rem" />
            )}
          </Breadcrumb>
        </Box>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay>
          <DrawerContent bgGradient="linear(to-l,#000000, #272727)">
            <DrawerCloseButton color="#fff" />
            <DrawerHeader textAlign="center" fontSize="2rem" color="#fff">
              Register or login to continue
            </DrawerHeader>
            <Box display="flex" w="100%">
              <Text fontSize="1.6rem" color="#fff" ml="8rem">
                Create an account
              </Text>
              <Text fontSize="1.6rem" color="#fff" ml="17rem">
                Or login
              </Text>
            </Box>
            <DrawerBody display="flex" fontSize="1.4rem">
              <Box
                textAlign="center"
                w="100%"
                display="flex"
                justifyContent="center"
                borderRight="1px solid #fff"
              >
                <UserForm onClose={onClose} />
              </Box>
              <Box w="100%" display="flex" justifyContent="center">
                <UserLogin onClose={onClose} />
              </Box>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default NavBar;
