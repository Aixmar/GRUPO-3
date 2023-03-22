import { Flex, Box, Avatar, Link, Heading, Image } from "@chakra-ui/react";
import {renzo,aix,jeremy,mati,gonza,nico,pablo,joaco} from "../../../../assets/CloudinaryImg"


const developers = () => {
  return (
    <Box p="30px" bgGradient="linear(to-l,#000000, #272727)">
      <Heading as="h2" textAlign="center" mb={6} color="white">
        Mix2Pizza Developers
      </Heading>
      <Flex flexWrap="wrap" justifyContent="center">
        <Box textAlign="center" mx={8} my={8}>
          <Avatar size="2xl" name="Jeremy" src={jeremy} mb={4} />
          <Box fontWeight="bold" fontSize="xl" mb={4} color="#f27825">Jeremy</Box>
          <Link href="https://www.linkedin.com/" target="_blank" fontSize="lg" mr={4} color="white">LinkedIn</Link>
          <Link href="https://github.com/" target="_blank" fontSize="lg" color="white">GitHub</Link>
        </Box>
        <Box textAlign="center" mx={8} my={8}>
          <Avatar size="2xl" name="Aixa" src={aix} mb={4} />
          <Box fontWeight="bold" fontSize="xl" mb={4} color="#f27825">Aixa</Box>
          <Link href="https://www.linkedin.com/in/aixa-mariana-galin-2bb83519a/" target="_blank" fontSize="lg" mr={4} color="white">LinkedIn</Link>
          <Link href="https://github.com/" target="_blank" fontSize="lg" color="white">GitHub</Link>
        </Box>
        <Box textAlign="center" mx={8} my={8}>
          <Avatar size="2xl" name="Aixa" src={renzo} mb={4} />
          <Box fontWeight="bold" fontSize="xl" mb={4} color="#f27825">Renzo</Box>
          <Link href="https://www.linkedin.com/" target="_blank" fontSize="lg" mr={4} color="white">LinkedIn</Link>
          <Link href="https://github.com/" target="_blank" fontSize="lg" color="white">GitHub</Link>
        </Box>
        <Box textAlign="center" mx={8} my={8}>
          <Avatar size="2xl" name="Aixa" src={mati} mb={4} />
          <Box fontWeight="bold" fontSize="xl" mb={4} color="#f27825">Matias</Box>
          <Link href="https://www.linkedin.com/in/abraham-gonzalez-/" target="_blank" fontSize="lg" mr={4} color="white">LinkedIn</Link>
          <Link href="https://github.com/" target="_blank" fontSize="lg" color="white">GitHub</Link>
        </Box>
        <Box textAlign="center" mx={8} my={8}>
          <Avatar size="2xl" name="Aixa" src={nico} mb={4} />
          <Box fontWeight="bold" fontSize="xl" mb={4} color="#f27825">Nicolás</Box>
          <Link href="https://www.linkedin.com/in/nicovalor/" target="_blank" fontSize="lg" mr={4} color="white">LinkedIn</Link>
          <Link href="https://github.com/" target="_blank" fontSize="lg" color="white">GitHub</Link>
        </Box>
        <Box textAlign="center" mx={8} my={8}>
          <Avatar size="2xl" name="Aixa" src={gonza} mb={4} />
          <Box fontWeight="bold" fontSize="xl" mb={4} color="#f27825">Gonzalo</Box>
          <Link href="https://www.linkedin.com/" target="_blank" fontSize="lg" mr={4} color="white">LinkedIn</Link>
          <Link href="https://github.com/" target="_blank" fontSize="lg" color="white">GitHub</Link>
        </Box>
        <Box textAlign="center" mx={8} my={8}>
          <Avatar size="2xl" name="Aixa" src={pablo} mb={4} />
          <Box fontWeight="bold" fontSize="xl" mb={4} color="#f27825">Pablo</Box>
          <Link href="https://www.linkedin.com/" target="_blank" fontSize="lg" mr={4} color="white">LinkedIn</Link>
          <Link href="https://github.com/" target="_blank" fontSize="lg" color="white">GitHub</Link>
        </Box>
        <Box textAlign="center" mx={8} my={8}>
          <Avatar size="2xl" name="Aixa" src={joaco} mb={4} />
          <Box fontWeight="bold" fontSize="xl" mb={4} color="#f27825">Joaquín</Box>
          <Link href="https://www.linkedin.com/" target="_blank" fontSize="lg" mr={4} color="white">LinkedIn</Link>
          <Link href="https://github.com/" target="_blank" fontSize="lg" color="white">GitHub</Link>
        </Box>
        {/* Repeat for all developers */}
      </Flex>
    </Box>
  );
};

export default developers;
