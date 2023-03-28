import { Box, SimpleGrid, Text } from "@chakra-ui/react";

import ItemCard from "../ItemCard/ItemCard";

const ItemCardFavoriteContainer = (props) => {
  const { userFavorites } = props;
  console.log(userFavorites);
  return (
    <Box>
      <SimpleGrid columns={[2, 2, 4]} spacing={10} marginBottom="45px">
        {userFavorites.length ? (
          userFavorites.map((bebida) => (
            bebida.active &&
            <ItemCard
              key={bebida.name}
              id={bebida.id}
              image={bebida.image}
              price={bebida.price}
              name={bebida.name}
              rating={bebida.rating}
              stock={bebida.stock}
            />
          ))
        ) : (
          <Box fontFamily="sans-serif" fontSize="xl" color="white">
            No results
          </Box>
        )}
      </SimpleGrid>
    </Box>
  );
};

export default ItemCardFavoriteContainer;
