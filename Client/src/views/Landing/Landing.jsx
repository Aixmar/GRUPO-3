import React from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import pizza from "../../assets/pizza-app.png";
// bg={`url(${backgrounddark}) `}
// bgGradient="linear(to-l,#eab830, #f27825)"
const Landing = () => {
  return (
    
    <Box
      bgGradient="linear(to-l,#000000, #272727)"
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      minHeight="100vh"
      padding="0 10%"
    >
      <Box maxW="550px" h="500px">
        <Image src={pizza} alt="Pizza" borderRadius="20px" />
      </Box>
      <Box ml="20px" mr="250px" textAlign="left">
        <Heading as="h1" fontSize="48px" color="white" lineHeight="55px" letterSpacing="0.5%">
          Create your{" "}
          <Text as="span" color="#f27825">
            own pizza
          </Text>{" "}
          with{" "}
          <Text as="span" color="#eab830">
            Mix2Pizza
          </Text>
        </Heading>
        <Text fontSize="lg" color="white" my="20px">
          Discover the wonderful world of Pizzas with our app.
        </Text>
        <Link to="/home">
        <Button
          hoverBg="white"
          size="lg"
          borderRadius="full"
          background="linear-gradient(to right, #f27825, #eab830)"
        >
          Start now
        </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Landing;
