import { Flex,Text,Box} from "@chakra-ui/react"
const UsersCard = (props) => {
    return (
        <Box>
        <Flex>
          <Box w="20%">{props.id}</Box>
          <Box w="30%">{props.name}</Box>
          <Box w="100%">{props.email}</Box>
          <Box w="20%">{props.birthday}</Box>
        </Flex>
        {/* Aquí van los demás datos del usuario */}
      </Box>
        
    )
}

export default UsersCard