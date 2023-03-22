import { useState } from "react";
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import user from "../json";
const UpdateAddressForm = () => {
  const [newAddress, setNewAddress] = useState("");

  const handleAddressChange = (event) => {
    setNewAddress(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setNewAddress(""); // Reinicia el estado del nuevo correo electrónico
  };

  return (
    <form onSubmit={handleSubmit}>
      <FormControl id="newAddress">
        <FormLabel>New Address:</FormLabel>
        <Input
          type="address"
          value={newAddress}
          onChange={handleAddressChange}
          required
        />
      </FormControl>
      <Button mt={4} colorScheme="teal" type="submit">
        Save
      </Button>
    </form>
  );
};

export default UpdateAddressForm;
