import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux"
import { pushToCart } from "../../redux/actions";
import { Button, Box, Image, Text } from "@chakra-ui/react";
import axios from "axios";
import css from './ItemDetail.module.css';


const ItemDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  const [pizza, setPizza] = useState({});

  const clickHandler = () => {
    const modal = document.querySelector('#createPizzaModal');
    dispatch(pushToCart(pizza))
    modal.showModal();
  }
  const clickHandlerModal = () => {
    const modal = document.querySelector('#createPizzaModal');
    modal.close()
  }
  useEffect(() => {
    axios
      .get(`http://localhost:3001/pizzas/${id}`)
      .then((data) => data.data)
      .then((pizza) => setPizza(pizza));

      window.scrollTo(0, 0);
      document.querySelector('body').classList.add(css.disableScroll);
      return () => document.querySelector('body').classList.remove(css.disableScroll);
  }, []);
  console.log('pizza------->', pizza)

// console.log('HOLA SOY LOS TOPPINGS', pizza.detail.toppingIngredients)

  return (
    <Box display="flex" justifyContent="center" alignItems='start' width="100%" height="100vh"bgGradient="linear(to-l,#000000, #272727)">
    <Box display='flex' borderWidth="1px" borderRadius="lg" width="100%" margin='2rem 4rem 0' boxShadow="0 0 20px rgba(0, 0, 0, 0.1)" height='80vh' >
      <Image src={pizza.image} alt={pizza.name}  borderTopRightRadius='8px' borderTopLeftRadius='8px' h='auto' w="100%" objectFit='cover' />
      <Box p="6" bgGradient="linear(to-l,#000000, #272727)" borderBottomRightRadius='8px' borderBottomLeftRadius='8px' width='100%' >
        <Box d="flex" alignItems="baseline" >
          <Text fontSize="3.2rem" fontWeight="semibold" color="white" mb='2rem' >{pizza.name}</Text>

  
          { pizza.category === "pizza" && <Text fontSize="1.2rem" fontWeight="semibold" color="white"><Text color='#f27825' display='inline' >Dough:</Text> {pizza?.detail?.dough}</Text>}
          { pizza.category === "pizza" && <Text fontSize="1.2rem" fontWeight="semibold" color="white"><Text color='#f27825' display='inline' >Base:</Text> {pizza?.detail?.base}</Text>}
          { pizza.category !== "pizza" && <Text fontSize="1.2rem" fontWeight="semibold" color="white"><Text color='#f27825' display='inline' >Description:</Text> {pizza?.detail?.description}</Text>}
          { pizza.category === "pizza" && <Text fontSize="1.2rem" fontWeight="semibold" color="white"><Text color='#f27825' display='inline' >Mozzarella:</Text> {pizza?.detail?.mozzarella}</Text>}     
          { pizza.category === "pizza" && pizza.detail.meatIngredients.length !== 0 && <Text fontSize="1.2rem" fontWeight="semibold" color="white"><Text color='#f27825' display='inline' >Meat ingredients:</Text> {pizza?.detail?.meatIngredients?.join(', ')}</Text>} 
          { pizza.category === "pizza" && pizza.detail.cheeseIngredients.length !== 0 && <Text fontSize="1.2rem" fontWeight="semibold" color="white"><Text color='#f27825' display='inline' >Cheese ingredients:</Text> {pizza?.detail?.cheeseIngredients?.join(', ')}</Text>}
          { pizza.category === "pizza" && pizza.detail.toppingIngredients.length !== 0 && <Text fontSize="1.2rem" fontWeight="semibold" color="white" mb='1rem' ><Text color='#f27825' display='inline' >Topping ingredients:</Text> {pizza?.detail?.toppingIngredients?.join(', ')}</Text>}
         
        </Box>

        <Box width='100%'>
          <Text fontSize="4rem" color="white">$ {pizza.price}</Text>
          <Link to='/allpizzas'><Button variantcolor="teal"
            borderRadius="full"
            padding="10px"
            background="linear-gradient(to right, #f27833, #eab830)" >Back to menu</Button>
          </Link>
          <Button
            isDisabled={pizza.stock === 0 ? true : false}
            onClick={clickHandler}
            variantcolor="orange"
            borderRadius="full"
            padding="10px"
            margin="10px"
            background="linear-gradient(to right, #f27833, #eab830)"
          >Add to cart</Button>
        </Box>
      </Box>

      <dialog className={css.modalAddToCart} id='createPizzaModal' >
        <h2>Pizza added to cart successfully!</h2>
        <div >
          <Link to='/allpizzas' ><Button fontSize={'1.4rem'} width={'90%'} p={'1.6rem'} margin={'1.2rem 0 .8rem 0'} background="linear-gradient(to right, #f27833, #eab830)" >Continue buying</Button></Link>
          <Link to='/cart' ><Button fontSize={'1.4rem'} width={'90%'} p={'1.6rem'} margin={'1.2rem 0 .8rem 0'} background="linear-gradient(to right, #f27833, #eab830)" >Go to cart</Button></Link>
        </div>
      </dialog>
    </Box>
    </Box>
  );
};

export default ItemDetail;