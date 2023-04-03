import {
  Box,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Textarea,
  Input,
  Image,
  Flex,
} from "@chakra-ui/react";
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
    <Box minHeight="100vh" bgGradient="linear(to-l,#000000, #272727)" >
  
      <Box p='1rem' rounded="md" w='100%' color='#fff' display='flex' >
        <Flex flexDir='column' rounded="md" w='46%' color='#fff' ml='1rem' >

          <Heading display='flex' as="h3" size='lg' mb="4" justifyContent='space-between' alignItems='flex-end' >{item.name} <Text fontSize='1rem' >Price: ${item.price}</Text></Heading>
          <Flex alignItems="center" mb="4">
            <Box w='100%' >
              <Image src={item.image} alt={item.name} h='17.4rem' w='100%' objectFit='cover' borderRadius='4px' />
            </Box>
          </Flex>

        </Flex>
        {item.category === 'pizza' ? 

        <Box w='54%' h='auto' pl='10px' m='0 1rem' >
          <Heading as="h3" size="lg" mb="4" >Ingredients</Heading>

          <Box  >
            <Flex p='1rem' border='1px solid #aaa' borderRadius='4px' textAlign='center' h='7rem' >         
              <FormControl>
                <FormLabel color='#f27825' textAlign='center' fontWeight='bold' borderBottom='1px solid #454545' pb='8px' >Dough</FormLabel>
                <Text>{item?.detail?.dough}</Text>
              </FormControl>
              <FormControl>
                <FormLabel color='#f27825' textAlign='center' fontWeight='bold'  borderBottom='1px solid #454545' pb='8px' >Type</FormLabel>
                <Text>{item?.detail?.type}</Text>
              </FormControl>
              <FormControl>
                <FormLabel color='#f27825' textAlign='center' fontWeight='bold'  borderBottom='1px solid #454545' pb='8px' >Base</FormLabel>
                <Text>{item?.detail?.base}</Text>
              </FormControl>
              <FormControl>
                <FormLabel color='#f27825' textAlign='center' fontWeight='bold'  borderBottom='1px solid #454545' pb='8px' >Mozzarella</FormLabel>
                <Text>{item?.detail?.mozzarella}</Text>
              </FormControl>
            </Flex>
            <Flex p='1rem' border='1px solid #aaa' borderRadius='4px' mt='2rem' textAlign='center' h='8.4rem' >          
              <FormControl >
                <FormLabel color='#f27825' textAlign='center' fontWeight='bold' borderBottom='1px solid #454545' pb='8px' >Toppings</FormLabel>
                {item?.detail?.toppingIngredients?.map((ingredient) => (
                  <Text key={ingredient}>{ingredient}</Text>
                ))}
              </FormControl>
              <FormControl>
                <FormLabel color='#f27825' textAlign='center' fontWeight='bold' borderBottom='1px solid #454545' pb='8px' >Cheeses</FormLabel>
                {item?.detail?.cheeseIngredients?.map((ingredient) => (
                  <Text key={ingredient}>{ingredient}</Text>
                ))}
              </FormControl>
              <FormControl>
                <FormLabel color='#f27825' textAlign='center' fontWeight='bold' borderBottom='1px solid #454545' pb='8px' >Meats</FormLabel>
                {item?.detail?.meatIngredients?.map((ingredient) => (
                  <Text key={ingredient}>{ingredient}</Text>
                ))}
              </FormControl>
            </Flex>
          </Box>
        </Box>

        : item.category === 'drinks' ?

        <Box w='54%' h='17.4rem' pl='10px' m='3.2rem 1rem 0' border='1px solid #aaa' borderRadius='4px' textAlign='center'  >
          <Flex h='7rem' >
            <FormControl>
              <FormLabel color='#f27825' textAlign='center' fontWeight='bold' borderBottom='1px solid #454545' p='8px 0' >Sugar</FormLabel>
              <Text>{item?.detail?.onSugar}</Text>
            </FormControl>
            <FormControl>
              <FormLabel color='#f27825' textAlign='center' fontWeight='bold' borderBottom='1px solid #454545' p='8px 0' >Volumen</FormLabel>
              <Text>{item?.detail?.volumen}</Text>
            </FormControl>
          </Flex>
          <Flex h='8.4rem' mt='.6rem' >
            <FormControl>
              <FormLabel color='#f27825' textAlign='center' fontWeight='bold' borderBottom='1px solid #454545' p='8px 0' >Description</FormLabel>
              <Text>{item?.detail?.description}</Text>
            </FormControl>
          </Flex>
        </Box>

      : 
      
        <Box w='54%' h='17.4rem' pl='10px' m='3.2rem 1rem 0' border='1px solid #aaa' borderRadius='4px' textAlign='center' >
          <Flex h='7rem' >
            <FormControl>
              <FormLabel color='#f27825' textAlign='center' fontWeight='bold' borderBottom='1px solid #454545' p='8px 0' >Calories</FormLabel>
              <Text>{item?.detail?.calories}</Text>
            </FormControl>
            <FormControl>
              <FormLabel color='#f27825' textAlign='center' fontWeight='bold' borderBottom='1px solid #454545' p='8px 0' >Fat</FormLabel>
              <Text>{item?.detail?.fat}</Text>
            </FormControl>
            <FormControl>
              <FormLabel color='#f27825' textAlign='center' fontWeight='bold' borderBottom='1px solid #454545' p='8px 0' >Carbs</FormLabel>
              <Text>{item?.detail?.carbs}</Text>
            </FormControl>
          </Flex>
          <Flex h='8.4rem' mt='.6rem' >            
            <FormControl>
              <FormLabel color='#f27825' textAlign='center' fontWeight='bold' borderBottom='1px solid #454545' p='8px 0' >Protein</FormLabel>
              <Text>{item?.detail?.protein}</Text>
            </FormControl>
            <FormControl>
              <FormLabel color='#f27825' textAlign='center' fontWeight='bold' borderBottom='1px solid #454545' p='8px 0' >Description</FormLabel>
              <Text>{item?.detail?.description}</Text>
            </FormControl>
          </Flex>
        </Box>
      }

    </Box>
      <Review/>
    </Box>
  );
};

export default UserHistoryDetail;
