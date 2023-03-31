import { CloseButton,Flex, Select, Spacer, useColorModeValue, Button, AlertDialog, AlertDialogBody, AlertDialogFooter, AlertDialogHeader, AlertDialogContent, AlertDialogOverlay } from "@chakra-ui/react";
import { PriceTag } from "../PriceTag/PriceTag";
import { CartProductMeta } from "../CartProductMeta/CartProductMeta";
import { useState } from "react";

const QuantitySelect = (props) => {
  return (
    <Select SmaxW="64px" aria-label="Select quantity" focusBorderColor={useColorModeValue("blue.500", "blue.200")}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>

    </Select>
  );
};

export const CartItem = (props) => {
  
  const {
    isGiftWrapping,
    onClickDelete,
    name,
    description,
    quantity,
    image,
    currency,
    price,
    onChangeQuantity,
     index,
    itemId,
  } = props;

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const onCloseAlert = () => setIsAlertOpen(false);

  const onClickDeleteFirst = (index) => setIsAlertOpen(true);

  const handleClickDelete = () => {
    onClickDelete(index);
    onCloseAlert();
  };

  return (
    <Flex direction={{ base: "column", md: "row" }} justify="space-between" align="center">
      <CartProductMeta
        name={name}
        description={description}
        image={image}
        isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: "none", md: "flex" }}>
        <Spacer></Spacer>
        <QuantitySelect
        w="88px"
        mr="20px"
        color="#f27825"
          value={quantity}
          onChange={(e) => onChangeQuantity(e.target.value ,itemId)}
        />
        <PriceTag price={price} currency={currency} />
        <Spacer></Spacer>

        {/* este botón es la X */}
        <CloseButton
            color="#f27825"
            aria-label={`Delete ${name} from cart`}
            onClick={onClickDeleteFirst}/>

      </Flex>

      {/* Mobile */}
      <Flex mt="4" align="center" width="full" justify="space-between" display={{base: "flex", md: "none",}}>
        <AlertDialog
          isOpen={isAlertOpen}
          onClose={onCloseAlert}
          leastDestructiveRef={undefined}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader>
                ¿Are you sure you want to delete this product?
              </AlertDialogHeader>
              <AlertDialogBody>
                You cannot undo it.
              </AlertDialogBody>
              <AlertDialogFooter>
                <Button colorScheme="red" mr={3} onClick={onCloseAlert}>
                  Cancel
                </Button>
                <Button variant="ghost" onClick={() => handleClickDelete()} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={() => handleClickDelete}
        />
        <Spacer></Spacer>
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
