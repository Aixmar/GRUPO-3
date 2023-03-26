import { Box, Heading, Text, Link, Button } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Unauthorized = () => {
  return (
    <Box textAlign="center" bgGradient="linear(to-l,#000000, #272727)" h="100vh" d="flex" alignItems="center" justifyContent="center">
      <Box p={10} bgGradient="linear-gradient(to right, #f27825, #eab830)" borderRadius="lg" boxShadow="lg">
        <Heading fontSize="6xl" fontWeight="bold" color="#272727" mb={4}>Unauthorized</Heading>
        <Button as={RouterLink} to="/home" size="lg" mt={8} colorScheme="whiteAlpha">Go back to home</Button>
      </Box>
    </Box>
  );
};

export default Unauthorized;