import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { pushToCart } from "../../redux/actions";

const Drinks = (props) => {
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    dispatch(pushToCart(props));
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
        <Text fontSize="lg" fontWeight="semibold" color="white">
          {props.name}
        </Text>
        <Flex direction="row" justify='space-between'>
          <Text fontSize="lg" fontWeight="semibold" color="white" pt="10px">
            ⭐ {props.rating}
          </Text>
          <Text fontSize="lg" fontWeight="semibold" color="white" pt="10px">
            Stock: {props.stock}
          </Text>
        </Flex>
        <Flex justifyContent="space-between" alignItems="center">
          <Text fontSize="2xl" fontWeight="bold" color="#272727" mr="2">
            ${props.price}
          </Text>
          <Button isDisabled={props.stock === 0 ? true : false} colorScheme="red" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Drinks;
