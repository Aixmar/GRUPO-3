import { Flex, Text, Box,Image} from "@chakra-ui/react"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "../../../redux/actions";
import SideBar from "../../../components/SideBar/SideBar"
import ProductsContainer from "./ProductsContainer/ProductsContainer";

const Products = () => {

    const dispatch = useDispatch()
    const products = useSelector((state) => state.pizzas)

    useEffect(() => {
        dispatch(getPizzas())
    }, [products])
    return (
        <>
            <Flex bgGradient="linear(to-l,#000000, #272727)">
                <SideBar />
                <Box paddingLeft="50px">
                    <ProductsContainer products={products}/>
                </Box>
            </Flex>

        </>


    )
}

export default Products