import { Box, Grid, GridItem, Text, Image, Flex, Button } from "@chakra-ui/react";
import { useAuthProv } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import {  useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserById } from "../../redux/actions";


const UserHistory = () => {

  const dispatch = useDispatch();
  const user1 = useSelector((state) => state.user);
  const { user } = useAuthProv();



  useEffect(() => {
    dispatch(getUserById(user.id));
  }, []);
  
  
  const prevPurchase = user1.previusPurchase;




  return (
      <Box minHeight='100vh' bgGradient="linear(to-l,#000000, #272727)" p="4">


        {
          prevPurchase?.length > 0 ? (
          <Grid templateColumns="repeat(4, 1fr)" gap="4">
            {
              prevPurchase.map((item) => (
                <GridItem key={item.id} >
                  <Box borderRadius="lg" color='#fff' border='1px solid' h='14.6rem' p="4">
                    <Box >
                      <Image src={item.image} alt={item.name} h='5rem' w='100%' objectFit='cover' borderRadius='4px' />
                    </Box>
                    <Flex justifyContent='space-between' m='.8rem 0'  >
                      <Text fontSize="lg" fontWeight="bold" >{item.name}</Text>
                      <Text mb="2">${item.price}</Text>
                    </Flex>
                      
                    <Link to={`/profile/history/${item.id}`}><Button colorScheme="orange" >View details</Button></Link>
                  </Box>
                </GridItem>
              ))
            }
          </Grid>
          ) : ( <Box mt='4rem' fontFamily="sans-serif" fontSize="xl" color='#fff' ><Text textAlign='center' >No previus purchase 😕</Text></Box> )
        }
      </Box>
  );
};

export default UserHistory;
