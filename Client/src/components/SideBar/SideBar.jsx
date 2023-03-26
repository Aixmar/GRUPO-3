import {Avatar, Button, Divider, Flex, Heading,IconButton,Spacer,Text} from "@chakra-ui/react"
import { useState } from "react"
import {FiMenu, FiUser} from "react-icons/fi"
import {RiShoppingBasketFill} from "react-icons/ri"
import { Link } from "react-router-dom"

const SideBar = () => {
    // const [navSize, setNavSize] = useState("large")

    return (
        <Flex
            position='fixed'
            bg='#aaa'
            pos="sticky"
            // left="5"
            h="100vh"
            // marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            // borderRadius="30px"
            w="200px"
            flexDirection='column'
            justifyContent="space-between"
        >
            {/* Botonsito del menu */}
            <Flex p="5%" flexDirection="column" alignItems="flex-start" as="nav">
                <IconButton background="none" _hover={{background:"none"}} />
                <Link to= "/admin" ><Button>Main Page</Button></Link>
                <Link to= "/users" ><IconButton mt='1rem' icon={<FiUser/>}/></Link>                
                <Link to= "/products" ><IconButton mt='1rem' icon={<RiShoppingBasketFill />} /></Link>
                <Link to= "/createProduct" ><IconButton mt='1rem' icon={<RiShoppingBasketFill />} /></Link>                
            </Flex>

            <Flex
            // PARTE DE ABAJO
                p="5%"
                flexDirection="column"
                w="100%"
                alignItems="flex-start"
                mb={12}
            >
                <Divider/>
                <Flex mt={4} align="center">
                    <Avatar size="sm" src=""/>
                    <Flex flexDirection="column" ml={4}>
                        <Heading as="h3" size="sm">Mix2pizza</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
            
        </Flex>
    )
}

export default SideBar