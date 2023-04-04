import {
  Box,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Checkbox,
  Card, 
  CardHeader, 
  CardBody, 
  Stack,
  Flex,
  StackDivider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Textarea,
  Input,
} from "@chakra-ui/react";
import { useState } from "react";
import { useAuthProv } from "../../context/AuthProvider";
import axios from "axios";
// import UpdateAddressForm from "./Updates/UpdateAdress";


const UserSettings = () => {

  const { user } = useAuthProv();
  const [notificationsByEmail, setNotificationsByEmail] = useState(false);
  const [isUpdateAddressFormVisible, setIsUpdateAddressFormVisible] = useState(false);
  const [form, setForm] = useState({ country: '', city: '', address: '', postalCode: '' });

  const toggleUpdateAddressForm = () => {
    setIsUpdateAddressFormVisible(!isUpdateAddressFormVisible);
  };


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const updateLocation = async () => {
    const { data } = await axios.put('/users/location', { location: { ...form }, userId: user.id });
  };



  return (
    <>
        <Card minHeight='36rem' h='100%' w='26%' m='0 auto' bg='#272727' >
          <CardHeader>
            <Heading size='lg' color='#fff' >Preference settings</Heading>
          </CardHeader>

          <CardBody>
          <Accordion bg='#fff' h='100%' w='100%' m='0 auto' borderRadius='10px' allowMultiple >
          <AccordionItem borderRadius='10px' >
              <AccordionButton>
                <Text fontSize='1.2rem' fontWeight='bold' flex='1' textAlign='left'>Location</Text>
                <AccordionIcon />
              </AccordionButton>               
            <AccordionPanel pb={4}>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input h='2rem' type='text' name='country' onChange={handleInputChange} />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input h='2rem' type='text' name='city' onChange={handleInputChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input h='2rem' type='text' name='address' onChange={handleInputChange} />
              </FormControl>
              <FormControl>
                <FormLabel>Postal code</FormLabel>
                <Input h='2rem' type='number' name='postalCode' onChange={handleInputChange} />
                <Button onClick={updateLocation} mt='1rem' >Update</Button>
              </FormControl>
            </AccordionPanel>
          </AccordionItem>

          {/* <AccordionItem borderRadius='10px' >
              <AccordionButton>
                <Text fontSize='1.2rem' fontWeight='bold' flex='1' textAlign='left'>Payment method</Text>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb='4px' >
              <FormControl display='flex' flexDir='column' >
                <Checkbox id="promotions" >Debit</Checkbox>
                <Checkbox id="promotions" >Credit card</Checkbox>
                <Checkbox id="notifications" >Cash</Checkbox>
              </FormControl>
              <Text fontSize='1rem' color='#8b8b8b' cursor='pointer' mt='.4rem' p='0' >Add card</Text>
            </AccordionPanel>
          </AccordionItem> */}
          
          {/* <AccordionItem borderRadius='10px' >
              <AccordionButton>
                <Text fontSize='1.2rem' fontWeight='bold' flex='1' textAlign='left'>Notifications</Text>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4}>
            <FormControl >
              <Checkbox id="notifications" >Receive notifications by email</Checkbox>
              <Checkbox id="promotions" >Receive promotions by email</Checkbox>
            </FormControl>
              </AccordionPanel>
          </AccordionItem> */}

          {/* <AccordionItem borderRadius='10px' >
              <AccordionButton>
                <Text fontSize='1.2rem' fontWeight='bold' flex='1' textAlign='left'>Dietary</Text>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
              commodo consequat.
            </AccordionPanel>
          </AccordionItem> */}
{/* 
          <AccordionItem borderRadius='10px' >
              <AccordionButton>
                <Text fontSize='1.2rem' fontWeight='bold' flex='1' textAlign='left'>Comments and suggestions</Text>
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4}><Text mb='1rem' >If you have comments or suggestions for us, please let us know.</Text>
            <Textarea border='1px solid #bcbcbc' ></Textarea>
            </AccordionPanel>
          </AccordionItem> */}

        </Accordion>
          </CardBody>
          <Flex w='100%' justifyContent='center' pb='.8rem' >
            <Text fontSize='.8rem' color='#aaa' >For support contact support@mix2pizza.app</Text>
          </Flex>            
        </Card>


     
      {/* <Box className="profile">
        <Heading as="h1" size="lg">
          Settings
        </Heading>
        <Heading as="h2" size="md" marginTop="4">
          Address
        </Heading>
        <Text>
          {user.address}
          <Button
            size="sm"
            colorScheme="teal"
            onClick={toggleUpdateAddressForm}
          >
            Update
          </Button>
        </Text>
        {isUpdateAddressFormVisible && <UpdateAddressForm />}
        
        <Heading as="h2" size="md" marginTop="4">
          Payment method
        </Heading>
        <Text>
          {user.Payment}
          <Button size="sm" colorScheme="teal">
            Update
          </Button>
        </Text>

        <FormControl as="h2" size="md" marginTop="4">
          <FormLabel htmlFor="notifications-by-email">
            Receive notifications by email
          </FormLabel>
          <Checkbox
            id="notifications-by-email"
            isChecked={notificationsByEmail}
            onChange={(e) => setNotificationsByEmail(e.target.checked)}
          />
        </FormControl>
      </Box> */}
    </>
  );
};

export default UserSettings;
