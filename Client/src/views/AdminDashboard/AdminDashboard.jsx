import {Flex} from "@chakra-ui/react"
import SideBar from "../../components/SideBar/SideBar"
import MainPage from "./MainPage/MainPage"
import { Route } from "react-router-dom"

const AdminDashboard = () => {

    return (
        <Flex>
            <SideBar />
            <MainPage></MainPage>
        </Flex>
        
    )
}

export default AdminDashboard