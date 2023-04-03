import {Box, Flex,Text} from "@chakra-ui/react"
import SideBar from "../../../components/SideBar/SideBar"
import axios from "axios"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllUsers } from "../../../redux/actions"
import UsersContainer from "./UsersContainer/UsersContainer"

const Users = () => {

  const dispatch = useDispatch()

  const users  = useSelector((state) => state.users)

  useEffect(() => {
    dispatch(getAllUsers())
  },[dispatch])
   return (
     <Flex bgGradient="linear(to-l,#000000, #272727)">
         <Flex>
             <SideBar />
             <Box paddingLeft="50px">
             <UsersContainer users={users} />  
                </Box>
         </Flex>
     </Flex>
 
     )
 }
 
 export default Users