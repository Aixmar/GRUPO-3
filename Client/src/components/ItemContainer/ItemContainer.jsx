import React, { useState, useEffect } from "react";
import ItemCard from "../ItemCard/ItemCard";
import { Box } from "@chakra-ui/react";
import { SimpleGrid } from "@chakra-ui/react";

const ItemContainer = (props) => {
  const { items } = props;

// POR FAVOR NO TOCAR ESTO HASTA DARLE UN MEJOR MODULARIZADO-------
  // const [visibleItems, setVisibleItems] = useState(items.slice(0, 8)); // Muestra los primeros 20 elementos
  // const [currentPage, setCurrentPage] = useState(1);
  // useEffect(() => {
  //   setVisibleItems(items)
  // },[items])
  // const handleScroll = () => {
  //   const container = document.getElementById("itemContainer");
  //   if (container.scrollTop + container.clientHeight >= container.scrollHeight) {
  //     // Si el usuario ha llegado al final del contenedor, cargar más elementos
  //     const nextPage = currentPage + 1;
  //     const startIndex = (nextPage - 1) * 20;
  //     const endIndex = nextPage * 20;
  //     setVisibleItems([...visibleItems, ...items.slice(startIndex, endIndex)]);
  //     setCurrentPage(nextPage);
  //   }
  // };
  // useEffect(() => {
  //   const container = document.getElementById("itemContainer");
  //   container.addEventListener("scroll", handleScroll);
  //   return () => container.removeEventListener("scroll", handleScroll);
  // }, [currentPage]);
  // --------------------------------------------------------------

  return (
    <Box id="itemContainer" overflowY="auto" height="600px" marginBottom='20px' >
      <SimpleGrid columns={[2, 2, 4]} spacing={10} marginBottom="45px">
        {items.length ? (
          items.map((bebida) => (
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

export default ItemContainer;
