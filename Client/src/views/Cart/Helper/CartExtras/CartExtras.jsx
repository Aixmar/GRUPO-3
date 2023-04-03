import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getPizzas, pushToCart } from '../../../../redux/actions';
import { Box, WrapItem, Image, Heading, Text, Wrap, Button, useToast, IconButton, HStack, Tooltip, VStack} from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';


const CartExtras = () => {

  const items = useSelector((state) => state.pizzas);
  const drinks = items.filter((drink) => drink.category === "drinks");
  const toast = useToast();

  ////////////PAGINADO /////////////////////////////////////////////////
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const numPages = Math.ceil(drinks.length / itemsPerPage);
  
  const handleClickPrevious = () => {
    setCurrentPage((prev) => prev - 1);
  };

  const handleClickNext = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = drinks.slice(indexOfFirstItem, indexOfLastItem);
  ///////////////////////////////////////////////////////////////////////////

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getPizzas());
    }, [dispatch]);

    const handleAddToCart = (drink) => {
      dispatch(pushToCart(drink));
      toast({
        title: "Item added",
        position: 'top-center',
        status: "success",
        duration: 2000,
        isClosable: true,
        variant: "subtle",
        style: {
          backgroundColor: "white",
          color: "orange",
        },
      });
    };
  

    return (
      <>
      <Heading color="#f27825" ml="90px" mt="8">
        Add Extras:
      </Heading>
      <Wrap  ml="90px" mt="8">
        {currentItems.map((drink) => (
          <WrapItem key={drink.id}>
            <Box width="200px">
              <Image src={drink.image} alt={drink.name} />
              <Heading color="white" as="h3" size="md" pt="10px" mb="8">
                {drink.name}
              </Heading>
              <Text fontSize="lg" color="white">
                Price: {drink.price}
              </Text>
              <Button
                colorScheme="orange"
                mt="4"
                onClick={() => handleAddToCart({... drink, quantity: 1})}
              >
                Add to Cart
              </Button>
            </Box>
          </WrapItem>
        ))}
      </Wrap>
      <HStack ml="90px" mt="8">
        <Tooltip label="Previous Page" hasArrow>
          <IconButton
            icon={<ChevronLeftIcon />}
            isDisabled={currentPage === 1}
            onClick={handleClickPrevious}
          />
        </Tooltip>
        <Tooltip label="Next Page" hasArrow>
          <IconButton
            icon={<ChevronRightIcon />}
            isDisabled={currentPage === numPages || numPages === 0}
            onClick={handleClickNext}
          />
        </Tooltip>
      </HStack>
      </>
    );
  };
  
export default CartExtras