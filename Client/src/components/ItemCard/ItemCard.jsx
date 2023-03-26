import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Flex, Grid, Image, Text, Select } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { pushToCart } from "../../redux/actions";
import { useEffect, useState } from "react";

const ItemCard = (props) => {

  const cart = useSelector(state => state.cart)
  const found = cart.filter(item => item.id === props.id)

  const[quantity , setQuantity] = useState(1)
  const itemCart = {...props , quantity: parseInt(quantity)}

  const handleInputChange = (e) => {
    const { value } = e.target;
    setQuantity(value)
  }

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(pushToCart(itemCart));
  };

  return (
    <Box
      bgGradient="linear-gradient(to right, #f27825, #eab830)"
      borderRadius="md"
      boxShadow="md"
      overflow="hidden"
      maxW="sm"
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
        <Flex direction="row" justify="space-between" m='10px'>
          <Text fontSize="lg" fontWeight="semibold" color="white">
            {props.name}
          </Text>
          <Text fontSize="lg" fontWeight="semibold" color="white">
            Stock: {props.stock}
          </Text>
        </Flex>
        <Flex direction="row" justify="space-between" >
          <Text fontSize="lg" fontWeight="semibold" color="white" >
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
            isDisabled={ found.length ? true : false }
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
