import { Box } from "@chakra-ui/react"
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
        <Box>
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
                        <Box>
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