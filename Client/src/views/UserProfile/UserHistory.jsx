import UserNavBar from "./UserNavBar";
import { Box, Grid, GridItem, Text, Link } from "@chakra-ui/react";
// import { useAuthProv } from "../../context/AuthProvider";
import {  useSelector } from "react-redux";


const UserHistory = () => {

  // const dispatch = useDispatch();
  // const { user } = useAuthProv();
  
  const user1 = useSelector((state) => state.user);
  
  const prevPurchase = user1.previusPurchase;




  return (
    <div>
   
      <UserNavBar />
  
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Purchase History
        </Text>

        <Box borderWidth="1px" borderRadius="lg" p="4">

        <Grid templateColumns="repeat(3, 1fr)" gap="4">
  {prevPurchase?.length > 0 ? (
    prevPurchase.map((item) => (
      <GridItem key={item.id}>
        <Box borderWidth="1px" borderRadius="lg" p="4">
          <Box w="48px" h="48px" mr="4">
            <img src={item.image} alt={item.name} />
          </Box>
          <Text fontSize="lg" fontWeight="bold" mb="2">
            {item.name}
          </Text>
          <Text mb="2">${item.price}</Text>
          <Link href={`/profile/history/${item.id}`}>View details</Link>
        </Box>
      </GridItem>
    ))
  ) : (
    <Box p="4">No previus purchase</Box>
  )}
</Grid>
           </Box>
        </div>
  );
};

export default UserHistory;
