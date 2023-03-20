import Sides from "../Sides/Sides";
import { SimpleGrid } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const SidesContainer = (props) => {
    const { sides } = props

    return (
        <>

            <SimpleGrid columns={[2, 2, 4]} spacing={10}>

                {sides.length ? sides.map(side => (
                    <Sides
                        key={side.name}
                        id={side.id}
                        name={side.name}
                        image={side.image}
                        price={side.price}
                        rating={side.rating}
                        stock={side.stock}
                    />
                )) : <Box fontFamily="sans-serif"
                    fontSize="xl"
                    color="white"
                    >No results</Box>}
            </SimpleGrid>

        </>
    )
}

export default SidesContainer