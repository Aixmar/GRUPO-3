import axios from 'axios'
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
    FormHelperText,
    // Modal,
    // ModalOverlay,
    // ModalContent,
    // ModalHeader,
    // ModalFooter,
    // ModalBody,
    // ModalCloseButton,
  } from "@chakra-ui/react";

const ForgottenPassword = () =>{
    const [userEmail,setUserEmail] = useState({email: ""})
    const [err,setErr] = useState('')
    const [success,setSuccess] = useState('')
    
    const goToMenuHandler = () => {
        const modal = document.querySelector("#forgot");
        modal.close();
        onClose();
      };

    const emailHandler = (e) =>{
        setUserEmail({
            email : e.target.value
        })
    }
    const handleSubmit = async(e) =>{
        e.preventDefault();
        console.log(userEmail);
        await axios.post("users/forgotPassword", userEmail)
        .then(res => {
            const modal = document.querySelector("#forgot");
            modal.showModal();
        })
        .catch(err => setErr(err.response.data.error))
    }

    return (
        <Box>
      <Stack
        bgGradient="linear-gradient(to right, #f27825, #eab830)"
        color="white"
        borderRadius="md"
        w="333px"
        padding="8"
        // spacing="6"
        as="form"
        onSubmit={handleSubmit}
      >
        {err !== '' &&  <p>{err}</p> }
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            bg="#272727"
            type="email"
            name="email"
            value={userEmail.email}
            onChange={emailHandler}
            placeholder="example@example.com"
          />
        </FormControl>
        <Button
          type="submit"
          // bg={"orange.400"}
          fontSize={"1.6rem"}
          bg="white"
          w="full"
          h="3rem"
          color={"#4e4e4e"}
          _hover={{ bg: "#F3E8E6" }}
          
        >
          Enviar mail
        </Button>

        <dialog id="forgot" >
          
          <h2>An email was sent to you</h2>
          <div>
            <Link to="/allpizzas">
              <button
                m="1rem 0"
                p="1.6rem 2rem 1.6rem"
                fontSize="1.6rem"
                bg={"orange.400"}
                color={"white"}
                _hover={{ bg: "orange.500" }}
                onClick={goToMenuHandler}
              >
                Go to menu
              </button>
            </Link>
          </div>
        </dialog>
      </Stack>
    </Box>
    )
}

export default ForgottenPassword


