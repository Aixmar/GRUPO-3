import UsersCard from "../UsersCard/UsersCard"
import { Box, Heading,Text,Flex } from "@chakra-ui/react"
const UsersContainer = (props) => {
    const {users} = props
    return(
        <Box width="100%" maxWidth="1500px">
        <Heading marginTop={10} marginBottom={3}>Users</Heading>
        <Flex py="4" borderBottom="1px solid gray">

        <Flex marginLeft={5}>
          <Box flex="1"><Text fontWeight="bold" color="orange.500">ID</Text></Box>
        </Flex>

        <Flex marginLeft={10}>
          <Box flex="2"><Text fontWeight="bold" color="orange.500" >NAME</Text></Box>
        </Flex>

        <Flex marginLeft={20}>
          <Box flex="3"><Text fontWeight="bold" color="orange.500" >LASTNAME</Text></Box>
        </Flex>

         <Flex marginLeft={40}>
          <Box flex="4"><Text fontWeight="bold" color="orange.500" >EMAIL</Text></Box>
          </Flex>

          <Flex marginLeft={40}>
          <Box flex="5"><Text fontWeight="bold" color="orange.500">BIRTHDAY</Text></Box>
          </Flex>

        </Flex>
        {
          users?.map(p => (
            <UsersCard
              key={p.id}
              id={p.id}
              name={p.name}
              lastname={p.lastName}
              email={p.email}
              birthday={p.birthday}
            />
          ))
        }
      </Box>
    )
}

export default UsersContainer