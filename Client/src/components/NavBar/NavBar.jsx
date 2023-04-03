import {
  Box,
  Heading,
  UnorderedList,
  ListItem,
  Flex,
  Text,
  Breadcrumb,
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
  Menu,
  MenuButton,
  MenuList,
  MenuItem
} from "@chakra-ui/react";
import { Link as RouterLink, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

import useLogout from "../../Utils/useLogout";
import { cartlogo, pizzalogo } from "../../assets/CloudinaryImg";
import { useAuthProv } from "../../context/AuthProvider";
import UserForm from "../../views/UserForm/UserForm";
import UserLogin from "../../views/UserLogin/UserLogin";
import profImg from "../../assets/userProfile.png";
import React, { useEffect } from "react";
import { popToCart,  clearCartUser, putCartUser, openSignupDrawer, getUserById, clearUser} from "../../redux/actions";
import { useState } from "react";

const NavBar = () => {
  const cartItems = useSelector((state) => state.cart);
  const { signupDrawer } = useSelector((state) => state);
  const navigate = useNavigate();
  const logout = useLogout();
  const { user, googleLogout } = useAuthProv();

  ///////////////DRAWER CART 
  const { isOpen, onOpen, onClose } = useDisclosure();

  const btnRef = React.useRef();
  const dispatch = useDispatch();
  const[openDrawCart1, setopenDrawCart1] = useState(false);
  const { pathname } = useLocation();
 
  const handleopenDrawCart1 = () => {
    setopenDrawCart1(true);
    }

  const handleCloseDrawCart1 = () => {
    setopenDrawCart1(false);
  }
  
  function handleNavigate() {
    onClose();
    setopenDrawCart1(false);
    dispatch(openSignupDrawer(false));
  }


  const onClickDelete = (index) => {
    const newCart = cartItems.filter((item, i) => i !== index);
    dispatch(popToCart(newCart));
  };
  ///////////////////ProfileSelect///

  const links = [
    {
      label: "Account",
      to: "/profile/account",
    },
    // {
    //   label: "Settings",
    //   to: "/profile/settings",
    // },
    {
      label: "Favorites",
      to: "/profile/stars",
    },
    {
      label: "History",
      to: "/profile/history",
    },
  ];
    
    const [selectedOption, setSelectedOption] = useState("");
  
    const handleLinkClick = (to) => {
      setSelectedOption(to);
    };
  ///////////////////////////////

  const updateCartUser = { cart: cartItems, userId: user.id };


  const signOut = async () => {
    if (user.displayName) {
      googleLogout();
    }
    dispatch(putCartUser(updateCartUser));
    dispatch(clearCartUser());
    dispatch(clearUser())
    await logout();
    navigate("/home");
  };

  useEffect(() => {
    signupDrawer && openModal();
  }, [signupDrawer]);

  const handleCloseDrawer = () => {
    onClose();
    dispatch(openSignupDrawer(false));
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
                color={pathname === '/home' ? '#f27825' : '#fff'}
              >
                HOME
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                as={RouterLink}
                to="/createpizza"
                _hover={{ color: "#f27825" }}
                color={pathname === '/createpizza' ? '#f27825' : '#fff'}
              >
                CREATE PIZZA
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                as={RouterLink}
                to="/allpizzas"
                _hover={{ color: "#f27825" }}
                color={pathname === '/allpizzas' || pathname === '/alldrinks' || pathname === '/allsides' ? '#f27825' : '#fff'}
              >
                TRADITIONAL MENU
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                as={RouterLink}
                to="/about"
                _hover={{ color: "#f27825" }}
                color={pathname === '/about' ? '#f27825' : '#fff'}
              >
                ABOUT
              </BreadcrumbLink>
            </BreadcrumbItem>

            { 
              user.rol === 'admin' ? (
                <BreadcrumbItem>
                  <BreadcrumbLink
                    as={RouterLink}
                    to="/admin"
                    _hover={{ color: "#f27825" }}
                    color={pathname === '/admin' ? '#f27825' : '#fff'}
                    >
                    ADMIN
                  </BreadcrumbLink>
                </BreadcrumbItem>
              ) : user.email && (
              <BreadcrumbItem>
                <Menu>
                  <MenuButton
                    as={BreadcrumbLink}
                    to="/profile/account"
                    _hover={{ color: "#f27825" }}
                    color={pathname.includes("/profile/") ? "#f27825" : "#fff"}
                  >
                    PROFILE
                  </MenuButton>
                  <MenuList color="black" zIndex={999}>
                  {links.map((link, index) => (
                    <RouterLink to={link.to} color="black">
                      <MenuItem
                        key={index}
                        onClick={() => handleLinkClick(link.to)}
                        _hover={{ color: "#f27825" }}
                        color={pathname === link.to ? "#f27825" : "black"}>
                        {link.label}
                      </MenuItem>
                    </RouterLink>
                  ))}
                </MenuList>
              </Menu>
            </BreadcrumbItem>)}
           
            {/* //////////////////////////////////////////////////// DRAWER CART /////////////////////////////////////// */}
            
            <BreadcrumbItem>                
  <Image onClick={handleopenDrawCart1} cursor="pointer" src={cartlogo} width="50px" height="50px" />
  <Drawer
    isOpen={openDrawCart1}
    placement="right"
    onClose={handleCloseDrawCart1}
    finalFocusRef={btnRef}
  >
    <DrawerOverlay />
    <DrawerContent>
      <DrawerCloseButton />
      <DrawerHeader fontSize='1.8rem' >YOUR CART</DrawerHeader>
      <DrawerBody>
        {cartItems.length === 0 ? (
          <Text>There are no items in the cart</Text>
        ) : (
          <>
            <Heading color="#f27825" pb="20px" fontSize='1.8rem' >Selected products </Heading>
            <UnorderedList w='100%' m='0' listStyleType="none">
  {cartItems.map((item, index) => (
    <ListItem key={item.name} border='1px solid #bcbcbc' rounded='md' h='5rem' display='flex' mb='.2rem'>
      <Image src={item.image} alt={item.name} h='4rem' w='auto' objectFit='cover' m='auto 2px' border='1px solid #bcbcbc' borderRadius='full' />
      <Flex flexDirection='column' w='100%'>
        <Flex h='2rem' m='.4rem 0' fontSize={{ base: '1em', md: '1.2em' }} fontWeight='bold' justifyContent='space-between' mr='1rem'>
          <Text ml='10px' overflowWrap='anywhere' overflow= 'hidden' flexWrap='wrap' sx={{ WebkitLineClamp: [1, 2], WebkitBoxOrient: 'vertical', display: '-webkit-box' }}>{item.name}</Text>
          <Text>${item.price}</Text>
        </Flex>
        <Flex justifyContent='flex-end'>
          <CloseButton w='3rem' mr='10px' mb='5px' onClick={() => onClickDelete(index)} color="red" _hover={{ background: '#f34949', color: '#fff' }}>
            Delete
          </CloseButton>
        </Flex>
      </Flex>
    </ListItem>
  ))}
</UnorderedList>

          </>
        )}
      </DrawerBody>
      <DrawerFooter>
        <Button variant="outline" mr={3} onClick={handleCloseDrawCart1}>
          Continue shopping
        </Button>
        <Link as={RouterLink} to='/cart' style={{textDecoration: 'none' }} onClick={handleNavigate}>
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
    onClick={handleopenDrawCart1}
  >
    <span>{cartItems.length}</span>
  </Badge>
</BreadcrumbItem>
           
            /////////////////////////////////////////////////////////

     
            {user.email ? (
              <Box ml="1rem" textAlign="center" display="flex" flexDir="column">
                <Box display="flex" alignItems="center">
                  <Text>{user.name && user.name}</Text>
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

            { user?.image ? <Image src={user.image} alt="profile" h="3rem" w='3rem' ml="2rem" objectFit='cover' borderRadius='50%' />
            : user?.email && <Image src={profImg} alt="profile" h="3rem" w='3rem' ml="2rem" objectFit='cover' borderRadius='50%' />
              
            }
          </Breadcrumb>
        </Box>
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={handleCloseDrawer} size="xl">
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
