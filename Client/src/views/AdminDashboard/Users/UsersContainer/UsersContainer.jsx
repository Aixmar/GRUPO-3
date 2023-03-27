import UsersCard from "../UsersCard/UsersCard"
import { Box, Heading,Text,Flex } from "@chakra-ui/react"
const UsersContainer = (props) => {
    const {users} = props
    return(
        <Box>
        <Heading>Users</Heading>
        <Flex py="4" borderBottom="1px solid gray">
          <Box flex="1"><Text fontWeight="bold">ID</Text></Box>
          <Box flex="2"><Text fontWeight="bold">NAME</Text></Box>
          <Box flex="3"><Text fontWeight="bold">EMAIL</Text></Box>
          <Box flex="1"><Text fontWeight="bold">BIRTHDAY</Text></Box>
        </Flex>
        {
          users?.map(p => (
            <UsersCard
              key={p.id}
              id={p.id}
              name={p.name}
              email={p.email}
              birthday={p.birthday}
            />
          ))
        }
      </Box>
    )
}

export default UsersContainer
