import { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import user from "../json";
const UpdateEmailForm = () => {
  const [newEmail, setNewEmail] = useState("");

  const handleEmailChange = (event) => {
    setNewEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewEmail(""); // Reinicia el estado del nuevo correo electrónico
  };

  return (
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
  );
};

export default UpdateEmailForm;
