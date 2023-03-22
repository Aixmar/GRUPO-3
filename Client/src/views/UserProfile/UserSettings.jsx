import user from "./json";
import UserProfile from "./UserProfile";
import {
  Box,
  Heading,
  Text,
  Button,
  FormControl,
  FormLabel,
  Checkbox,
} from "@chakra-ui/react";
import UpdateAddressForm from "./Updates/UpdateAdress";
import { useState } from "react";
const UserSettings = () => {
  const [notificationsByEmail, setNotificationsByEmail] = useState(false);
  const [isUpdateAddressFormVisible, setIsUpdateAddressFormVisible] =
    useState(false);
  const toggleUpdateAddressForm = () => {
    setIsUpdateAddressFormVisible(!isUpdateAddressFormVisible);
  };
  return (
    <div>
      <UserProfile />
      <Box className="profile">
        <Heading as="h1" size="lg">
          Settings
        </Heading>
        <Heading as="h2" size="md" marginTop="4">
          Address
        </Heading>
        <Text>
          {user[0].address}
          <Button
            size="sm"
            colorScheme="teal"
            onClick={toggleUpdateAddressForm}
          >
            Update
          </Button>
        </Text>
        {isUpdateAddressFormVisible && <UpdateAddressForm />}
        <Heading as="h2" size="md" marginTop="4">
          Payment method
        </Heading>
        <Text>
          {user[0].Payment}
          <Button size="sm" colorScheme="teal">
            Update
          </Button>
        </Text>

        <FormControl as="h2" size="md" marginTop="4">
          <FormLabel htmlFor="notifications-by-email">
            Receive notifications by email
          </FormLabel>
          <Checkbox
            id="notifications-by-email"
            isChecked={notificationsByEmail}
            onChange={(e) => setNotificationsByEmail(e.target.checked)}
          />
        </FormControl>
      </Box>
    </div>
  );
};

export default UserSettings;
