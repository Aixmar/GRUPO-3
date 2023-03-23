import { Box } from "@chakra-ui/react"
import ProductCard from "../ProductCard/ProductCard"

const ProductsContainer = (props) => {

    const { products } = props

    return (
        <Box>
            {
                products?.map(p => (
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
        </Box>
    )
}
export default ProductsContainer