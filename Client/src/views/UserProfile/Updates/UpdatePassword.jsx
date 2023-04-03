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
import { useEffect } from "react";
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
    setError(validate(newPassword, confirmNewPassword))
  };
useEffect(() => {
  setError(validate(newPassword, confirmNewPassword))
}, [confirmNewPassword, newPassword]);

  console.log(error.length);

  const validate = ( password, confirmPassword ) => {
    const regExPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
    if (password !== confirmPassword) return("The passwords does not match");
    
    if (password && !regExPassword.test(password)) return ("Invalid password")
    
   return ("")
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (error.length) return;
    const putPassword = { password: newPassword, userId: props.id };
    await axios.put("http://localhost:3001/users/password", putPassword); // Esperar a que la actualización se complete
    dispatch(getUserById(props.id));
    setNewPassword("");
    setConfirmNewPassword("");
    setIsPasswordUpdated(true);
    props.handleUpdatePasswordSuccess()
  };

 
  return (
      !isPasswordUpdated && (<Box  color='#000' bg='gray' borderRadius='8px' p='10px' >
          <form onSubmit={handleSubmit}>
            <FormControl id="newPassword">
              <FormLabel>New Password:</FormLabel>
              <InputGroup size="md">
                <Input
                  bg='#fff'
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  value={newPassword}
                  onChange={handlePasswordChange}
                  required
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClickShow} color='black'>
                    {show ? "Hide" : "Show"}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id="confirmNewPassword">
              <FormLabel>Confirm New Password:</FormLabel>
              <Input
                bg='#fff'
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
      </Box>)
  );
};

export default UpdatePasswordForm;
