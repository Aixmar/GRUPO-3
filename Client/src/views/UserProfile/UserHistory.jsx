import UserNavBar from "./UserNavBar";
import { Box, Grid, GridItem, Text, Link } from "@chakra-ui/react";
import user from "./json";
import { useAuthProv } from "../../context/AuthProvider";
const UserHistory = () => {
  // const { user } = useAuthProv();
  return (
    <div>
      <UserNavBar />
      <Box mt="4">
        <Text fontSize="xl" fontWeight="bold" mb="4">
          Purchase History
        </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap="4">
          {user.map((user) => (
            <GridItem key={user.Orders.id}>
              <Box borderWidth="1px" borderRadius="lg" p="4">
                <Box w="48px" h="48px" mr="4">
                  <img src={user.Orders.image} alt={user.Orders.name} />
                </Box>
                <Text fontSize="lg" fontWeight="bold" mb="2">
                  {user.Orders.name}
                </Text>
                <Text mb="2">{user.Orders.date}</Text>
                <Text fontSize="sm" mb="2">
                  Total: {user.Orders.price}
                </Text>
                <Text fontSize="sm" mb="2">
                  Status: {user.Orders.status}
                </Text>
                <Box textAlign="right">
                  <Link href={`/profile/history/${user.Orders.id}`}>
                    View details
                  </Link>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default UserHistory;
