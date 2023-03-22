import user from "./json";
import UserProfile from "./UserProfile";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import UpdateEmailForm from "./Updates/UpdateEmail";
import UpdatePasswordForm from "./Updates/UpdatePassword";
import { useState } from "react";

const UserAccount = () => {
  const [isUpdateEmailFormVisible, setIsUpdateEmailFormVisible] =
    useState(false);
  const toggleUpdateEmailForm = () => {
    setIsUpdateEmailFormVisible(!isUpdateEmailFormVisible);
  };
  const [isUpdatePasswordFormVisible, setIsUpdatePasswordFormVisible] =
    useState(false);
  const toggleUpdatePasswordForm = () => {
    setIsUpdatePasswordFormVisible(!isUpdatePasswordFormVisible);
  };

  return (
    <div>
      <UserProfile />
      <Box className="profile">
        <Heading as="h1" size="lg">
          Personal Info
        </Heading>
        <Heading as="h2" size="md" marginTop="4">
          Name
        </Heading>
        <Text>{user[0].name}</Text>
        <Heading as="h2" size="md" marginTop="4">
          Lastname
        </Heading>
        <Text>{user[0].lastname}</Text>
        <Heading as="h2" size="md" marginTop="4">
          Birthday
        </Heading>
        <Text>{user[0].birthday}</Text>
        <Heading as="h2" size="md" marginTop="4">
          Email
        </Heading>
        <Text>
          {user[0].email}
          <Button size="sm" colorScheme="teal" onClick={toggleUpdateEmailForm}>
            Update
          </Button>
        </Text>
        {isUpdateEmailFormVisible && <UpdateEmailForm formType="email" />}

        <Heading as="h2" size="md" marginTop="4">
          Password
        </Heading>
        <Text>
          {user[0].password}
          <Button
            size="sm"
            colorScheme="teal"
            onClick={toggleUpdatePasswordForm}
          >
            Update
          </Button>
        </Text>
        {isUpdatePasswordFormVisible && (
          <UpdatePasswordForm formType="password" />
        )}
      </Box>
    </div>
  );
};

export default UserAccount;
