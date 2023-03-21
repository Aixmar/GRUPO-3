import user from "./json";
import UserProfile from "./UserProfile";
import { Box, Heading, Text, Button } from "@chakra-ui/react";

const UserAccount = () => {
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
          <Button size="sm" colorScheme="teal">
            Update
          </Button>
        </Text>
        <Heading as="h2" size="md" marginTop="4">
          Password
        </Heading>
        <Text>
          {user[0].password}
          <Button size="sm" colorScheme="teal">
            Change
          </Button>
        </Text>
      </Box>
    </div>
  );
};

export default UserAccount;
