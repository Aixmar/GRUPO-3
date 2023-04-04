import { Box, Heading, Flex, Text } from "@chakra-ui/react"
import ProductCard from "../ProductCard/ProductCard"
import ProductsPaginated from "../ProductsPaginated/ProductsPaginated"
import { useState } from "react"

const ProductsContainer = (props) => {

    const { products } = props

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(10)
    const lastProduct = currentPage * productsPerPage // indice 10 // cuando currentPage sea 2, indice va a ser 20
    const firstProduct = lastProduct - productsPerPage // indice 0 // cuando currentPage sea 2, indice va a ser 10
    const currentProducts = products.slice(firstProduct, lastProduct) // me va a slicear del indice 0 al indice 9 // cuando currentPage sea 2, slicea del indice 10 al 19


    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
        <Box width="100%" maxWidth="1500px">
            <Heading marginBottom={5} marginTop={10} color="white">Products</Heading>
            
             <Flex py="4" borderBottom="1px solid white">

        <Flex marginLeft={5}>
          <Box flex="1"><Text fontWeight="bold" color="#f27825">ID</Text></Box>
        </Flex>

        <Flex marginLeft={7}>
          <Box flex="2"><Text fontWeight="bold" color="#f27825" >IMAGE</Text></Box>
        </Flex>

        <Flex marginLeft={5}>
          <Box flex="3"><Text fontWeight="bold" color="#f27825" >NAME</Text></Box>
        </Flex>

         <Flex marginLeft={20}>
          <Box flex="4"><Text fontWeight="bold" color="#f27825" >PRICE</Text></Box>
          </Flex>

          {/* <Flex marginLeft={5}>
          <Box flex="5"><Text fontWeight="bold" color="#f27825">QUANT.</Text></Box>
          </Flex> */}

          <Flex marginLeft={3}>
          <Box flex="6"><Text fontWeight="bold" color="#f27825">AVAIL.</Text></Box>
          </Flex>

        </Flex>
            
            {
                currentProducts?.map(p => (
                    <ProductCard
                        key={p.id}
                        id={p.id}
                        image={p.image}
                        name={p.name}
                        price={p.price}
                        stock={p.stock}
                        active={p.active}
                    />
                )
                )
            }
                        <Box pt="20px">
                            <ProductsPaginated
                                products={products.length}
                                productsPerPage={productsPerPage}
                                paginated={paginated}
                            ></ProductsPaginated>
                        </Box>
        </Box>
    )
}
export default ProductsContainer