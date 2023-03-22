import { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import user from "../json";
import validate from "../../UserForm/validate";
const UpdatePasswordForm = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");
  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmNewPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (newPassword !== confirmNewPassword) {
      setError("The passwords not match");
      return;
    }
    // Aquí puedes enviar la solicitud de actualización de contraseña al servidor
    setError("");
    setNewPassword("");
    setConfirmNewPassword("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="newPassword">
        <FormLabel>New Password:</FormLabel>
        <Input
          type="Password"
          value={newPassword}
          onChange={handlePasswordChange}
          required
        />
      </FormControl>
      <FormControl id="confirmNewPassword">
        <FormLabel>Confirm New Password:</FormLabel>
        <Input
          type="Password"
          value={confirmNewPassword}
          onChange={handleConfirmPasswordChange}
          required
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Save
      </Button>
      {error && <FormLabel>{error}</FormLabel>}
    </form>
  );
};

export default UpdatePasswordForm;
