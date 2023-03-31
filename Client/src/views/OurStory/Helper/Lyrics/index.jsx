import React from 'react'
import { Box, Heading, Text } from "@chakra-ui/react";

const Lyrics = () => {
     return (
        <Box p={8} bgGradient="linear-gradient(to right, #f27825, #eab830)" color="#fff">
          <Heading as="h2" fontSize="4xl" mb={6}>
            Our Story
          </Heading>
          <Text fontSize="lg" mb={8} color="#272727" borderWidth="1px"
      borderColor="gray.300"
      borderRadius="md"
      p="4">
          Mix2pizza was founded by Domenico DeMarco, who emigrated from the town of Caserta, Italy to New York City in 1959. After working at various pizzerias around the city, DeMarco decided to open his own pizzeria in 1965.

Di Fara Pizza started out as a small corner shop, with just a few tables and a wood-fired oven. DeMarco made all the pizzas himself, using only the freshest ingredients and his own special recipe for the dough. Word of his delicious pizzas soon spread, and Di Fara became a local institution.

Despite its popularity, Di Fara remained a small family-owned business, with DeMarco running the pizzeria with the help of his wife, Margaret, and their children. The family worked long hours to keep up with the demand, and DeMarco continued to make every pizza himself, taking great care to ensure that each one was perfect.

Over the years, Di Fara has been recognized as one of the best pizzerias in the country, and has been featured in numerous publications, including The New York Times and Food & Wine magazine. Despite its success, however, the pizzeria has remained true to its roots, with DeMarco still making each pizza himself and the family continuing to run the business together.

Today, Di Fara Pizza is a beloved institution in Brooklyn, with customers lining up for hours to get a taste of DeMarco's famous pizzas. Despite its success, the pizzeria remains a family-owned business, with DeMarco and his family continuing to make every pizza with the same care and attention to detail that has made Di Fara a New York City icon.
          </Text>
            
          
          
        </Box>
  )
}

export default Lyrics;
