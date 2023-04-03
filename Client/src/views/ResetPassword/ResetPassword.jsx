import axios from 'axios'
import { useEffect, useState } from "react";
import { useParams ,Link} from "react-router-dom";
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
  } from "@chakra-ui/react";


const ResetPassword = ()=>{

const [newPassword,setNewPassword] = useState({
    newPassword : "",
    confirm : "",
})
const [errors, setErrors] = useState({});
const regExPassword = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/ 
const {id ,tokenResetPassword } = useParams()
const tokenResetPasswordCambiado = tokenResetPassword.replaceAll("$",".")
const [isSubmitting, setIsSubmitting] = useState(true);
const [isOpen, setIsOpen] = useState(false);

const handleClose = () => setModalAddtocart(false);
const goToMenuHandler = () => {
    const modal = document.querySelector("#reset");
    modal.close();
    onClose();
  };
  const validate = ({  newPassword,confirm }) => {

    const errors = {}
            if (newPassword && !regExPassword.test(newPassword)) errors.password = 'Invalid password.The password has to contain at least  one number,one upper case \n letter,one lower case letter and must be between 8 and 16 characters';
            if(newPassword !== confirm) errors.confirmPassword = 'Passwords are not the same'
            if(Object.entries(errors).length === 0) setIsSubmitting(false) 
            else setIsSubmitting(true   ) 
        return errors;
    } ;
const paswwordHandler = (e)=>{
    const { name, value } = e.target;
    setNewPassword({ ...newPassword, [name]: value });
    setErrors(validate({ ...newPassword, [name]: value }));
}
const handleSubmit = async(e) =>{
    e.preventDefault();
    
    console.log(newPassword);
    await axios.put("users/resetPassword/" + id + "/" + tokenResetPasswordCambiado , newPassword, {
        where:{
            id : id,
            tokenResetPassword : tokenResetPasswordCambiado
        }
    })
    .then(res => {
      setIsOpen(true);
    })
    .catch(err => console.log(err))
}

    return (
        <Box bgGradient="linear-gradient(to right, #f27825, #eab830)" h='100vh' >
      <Stack
        m='auto'
        bgGradient="linear-gradient(to right, #f27825, #eab830)"
        color="white"
        borderRadius="md"
        w="40rem"
        padding="8"
        // spacing="6"
        as="form"
        onSubmit={handleSubmit}
      >

        <FormControl isRequired>
          <FormLabel>New Password</FormLabel>
          <Input
            bg="#272727"
            type="password"
            name="newPassword"
            value={newPassword.newPassword}
            onChange={paswwordHandler}
          />
          {errors.password && 
            
             <p>{errors.password}</p> 
            }
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Confirm Password</FormLabel>
          <Input
            bg="#272727"
            type="password"
            name="confirm"
            value={newPassword.confirm}
            onChange={paswwordHandler}
          />
          {errors.confirmPassword && 
              <p>{errors.confirmPassword}</p>
           }
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
          Change password
        </Button>
        <Modal isOpen={isOpen} onClose={handleClose} size='xl' >
          <ModalOverlay backdropFilter='blur(6px)' bg='#000000b6' />
          <ModalContent margin='auto' >
          <ModalCloseButton/>
            <ModalHeader textAlign='center' fontSize='1.8rem' p='0' >Password changed succesfully </ModalHeader>
            <ModalBody textAlign='center' fontSize='1.4rem' >
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

export default ResetPassword


