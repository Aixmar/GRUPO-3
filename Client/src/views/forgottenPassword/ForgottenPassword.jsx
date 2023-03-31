import axios from 'axios'
import { useEffect, useState } from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,

    FormHelperText,
    Text,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Image } from "@chakra-ui/react";
  import { ok } from "../../assets/CloudinaryImg";



const ForgottenPassword = () =>{

    const [userEmail,setUserEmail] = useState({email: ""})
    const [err,setErr] = useState('')
    const [success,setSuccess] = useState('')
    const [isOpen, setIsOpen] = useState(false);

 
  
    const emailHandler = (e) =>{
        setUserEmail({
            email : e.target.value
        })
    }


    const handleClose = () => setModalAddtocart(false);


    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(userEmail);
        await axios.post("users/forgotPassword", userEmail)
        .then(res => {
            // const modal = document.querySelector("#forgot");
            // modal.showModal();
            setIsOpen(true);
        })
        .catch(err => setErr(err.response.data.error))
    }



    return (
        <Box bgGradient="linear-gradient(to right, #f27825, #eab830)" h='100vh' >
      <Stack
        // bgGradient="linear-gradient(to right, #f27825, #eab830)"
        m='auto'
        color="white"
        borderRadius="md"
        w="40rem"
        padding="8"
        // spacing="6"
        as="form"
        onSubmit={handleSubmit}
      >
        <Text fontSize='2rem' >Forgot your password?</Text>
        <FormControl isRequired>
          <FormLabel fontSize='1.2rem' >Enter your email</FormLabel>
          <Input
            bg="#272727"
            type="email"
            name="email"
            value={userEmail.email}
            onChange={emailHandler}
            placeholder="example@example.com"
            fontSize='1.4rem'
            h='4rem'
            mb='.2rem'
            />
        </FormControl>
        <Button
          type="submit"
          // bg={"orange.400"}
          fontSize={"1.6rem"}
          bg="white"
          w="full"
          h="4rem"
          color={"#4e4e4e"}
          _hover={{ bg: "#F3E8E6" }}
          
        >
          Recover password
        </Button>
          {err !== '' &&  <Text color='red' fontSize='1.2rem' fontWeight='bold' >{err}</Text> }


        <Modal isOpen={isOpen} onClose={handleClose} size='xl' >
          <ModalOverlay backdropFilter='blur(6px)' bg='#000000b6' />
          <ModalContent margin='auto' >
          <ModalCloseButton/>
            <Image src={ok} alt="ok" h='2.8rem' objectFit='contain' mt='1rem' mb='0' />
            <ModalHeader textAlign='center' fontSize='1.8rem' p='0' >An email was sent to <Text fontWeight='bold' >{userEmail.email}</Text></ModalHeader>
            <ModalBody textAlign='center' fontSize='1.4rem' >
            <Text>Check your mailbox, and don't forget to review span</Text>
            </ModalBody>
            <ModalFooter display='flex' justifyContent='center' p='0' mb='.4rem' >
              <Link to='/home' ><Button mb='.6rem' fontSize='1.4rem' bg={"orange.400"} color={"white"} _hover={{ bg: "orange.500" }} onClick={handleClose} >Back home</Button></Link>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </Stack>
    </Box>
    )
}

export default ForgottenPassword


