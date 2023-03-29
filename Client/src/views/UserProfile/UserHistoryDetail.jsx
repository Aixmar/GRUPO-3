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
import UserNavBar from "./UserNavBar";
import user from "./json";
import Review from "./Review";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import { getItemDetail } from "../../redux/actions";


const UserHistoryDetail = () => {
  ///////////////////NO TOCO ESTO////////////////////////////////////
  const [emailNotification, setEmailNotification] = useState(false);

  const handleEmailNotificationChange = (event) => {
    setEmailNotification(event.target.checked);
  };
  ///////////////////////////////////////////////////////////////////
  const { id } = useParams()
  const dispatch = useDispatch()
  // const [item, setItem] = useState({})
  const item = useSelector((state) => state.itemDetail)

  useEffect(() => {
    dispatch(getItemDetail(id))
  }, [])

  return (
    <div>
      <UserNavBar />
      <Box p="6" bg="gray.50" rounded="md">
        <Heading as="h3" size="lg" mb="4">
          {item.name}
        </Heading>
        <Box display="flex" alignItems="center" mb="4">
          <Box w="48px" h="48px" mr="4">
            <img src={item.image} alt={item.name} />
          </Box>
          <Box>
            <Text>Price: ${item.price}</Text>
          </Box>
        </Box>
        {item.category === 'pizza' ? 
        <Box>
        <Heading as="h4" size="md" mb="2">
          Ingredients
        </Heading>

        <Box>
          <FormControl>
            <FormLabel>Dough</FormLabel>
            <Text>{item?.detail?.dough}</Text>
          </FormControl>
          <FormControl>
            <FormLabel>Type</FormLabel>
            <Text>{item?.detail?.type}</Text>
          </FormControl>
          <FormControl>
            <FormLabel>Base</FormLabel>
            <Text>{item?.detail?.base}</Text>
          </FormControl>
          <FormControl>
            <FormLabel>Mozzarella</FormLabel>
            <Text>{item?.detail?.mozzarella}</Text>
          </FormControl>
          <FormControl>
            <FormLabel>Toppings</FormLabel>
            {item?.detail?.toppingIngredients?.map((ingredient) => (
              <Text key={ingredient}>{ingredient}</Text>
            ))}
          </FormControl>
          <FormControl>
            <FormLabel>Cheeses</FormLabel>
            {item?.detail?.cheeseIngredients?.map((ingredient) => (
              <Text key={ingredient}>{ingredient}</Text>
            ))}
          </FormControl>
          <FormControl>
            <FormLabel>Meats</FormLabel>
            {item?.detail?.meatIngredients?.map((ingredient) => (
              <Text key={ingredient}>{ingredient}</Text>
            ))}
          </FormControl>
        </Box>
      </Box>
        : item.category === 'drinks' ?
        <Box>
        <Box>
          <FormControl>
            <FormLabel>Sugar</FormLabel>
            <Text>{item?.detail?.onSugar}</Text>
          </FormControl>
          <FormControl>
            <FormLabel>Volumen</FormLabel>
            <Text>{item?.detail?.volumen}</Text>
          </FormControl>
          <FormControl>
            <FormLabel>Description</FormLabel>
            <Text>{item?.detail?.description}</Text>
          </FormControl>
        </Box>
      </Box>
      : <Box>
      <Heading as="h4" size="md" mb="2">
        Ingredients
      </Heading>

      <Box>
        <FormControl>
          <FormLabel>Calories</FormLabel>
          <Text>{item?.detail?.calories}</Text>
        </FormControl>
        <FormControl>
          <FormLabel>Fat</FormLabel>
          <Text>{item?.detail?.fat}</Text>
        </FormControl>
        <FormControl>
          <FormLabel>Carbs</FormLabel>
          <Text>{item?.detail?.carbs}</Text>
        </FormControl>
        <FormControl>
          <FormLabel>Protein</FormLabel>
          <Text>{item?.detail?.protein}</Text>
        </FormControl>
        <FormControl>
          <FormLabel>Description</FormLabel>
          <Text>{item?.detail?.description}</Text>
        </FormControl>
      </Box>
    </Box>} 
      </Box>
      <Review/>
    </div>
  );
};

export default UserHistoryDetail;
