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

import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import validate from "./validate";
import { ok } from "../../assets/CloudinaryImg";
import css from "./UserForm.module.css";
import { useAuthProv } from "../../context/AuthProvider";

const UserForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    birthday: "",
    email: "",
    password: "",
    cart: [],
    rol:'user'
  });
  const [errors, setErrors] = useState({});
  const [backResponse, setBackResponse] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // // modal chakra
  // const [ isOpen, setIsOpen ] = useState(false);
  // const handleClose = () => setIsOpen(false);
  // const handleOpen = () => setIsOpen(true);
  const navigate = useNavigate();
  const { setUser, loginWithGoogle } = useAuthProv();

  useEffect(() => {
    const hasErrors = Object.keys(errors).length > 0;
    setIsSubmitting(!form.email || !form.password || hasErrors);
  }, [form, errors]);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    setErrors(validate({ ...form, [name]: value }));
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { data } = await axios.post("/users", form);
    const modal = document.querySelector("#signUpModal");
    modal.showModal();
    setBackResponse(data);
    const email = await axios.post("/sendmail/register", { email: form.email });
    setForm({ email: "", password: "" });
    try {
      const { data } = await axios.post("/users/login", form, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setUser(data);
      window.localStorage.setItem("loggedUser", JSON.stringify(data));
      navigate(from, { replace: true });
      // setTimeout(() => onClose(), 4000);
    } catch (error) {
      console.log(error);
    }
  };

  // el que estaba antes de loguear automaticamente

  // const submitHandler = async (event) => {
  //   event.preventDefault();
  //   const { data } = await axios.post("/users", form);
  //   const modal = document.querySelector("#signUpModal")
  //   modal.showModal();
  //   // setTimeout(() => onClose(), 3000);
  //   setBackResponse(data);
  //   setForm({ email: "", password: "" });
  // };

  const goToMenuHandler = () => {
    const modal = document.querySelector("#signUpModal");
    modal.close();
    onClose();
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
        {/* <Link to="/forgot-password">Forgot Password</Link> */}
        {/* 
        <Modal isOpen={isOpen} onClose={handleClose} centered >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Título del Modal</ModalHeader>
            <ModalBody>
              Contenido del Modal. Puedes agregar cualquier componente aquí.
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleClose}>
                Cerrar
              </Button>
              <Button variant="ghost">Otro botón</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
 */}

        <dialog id="signUpModal" className={css.singUpDialog}>
          <img src={ok} alt="ok" />
          <h2>Successful registered, welcome {backResponse.name}!</h2>
          <div>
            <Link to="/allpizzas">
              <Button
                m="1rem 0"
                p="1.6rem 2rem 1.6rem"
                fontSize="1.6rem"
                bg={"orange.400"}
                color={"white"}
                _hover={{ bg: "orange.500" }}
                onClick={goToMenuHandler}
              >
                Go to menu
              </Button>
            </Link>
          </div>
        </dialog>
      </Stack>
    </Box>
  );
};

export default UserForm;
