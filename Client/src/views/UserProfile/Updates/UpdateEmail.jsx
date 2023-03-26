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
    await axios.put("http://localhost:3001/users/email", putEmail); // Esperar a que la actualización se complete
    dispatch(getUserById(props.id));
    setIsEmailUpdated(true); // Actualiza el estado para indicar que el correo electrónico se ha actualizado
    setShowForm(false); // Oculta el formulario
    setTimeout(() => {
      setIsEmailUpdated(false); // Oculta el alert después de 3 segundos
    }, 5000);
  };

  return (
    <div>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <FormControl id="newEmail">
            <FormLabel>New Email:</FormLabel>
            <Input
              type="email"
              value={newEmail}
              onChange={handleEmailChange}
              required
            />
          </FormControl>
          <Button mt={4} colorScheme="teal" type="submit">
            Save
          </Button>
        </form>
      )}
      {isEmailUpdated && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5 }}
          style={{ position: "fixed", top: "20px", right: "20px" }}
        >
          <Alert status="success" variant="subtle" alignItems="center">
            <AlertIcon />
            Email updated successfully
          </Alert>
        </motion.div>
      )}
    </div>
  );
};

export default UpdateEmailForm;
