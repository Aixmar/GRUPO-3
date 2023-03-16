import { Box, Heading, Text } from '@chakra-ui/react';

const AboutLyrics = () => {
  return (
    <Box p={8} bgGradient="linear-gradient(to right, #f27825, #eab830)" color="#fff">
      <Heading as="h2" fontSize="3xl" mb={6}>
        About Mix2Pizza
      </Heading>
      <Text fontSize="lg" mb={8} color="#272727">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui alias optio neque eligendi, id laborum accusamus fugiat vel sequi aspernatur voluptatem maiores? Quaerat fugiat placeat molestiae illum nulla eligendi fuga!
      </Text>
      <Heading as="h3" fontSize="2xl" mb={6}>
        Proposito
      </Heading>
      <Text fontSize="lg" mb={8} color="#272727">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, unde velit. Ex accusantium libero voluptas ullam cumque debitis quaerat nesciunt inventore! Temporibus, dolore labore? Autem dolorem eaque cupiditate sed beatae?
      </Text>
      <Heading as="h3" fontSize="2xl" mb={6}>
        Caracteristicas Principales
      </Heading>
      <Text fontSize="lg" mb={8} color="#272727">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab maiores debitis, amet quo vitae obcaecati aspernatur consectetur libero necessitatibus, enim repudiandae tempora ex illo delectus saepe culpa ipsam officiis cumque?
      </Text>
      <Heading as="h3" fontSize="2xl" mb={6}>
        Resumen de Desarrollo
      </Heading>
      <Text fontSize="lg" mb={8} color="#272727">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem perspiciatis necessitatibus optio numquam amet eius in magni, earum rem. Minus laboriosam similique non numquam reiciendis error magni soluta a accusantium?
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

