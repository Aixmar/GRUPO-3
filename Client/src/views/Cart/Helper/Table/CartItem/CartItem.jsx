import {CloseButton, Flex, Link, Select, Spacer, useColorModeValue } from "@chakra-ui/react";
import { PriceTag } from "../PriceTag/PriceTag";
import { CartProductMeta } from "../CartProductMeta/CartProductMeta";

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
    name,
    description,
    quantity,
    image,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
    index,
    itemId,
  } = props;


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
          value={quantity}
          onChange={(e) => onChangeQuantity(e.target.value ,itemId)}
        />
        <PriceTag price={price} currency={currency} />
        <Spacer></Spacer>
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={() => onClickDelete(index)}
        />
      </Flex>

      {/* Mobile */}
      <Flex mt="4" align="center" width="full" justify="space-between" display={{base: "flex", md: "none",}}>
        <CloseButton
          aria-label={`Delete ${name} from cart`}
          onClick={() => onClickDelete(index)}
        />
        <Spacer></Spacer>
        {/* <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value);
          }}
        /> */}
        <Spacer></Spacer>
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  );
};
