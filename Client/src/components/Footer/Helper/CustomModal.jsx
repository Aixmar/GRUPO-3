import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  Text,
} from "@chakra-ui/react";

function CustomModal(props) {

    const email = "mix2pizza@gmail.com";
    const subject = "I want to work in Mix2Pizza";
    const body = "Dear team, my name is ...";
  
    const handleEmailClick = (event) => {
      event.preventDefault();
      const url = `https://mail.google.com/mail/?view=cm&to=${email}&su=${subject}&body=${body}`;
      window.open(url, "_blank");
    };


  return (
    <Modal isOpen={true} onClose={props.onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Work with us!</ModalHeader>
        <ModalBody>
          <Text>Please send us your CV to our mail:</Text>
          <Text fontWeight="bold"  cursor="pointer" onClick={handleEmailClick}>{email}</Text>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={props.onClose}>
            Close
          </Button>
       
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default CustomModal;

