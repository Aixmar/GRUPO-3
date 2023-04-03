import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  FormHelperText,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image,
  Text
} from "@chakra-ui/react";

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validate from "./validate";
import { ok } from "../../assets/CloudinaryImg";
import { useAuthProv } from "../../context/AuthProvider";

const UserForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    birthday: "",
    email: "",
    password: "",
    confirmPassword:"",
    cart: [],
    rol:'user',
    previusPurchase: [],
    favorites: [],
  });
  const [errors, setErrors] = useState({});
  const [backResponse, setBackResponse] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailRegistered,setEmailRegistered] = useState('')
  const navigate = useNavigate();
  const { setUser, loginWithGoogle } = useAuthProv();
  const [ isOpen, setIsOpen ] = useState(false);



  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;
    setIsSubmitting(!form.email || !form.password || hasErrors);
  }, [form, errors]);


  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors(validate({ ...form, [name]: value }));
  };


  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);


  const submitHandler = async (event) => {
    event.preventDefault();
   
    try {
      const response = await axios.post("/users", form);
      handleOpen();
      setBackResponse(response.data);
      const email = await axios.post("/sendmail/register", { email: form.email });
      setForm({ email: "", password: "" });
      const { data } = await axios.post("/users/login", form, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setUser(data);
      window.localStorage.setItem("loggedUser", JSON.stringify(data));
      navigate(from, { replace: true });
      // setTimeout(() => onClose(), 4000);
    } catch (error) {
      if(error.response) setEmailRegistered(error.response.data.error)
    }
  };


  const goToMenuHandler = () => {
    onClose();
    handleClose();
  };



  return (
    <Box
    // bgGradient="linear-gradient(to right, #f27825, #eab830)"
    // minH="100vh"
    // display="flex"
    // justifyContent="center"
    // alignItems="center"
    >
      <Stack
        // bgGradient="linear(to-l,#000000, #272727)"
        bgGradient="linear-gradient(to right, #f27825, #eab830)"
        color="white"
        borderRadius="md"
        w="333px"
        padding="8"
        // spacing="6"
        as="form"
        onSubmit={submitHandler}
      >
        <FormControl isRequired>
        {emailRegistered !== '' && (
            <FormHelperText
              bg="#fff"
              borderRadius="4px"
              p="0 4px"
              color="red.500"
            >
              {emailRegistered}
            </FormHelperText>)}
          <FormLabel>Name</FormLabel>
          <Input
            bg="#272727"
            type="text"
            name="name"
            value={form.name}
            onChange={inputChangeHandler}
          />
          {errors.name && (
            <FormHelperText
              bg="#fff"
              borderRadius="4px"
              p="0 4px"
              color="red.500"
            >
              {errors.name}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Last Name</FormLabel>
          <Input
            bg="#272727"
            type="text"
            name="lastName"
            value={form.lastName}
            onChange={inputChangeHandler}
          />
          {errors.lastName && (
            <FormHelperText
              bg="#fff"
              borderRadius="4px"
              p="0 4px"
              color="red.500"
            >
              {errors.lastName}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            bg="#272727"
            type="email"
            name="email"
            value={form.email}
            onChange={inputChangeHandler}
            placeholder="example@example.com"
          />
          {errors.email && (
            <FormHelperText
              bg="#fff"
              borderRadius="4px"
              p="0 4px"
              color="red.500"
            >
              {errors.email}
            </FormHelperText>
          )}
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            bg="#272727"
            type="password"
            name="password"
            value={form.password}
            onChange={inputChangeHandler}
          />
          {errors.password && (
            <FormHelperText
              bg="#fff"
              borderRadius="4px"
              p="0 4px"
              color="red.500"
            >
              {errors.password}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            bg="#272727"
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={inputChangeHandler}
          />
          {errors.confirmPassword && (
            <FormHelperText
              bg="#fff"
              borderRadius="4px"
              p="0 4px"
              color="red.500"
            >
              {errors.confirmPassword}
            </FormHelperText>
          )}
        </FormControl>
        <FormControl>
          <FormLabel>Date of birth</FormLabel>
          <Input
            bg="#272727"
            type="date"
            name="birthday"
            value={form.birthday}
            onChange={inputChangeHandler}
            placeholder="05/19/2002"
            mb="1rem"
          />
          {errors.birthday && (
            <FormHelperText color="red.500">{errors.birthday}</FormHelperText>
          )}
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
          isDisabled={isSubmitting}
        >
          Sign In
        </Button>
        
        <Modal isOpen={isOpen} onClose={handleClose} >
          <ModalOverlay backdropFilter='blur(6px)' bg='#000000b6' />
          <ModalContent margin='auto'  >
          {/* <ModalCloseButton/> */}
            <Image src={ok} alt="ok" h='2.8rem' objectFit='contain' mt='1rem' mb='0' />
            <ModalHeader textAlign='center' fontSize='1.8rem' p='0' >Successful registered</ModalHeader>
            <ModalBody textAlign='center' fontSize='1.4rem' >
              <Text >Welcome to <Text color="orange.500" display='inline' >Mix 2 Pizza</Text>, {backResponse.name}!</Text>
            </ModalBody>
            <ModalFooter display='flex' justifyContent='center' >
            <Link to='allpizzas' ><Button fontSize='1.2rem' bg={"orange.400"} color={"white"} _hover={{ bg: "orange.500" }} onClick={goToMenuHandler} >Go to menu</Button></Link>
            </ModalFooter>
          </ModalContent>
        </Modal>

      </Stack>
    </Box>
  );
};

export default UserForm;
