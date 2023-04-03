import { Flex, Text, Box,Image} from "@chakra-ui/react"
import SideBar from "../../../components/SideBar/SideBar"
import { useDispatch, useSelector } from "react-redux";
import { getSales } from "../../../redux/actions";
import { useEffect } from "react"
import SalesContainer from "./SalesContainer/SalesContainer"



const Sales =() => {
    const dispatch = useDispatch()
    const sales = useSelector((state) => state.sales)

    useEffect(() => {
        dispatch(getSales())
    }, [])

    console.log(sales);


    return(
        <>
            <Flex bgGradient="linear(to-l,#000000, #272727)">
                <SideBar />
                <Box paddingLeft="50px">
                    
                    <SalesContainer sales={sales}/>
                </Box>
            </Flex>

        </>
    )
}

export default Sales