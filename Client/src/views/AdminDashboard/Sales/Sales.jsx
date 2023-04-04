import { Flex, Text, Box,Image} from "@chakra-ui/react"
import SideBar from "../../../components/SideBar/SideBar"
import { useDispatch, useSelector } from "react-redux";
import { getSales, getOrders } from "../../../redux/actions";
import { useEffect } from "react"
import SalesContainer from "./SalesContainer/SalesContainer"
import PendingOrders from "./PendingOrders/PendingOrders";


const Sales =() => {
    const dispatch = useDispatch()
    const sales = useSelector((state) => state.sales)
    const orders = useSelector((state) => state.orders)

    useEffect(() => {
        dispatch(getSales())
        dispatch(getOrders())
    }, [])

    console.log(sales);


    return(
        <>
            <Flex gap='4rem' bgGradient="linear(to-l,#000000, #272727)">
                <SideBar />
                <Box paddingLeft="50px">
                    <SalesContainer sales={sales}/>
                </Box>
                <Box>
                    <PendingOrders orders={orders}/>
                </Box>
            </Flex>

        </>
    )
}

export default Sales