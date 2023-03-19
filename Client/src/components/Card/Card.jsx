import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { Button } from "@chakra-ui/button";
import { pushToCart } from "../../redux/actions";

const Card = (props) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(pushToCart(props));
  };

  return (

    <div className={styles.container}>
      <Link to={`/itemdetail/${props.id}`}>
        <div >
          <h1>{props.name}</h1>
          <img src={props.image} alt="" className={styles.image}></img>
          <h1>${props.price}</h1>
        </div>
      </Link>
      <Grid templateColumns="1fr" templateRows="1fr 50px" p="4">
        <Text fontSize="lg" fontWeight="semibold" color="white">
          {props.name}
        </Text>
        <Flex justifyContent="space-between" alignItems="center" pt="10px">
          <Text fontSize="2xl" fontWeight="bold" color="#272727" mr="2">
            ${props.price}
          </Text>
          <Button colorScheme="red" onClick={handleAddToCart}>
            Add to cart
          </Button>
        </Flex>
      </Grid>
    </Box>
  );
};

export default Card;
