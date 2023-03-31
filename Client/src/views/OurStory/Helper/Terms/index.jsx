import { Box, Flex, Text } from "@chakra-ui/react";

const Terms = () => {
  return (
    <Box p={8} bgGradient="linear-gradient(to right, #f27825, #eab830)">
      <Box mt={8} mb={12} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" color="white">Try the best pizzas created to your style with Mix2Pizza</Text>
        <Text fontSize="xl" color="#272727" mt={4}>We have a wide variety of ingredients to taste.</Text>
        <Text fontSize="xl" color="#272727" mt={4}>Made with love for you.</Text>
      </Box>
      <Flex justifyContent="center">
        <Box mr={4}>
          <Text fontSize="lg" fontWeight="bold" color="white">Terms of Service</Text>
        </Box>
        <Box>
          <Text fontSize="lg" fontWeight="bold" color="white">Privacy</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Terms;