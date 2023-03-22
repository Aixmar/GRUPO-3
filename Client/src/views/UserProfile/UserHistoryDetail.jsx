import { useState } from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Input,
} from "@chakra-ui/react";
import UserProfile from "./UserProfile";
import user from "./json";
import Star from "./Review";

const UserHistoryDetail = () => {
  const [emailNotification, setEmailNotification] = useState(false);

  const handleEmailNotificationChange = (event) => {
    setEmailNotification(event.target.checked);
  };

  return (
    <div>
      <UserProfile />
      <Box p="6" bg="gray.50" rounded="md">
        <Heading as="h3" size="lg" mb="4">
          {user[0].Orders.name}
        </Heading>
        <Box display="flex" alignItems="center" mb="4">
          <Box w="48px" h="48px" mr="4">
            <img src={user[0].Orders.image} alt={user[0].Orders.name} />
          </Box>
          <Box>
            <Text>Price: ${user[0].Orders.price}</Text>
          </Box>
        </Box>
        <Box>
          <Heading as="h4" size="md" mb="2">
            Ingredients
          </Heading>

          <Box>
            <FormControl>
              <FormLabel>Dough</FormLabel>
              <Text>{user[0].Orders.detail.dough}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Type</FormLabel>
              <Text>{user[0].Orders.detail.type}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Base</FormLabel>
              <Text>{user[0].Orders.detail.base}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Mozzarella</FormLabel>
              <Text>{user[0].Orders.detail.mozzarella}</Text>
            </FormControl>
            <FormControl>
              <FormLabel>Toppings</FormLabel>
              {user[0].Orders.detail.toppingIngredients.map((ingredient) => (
                <Text key={ingredient}>{ingredient}</Text>
              ))}
            </FormControl>
            <FormControl>
              <FormLabel>Cheeses</FormLabel>
              {user[0].Orders.detail.cheeseIngredients.map((ingredient) => (
                <Text key={ingredient}>{ingredient}</Text>
              ))}
            </FormControl>
            <FormControl>
              <FormLabel>Meats</FormLabel>
              {user[0].Orders.detail.meatIngredients.map((ingredient) => (
                <Text key={ingredient}>{ingredient}</Text>
              ))}
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Star />
    </div>
  );
};

export default UserHistoryDetail;
