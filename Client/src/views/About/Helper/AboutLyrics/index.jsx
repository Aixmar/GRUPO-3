import { Box, Heading, Text } from '@chakra-ui/react';

const AboutLyrics = () => {
  return (
    <Box p={8} bgGradient="linear-gradient(to right, #f27825, #eab830)" color="#fff">
      <Heading as="h2" fontSize="3xl" mb={6}>
        About Mix2Pizza
      </Heading>
      <Text fontSize="lg" mb={8} color="#272727">
      Mix2pizza was born from the love of many people for pizza, is it one of the best foods? What if you can create it with your favorite ingredients? The best experience ever.
      </Text>
      <Heading as="h3" fontSize="2xl" mb={6}>
        Purpose
      </Heading>
      <Text fontSize="lg" mb={8} color="#272727">
        
       Our purpose is that the client can create the pizza of his dreams. Come and enjoy the best pizza you've ever tasted, because you made it!
      </Text>
      <Heading as="h3" fontSize="2xl" mb={6}>
      Main Features
      </Heading>
      <Text fontSize="lg" mb={8} color="#272727">
        The answer is always pizza. Always.
      </Text>
      <Heading as="h3" fontSize="2xl" mb={6}>
         Development summary
      </Heading>
      <Text fontSize="lg" mb={8} color="#272727">
        We started with a dream and ended with a wonderful creation. We are kidding. We are only hungry all the time.
      </Text>
      <Heading as="h2" fontSize="3xl" mb={6}>
        DETAILS
      </Heading>
      <Text fontSize="lg" mb={4} color="#272727">
        Mix2Pizza Web v.0.1.0
      </Text>
      <Text fontSize="lg" mb={4} color="#272727">
        Mix2Pizza Facebook
      </Text>
      <Text fontSize="lg" mb={4} color="#272727">
        Mix2Pizza Instagram
      </Text>
      <Text fontSize="lg" mb={4} color="#272727">
        If you have questions or suggestions, feel free to reach us through:
      </Text>
      <Text fontSize="lg" mb={4} color="#272727">
        support@mix2pizza.app
      </Text>
    </Box>
  );
};

export default AboutLyrics;

