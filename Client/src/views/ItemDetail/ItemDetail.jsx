import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { pushToCart } from "../../redux/actions";
import {
  Button,
  Box,
  Image,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Flex,
  Avatar } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import axios from "axios";
import css from "./ItemDetail.module.css";
import { ok } from "../../assets/CloudinaryImg";

const ItemDetail = () => {

  const { id } = useParams();
  const dispatch = useDispatch();
  const [pizza, setPizza] = useState({});
  const [ modalAddtocart, setModalAddtocart ] = useState(false);
  const [isOpen, setIsOpen] = useState(false);



  const clickHandler = () => {
    dispatch(pushToCart(pizza));
    setModalAddtocart(true);
  };


  const handleClose = () => setModalAddtocart(false);

  
  useEffect(() => {
    axios
      .get(`/pizzas/${id}`)
      .then((data) => data.data)
      .then((pizza) => setPizza(pizza));

    window.scrollTo(0, 0);
    document.querySelector("body").classList.add(css.disableScroll);
    return () => document.querySelector("body").classList.remove(css.disableScroll);
  }, []);

  
  const handleModal = () => {
    setIsOpen(!isOpen);
  };

  

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="start"
      width="100%"
      height="100vh"
      bgGradient="linear(to-l,#000000, #272727)"
    >
      <Box
        display="flex"
        borderWidth="1px"
        borderRadius="lg"
        width="100%"
        margin="2rem 4rem 0"
        boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
        height="80vh"
      >
        <Image
          src={pizza.image}
          alt={pizza.name}
          borderTopRightRadius="8px"
          borderTopLeftRadius="8px"
          h="auto"
          maxWidth="600px"
          objectFit="cover"
          boxShadow="0px 20px 40px rgba(0, 0, 0, 0.3)"
        />
        <Box
          p="6"
          bgGradient="linear(to-l,#000000, #272727)"
          borderBottomRightRadius="8px"
          borderBottomLeftRadius="8px"
          width="100%"
        >
          <Box d="flex" alignItems="baseline">
            <Text
              fontFamily="Montserrat"
              fontSize="3.2rem"
              fontWeight="semibold"
              color="white"
              mb="2rem"
            >
              {pizza.name}
            </Text>

            {pizza.category === "pizza" && (
              <Text
                fontFamily="Montserrat"
                fontSize="1.2rem"
                fontWeight="semibold"
                color="white"
              >
                <Text color="#f27825" display="inline">
                  Dough:
                </Text>{" "}
                {pizza?.detail?.dough}
              </Text>
            )}
            {pizza.category === "pizza" && (
              <Text
                fontFamily="Montserrat"
                fontSize="1.2rem"
                fontWeight="semibold"
                color="white"
              >
                <Text color="#f27825" display="inline">
                  Base:
                </Text>{" "}
                {pizza?.detail?.base}
              </Text>
            )}
            {pizza.category !== "pizza" && (
              <Text
                fontFamily="Montserrat"
                fontSize="1.2rem"
                fontWeight="semibold"
                color="white"
              >
                <Text color="#f27825" display="inline">
                  Description:
                </Text>{" "}
                {pizza?.detail?.description}
              </Text>
            )}
            {pizza.category === "pizza" && (
              <Text
                fontFamily="Montserrat"
                fontSize="1.2rem"
                fontWeight="semibold"
                color="white"
              >
                <Text color="#f27825" display="inline">
                  Mozzarella:
                </Text>{" "}
                {pizza?.detail?.mozzarella}
              </Text>
            )}
            {pizza.category === "pizza" &&
              pizza.detail.meatIngredients.length !== 0 && (
                <Text
                  fontFamily="Montserrat"
                  fontSize="1.2rem"
                  fontWeight="semibold"
                  color="white"
                >
                  <Text color="#f27825" display="inline">
                    Meat ingredients:
                  </Text>{" "}
                  {pizza?.detail?.meatIngredients?.join(", ")}
                </Text>
              )}
            {pizza.category === "pizza" &&
              pizza.detail.cheeseIngredients.length !== 0 && (
                <Text
                  fontFamily="Montserrat"
                  fontSize="1.2rem"
                  fontWeight="semibold"
                  color="white"
                >
                  <Text color="#f27825" display="inline">
                    Cheese ingredients:
                  </Text>{" "}
                  {pizza?.detail?.cheeseIngredients?.join(", ")}
                </Text>
              )}
            {pizza.category === "pizza" &&
              pizza.detail.toppingIngredients.length !== 0 && (
                <Text
                  fontFamily="Montserrat"
                  fontSize="1.2rem"
                  fontWeight="semibold"
                  color="white"
                  mb="1rem"
                >
                  <Text color="#f27825" display="inline">
                    Topping ingredients:
                  </Text>{" "}
                  {pizza?.detail?.toppingIngredients?.join(", ")}
                </Text>
              )}
            <Button onClick={handleModal}>See reviews</Button>
            <Modal isOpen={isOpen} onClose={handleModal}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader
                  fontFamily="Montserrat"
                  fontSize="1.2rem"
                  fontWeight="bold"
                  color="#272727"
                >
                  Reviews
                </ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                  {pizza.reviews ? (
                    pizza.reviews.map((review) => (
                      <Flex
                        key={review.name}
                        alignItems="center"
                        flexDirection="row"
                        pb="2rem"
                      >
                        <Avatar size="xl" src={review.image} />
                        <Box ml="1.5rem">
                          <Text
                            fontFamily="Montserrat"
                            fontSize="1.2rem"
                            fontWeight="semibold"
                            color="#f27825"
                          >
                            Name:
                            <Text color="#272727" display="inline">
                              {" "}
                              {review.name}
                            </Text>
                          </Text>
                          <Flex alignItems="center">
                            {[...Array(5)].map((_, index) => {
                              const value = index + 1;
                              return (
                                <Box key={index} mr={2}>
                                  <StarIcon
                                    color={
                                      value <= review.rating
                                        ? "#FFD700"
                                        : "gray.300"
                                    }
                                  />
                                </Box>
                              );
                            })}
                          </Flex>
                          <Text
                            fontFamily="Montserrat"
                            fontSize="1.2rem"
                            fontWeight="semibold"
                            color="#f27825"
                          >
                            Review:
                            <Text color="#272727" display="inline">
                              {" "}
                              {review.review}
                            </Text>
                          </Text>
                        </Box>
                      </Flex>
                    ))
                  ) : (
                    <Text>No reviews</Text>
                  )}
                </ModalBody>
              </ModalContent>
            </Modal>
          </Box>

          <Box width="100%">
            <Text fontFamily="Montserrat" fontSize="4rem" color="white">
              $ {pizza.price}
            </Text>
            <Link to="/allpizzas">
              <Button
                variantcolor="teal"
                borderRadius="full"
                padding="10px"
                background="linear-gradient(to right, #f27833, #eab830)"
                fontFamily="Montserrat"
              >
                Back to menu
              </Button>
            </Link>
            <Button
              isDisabled={pizza.stock === 0 ? true : false}
              onClick={clickHandler}
              variantcolor="orange"
              borderRadius="full"
              padding="10px"
              margin="10px"
              background="linear-gradient(to right, #f27833, #eab830)"
              fontFamily="Montserrat"
            >
              Add to cart
            </Button>
          </Box>
        </Box>


        <Modal isOpen={modalAddtocart} onClose={handleClose} >
          <ModalOverlay backdropFilter='blur(6px)' bg='#000000b6' />
          <ModalContent margin='auto'  >
          <ModalCloseButton/>
            <Image src={ok} alt="ok" h='2.8rem' objectFit='contain' mt='1rem' mb='0' />
            <ModalHeader textAlign='center' fontSize='1.8rem' p='0' >Added to cart successfully!</ModalHeader>
            <ModalBody textAlign='center' fontSize='1.4rem' >
            <Link to='/allpizzas' ><Button mt='.6rem' fontSize='1.4rem' bg={"orange.400"} color={"white"} _hover={{ bg: "orange.500" }} onClick={handleClose} >Continue shopping</Button></Link>
            <Text>or</Text>
            <Link to='/cart' ><Button mb='.6rem' fontSize='1.4rem' bg={"orange.400"} color={"white"} _hover={{ bg: "orange.500" }} onClick={handleClose} >Go to cart</Button></Link>
            </ModalBody>
          </ModalContent>
        </Modal>

      </Box>
    </Box>
  );
};

export default ItemDetail;
