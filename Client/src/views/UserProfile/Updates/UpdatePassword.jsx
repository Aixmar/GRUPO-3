import { useState } from "react";
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
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getUserById } from "../../../redux/actions";
import { motion } from "framer-motion";
//import validatePassword from "../../UserForm/validate"
const UpdatePasswordForm = (props) => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [isPasswordUpdated, setIsPasswordUpdated] = useState(false);
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const dispatch = useDispatch();

  const handleClickShow = () => setShow(!show);

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (newPassword !== confirmNewPassword) {
      // Comprobar si las contraseñas son iguales
      setError("The passwords does not match");
      return;
    }

    const putPassword = { password: newPassword, userId: props.id };
    await axios.put("http://localhost:3001/users/password", putPassword); // Esperar a que la actualización se complete
    dispatch(getUserById(props.id));
    setNewPassword("");
    setConfirmNewPassword("");
    setIsPasswordUpdated(true);
  };

  const validate = ({ password, confirmPassword }) => {
    if (newPassword !== confirmNewPassword) {
      setError("The passwords does not match");
    }
    if (password && !regExPassword.test(password)) setError("Invalid password");
  };
  // const validatePassword = () => {
  //     if (newPassword !== confirmNewPassword) {
  //     // Comprobar si las contraseñas son iguales
  //     setError("The passwords does not match");
  //     return;
  //   }
  // };
  return (
    <>
      <Box w='40%' color='#fff' >
        {!isPasswordUpdated && (
          <form onSubmit={handleSubmit}>
            <FormControl id="newPassword">
              <FormLabel>New Password:</FormLabel>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  required
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClickShow}>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="confirmNewPassword">
              <FormLabel>Confirm New Password:</FormLabel>
              <Input
                pr="4.5rem"
                type={show ? "text" : "password"}
                placeholder="Confirm password"
                value={confirmNewPassword}
                onChange={handleConfirmPasswordChange}
                required
              />
            </FormControl>
            {error && <Text>{error}</Text>}
            <Button mt={4} colorScheme="teal" type="submit">
              Save
            </Button>
          </form>
        )}

        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={
            isPasswordUpdated ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }
          }
          transition={{ duration: 0.5 }}
          style={{ position: "fixed", top: "20px", right: "20px" }}
        >
          <Alert status="success" variant="subtle" alignItems="center">
            <AlertIcon />
            Password updated succesfully
          </Alert>
        </motion.div>
      </Box>
    </>
  );
};

export default UpdatePasswordForm;
