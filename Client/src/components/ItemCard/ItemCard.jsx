import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  Box,
  Flex,
  Grid,
  Image,
  Text,
  Select,
  useToast,
  Alert,
  AlertDialog,
} from "@chakra-ui/react";
import { Button, IconButton } from "@chakra-ui/button";
import { pushToCart, addFavorite, getUserById, openSignupDrawer } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useAuthProv } from "../../context/AuthProvider";

const ItemCard = (props) => {
  const cart = useSelector((state) => state.cart);
  const found = cart.filter((item) => item.id === props.id);

  const [quantity, setQuantity] = useState(1);

  const itemCart = { ...props, quantity: parseInt(quantity) };

  const toast = useToast();

  const handleInputChange = (e) => {
    const { value } = e.target;
    setQuantity(value);
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(pushToCart(itemCart));
    toast({
      title: "Item added",
      position: "top-center",
      status: "success",
      duration: 2000,
      isClosable: true,
      variant: "subtle",
      style: {
        backgroundColor: "white",
        color: "orange",
      },
    });
  };

  const { user } = useAuthProv();

  const handleClickFavorite = () => {
    const itemFav = { productId: props.id, userId: user.id };
    !user.email
      ? dispatch(openSignupDrawer(true))
      : dispatch(addFavorite(itemFav));
  };

  const USUARIOAESCUCHAR = useSelector((state) => state.user);
  const isFavorite = USUARIOAESCUCHAR.email
    ? USUARIOAESCUCHAR.favorites.some((favorite) => favorite.id === props.id)
    : null;

  return (
    <Box
      bgGradient="linear-gradient(to right, #f27825, #eab830)"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      maxW="sm"
      position="relative"
    >
      <Link to={`/itemdetail/${props.id}`}>
        <Image
          src={props.image}
          alt={props.name}
          w="full"
          h="300px"
          objectFit="cover"
        />
      </Link>
      <Grid templateColumns="1fr" templateRows="1fr 50px" p="4">
        <Flex direction="row" justify="space-between" my="5px">
          <Text fontSize="lg" fontWeight="semibold" color="white">
            {props.name}
          </Text>
          {
            <IconButton
              icon={isFavorite ? <AiFillHeart /> : <AiOutlineHeart />}
              bg="transparent"
              class="favorite-button"
              zIndex="1"
              bottom="0.5rem"
              fontSize="3xl"
              onClick={handleClickFavorite}
            />
          }
        </Flex>
        <Flex direction="row" justify="space-between">
          <Text fontSize="lg" fontWeight="semibold" color="white">
            ⭐ {props.rating}
          </Text>
          <Select w="5rem" value={quantity} onChange={handleInputChange}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </Select>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="2xl" fontWeight="bold" color="#272727" mr="2">
            ${props.price}
          </Text>

          <Button
            id="addcart"
            isDisabled={found.length ? true : false}
            colorScheme="red"
            onClick={handleAddToCart}
          >
            Add to cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default ItemCard;
