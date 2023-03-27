import { Flex,Text,Box} from "@chakra-ui/react"
const UsersCard = (props) => {
    return (
        <Box>
        <Flex>
          <Box w="20%" marginLeft={5} marginTop={5}>{props.id} </Box>
          <Box w="50%"  marginTop={5}>{props.name}</Box>
          <Box w="50%"  marginTop={5}>{props.lastname}</Box>
          <Box w="100%" marginTop={5} marginLeft={10}>{props.email}</Box>
          <Box w="20%" marginTop={5}>{props.birthday}</Box>
        </Flex>
        {/* Aquí van los demás datos del usuario */}
      </Box>

    )
}

export default UsersCard