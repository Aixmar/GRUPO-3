import { useState, useEffect } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Box,
  Text,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Modal,
  ModalBody,
  ModalContent,
  ModalCloseButton,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserById } from "../../../redux/actions";
import { motion } from "framer-motion";
const UpdateEmailForm = (props) => {
  const [newEmail, setNewEmail] = useState("");
  const [isEmailUpdated, setIsEmailUpdated] = useState(false); // Estado para indicar si el correo electrónico se ha actualizado
  const [showForm, setShowForm] = useState(true); // Estado para controlar la visualización del formulario

  const dispatch = useDispatch();

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const putEmail = { email: newEmail, userId: props.id };
    const { data }= await axios.put("http://localhost:3001/users/email", putEmail);  // Esperar a que la actualización se complete
    dispatch(getUserById(props.id));
    props.setUser(data);
    setIsEmailUpdated(true); // Actualiza el estado para indicar que el correo electrónico se ha actualizado
    setShowForm(false); // Oculta el formulario
    props.handleUpdateEmailSuccess() // llama a la función onUpdateSuccess pasada como prop desde el componente padre
  };

  return (

   showForm && 
      (<Box color='#000' bg='gray' borderRadius='8px' p='10px' >
        <form onSubmit={handleSubmit}>
          <FormControl display='flex' flexDir='column' alignItems='center' id="newEmail">
            <FormLabel>New Email:</FormLabel>
            <Input
              bg='#fff'
              w='90%'
              type="email"
              value={newEmail}
              onChange={handleEmailChange}
              required
              />
          <Button m='10px 0 1rem' w='90%' colorScheme="teal" type="submit" >
            Save
          </Button>
          </FormControl>
        </form>
      </Box> )
         
   
  );
};

export default UpdateEmailForm;
