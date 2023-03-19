import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { pushToCart } from "../../redux/actions";
import { Button, Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";

const SideDetail = () => {

    const { id } = useParams();
    const dispatch = useDispatch()
    const [side, setSide] = useState({})

    const clickHandler = () => {
        const modal = document.querySelector('#addSideModal');
        dispatch(pushToCart(side))
        modal.showModal();
      }
    //   const clickHandlerModal = () => {
    //     const modal = document.querySelector('#createPizzaModal');
    //     modal.close()
    //   }

    useEffect(() => {
        axios
            .get(`http://localhost:3001/pizzas/${id}`)
            .then((data) => data.data)
            .then((side) => setSide(side));
    }, []);

    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="1366px" height="768px" bgGradient="linear-gradient(to right, #f27825, #eab830)">
        <Box maxW="xl" borderWidth="1px" borderRadius="lg" overflow="hidden" boxShadow="0 0 20px rgba(0, 0, 0, 0.1)" >
          <Image src={side.image} alt={side.name} objectFit="cover" h="300px" w="100%" />
          <Box p="6" bgGradient="linear(to-l,#000000, #272727)">
            <Box d="flex" alignItems="baseline" >
              <Text fontSize="2xl" fontWeight="semibold" mr="2" color="white">{side.name}</Text>
              <Text fontSize="lg" color="white">$ {side.price}</Text>
            </Box>
            <Box mt="2" lineHeight="tall">
              <Text fontSize="lg">{side.description}</Text>
            </Box>
            <Box mt="2" d="flex" justifyContent="space-between" alignItems="center">
              <Link to='/allsides'><Button variantColor="teal"
                borderRadius="full"
                padding="10px"
                background="linear-gradient(to right, #f27833, #eab830)" >Back to menu</Button>
              </Link>
              <Button
                onClick={clickHandler}
                variantColor="orange"
                borderRadius="full"
                padding="10px"
                margin="10px"
                background="linear-gradient(to right, #f27833, #eab830)"
              >Add to cart</Button>
            </Box>
          </Box>
          <dialog id='addSideModal' >
            <h2>Side added succesfully!</h2>
            <div >
              <Link to='/allsides' ><Button variantColor="teal" fontSize={'2rem'} width={'90%'} p={'1.6rem'} margin={'1.2rem 0 .8rem 0'} >Continue buying</Button></Link>
              <Link to='/cart' ><Button variantColor="orange" fontSize={'2rem'} width={'90%'} p={'1.6rem'} margin={'1.2rem 0 .8rem 0'} >Go to cart</Button></Link>
            </div>
          </dialog>
        </Box>
        </Box>
      );
}

export default SideDetail