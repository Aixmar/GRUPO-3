import React from "react";
import { Box, Button, Heading, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import pizza from "../../assets/pizza-app.png";
import { landingStyles } from "./landingStyles";



const Landing = () => {
  const { box, imageBox, heading, text, button } = landingStyles;
  return (
    <Box {...box}>
      <Box {...imageBox}>
        <Image src={pizza} alt="Pizza" borderRadius="20px" />
      </Box>
      <Box ml="20px" mr="250px" textAlign="left">
        <Heading as="h1" {...heading}>
          Create your{" "}
          <Text as="span" color="#f27825">
            own pizza with
          </Text>{" "}
          
          <Text as="span" color="#eab830">
            Mix2Pizza
          </Text>
        </Heading>
        <Text {...text}>
          Discover the wonderful world of Pizzas with our app.
        </Text>
        <Link to="/home">
          <Button {...button}>Start now</Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Landing;
