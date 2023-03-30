import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
  Button,
  useToast
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useAuthProv } from "../../context/AuthProvider";
import axios from "axios";
import { getItemDetail } from "../../redux/actions";

const Review = (props) => {
  const toast = useToast()
  const item = useSelector((state) => state.itemDetail)
  const { user } = useAuthProv()
  const [form, setForm] = useState({
      userId: user.id,
      name: user.name,
      image: user.image,
      rating: null,
      review: ""
  })
  const [reviewFound,setReviewFound] = useState(false)
  
  const handleReviewChange = (e) => {
    setForm({ ...form, review: e.target.value })
  };

  const handleRating = (value) => {
    setForm({ ...form,  rating: value })
  };

  const reviewFound2 = item.reviews?.find(r => r.userId === user.id)
  const handleSubmit = async (event) => {
    event.preventDefault();
      if(reviewFound || reviewFound2){
        toast({
          title: "Review not added",
          description: "You have already done a review",
          position: "top-center",
          status: "error",
          duration: 2000,
          isClosable: true,
          variant: "subtle",
          style: {
            backgroundColor: "white",
            color: "orange",
          },
        });
      }
      else{
        await axios.put(`/pizzas/reviews/${item.id}`, form)
        setReviewFound(true)
        toast({
          title: "Item added",
          position: "top-center",
          status: "success",
          duration: 2000,
          isClosable: true,
          variant: "subtle",
          style: {
            backgroundColor: "white",
            color: "orange",
          },
        });
    } 
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      mt={4}
    >
      <form onSubmit={handleSubmit}>
        <FormControl id="rating" mb={4}>
          <FormLabel>Puntuación</FormLabel>
          <Flex alignItems="center">
            {[...Array(5)].map((_, index) => {
              const value = index + 1;
              return (
                <Box
                  key={index}
                  mr={2}
                  cursor="pointer"
                  onClick={() => handleRating(value)}
                >
                  <StarIcon
                    color={value <= form.rating ? "#FFD700" : "gray.300"}
                    transition="color 0.2s"
                    _hover={{ color: "#FFD700" }}
                  />
                </Box>
              );
            })}

          </Flex>
          <Input type="hidden" name="rating" value="" required />
        </FormControl>
        <Box mt="8">
          <FormControl>
            <FormLabel>Review</FormLabel>
            <Textarea
              value={form.review}
              onChange={handleReviewChange}
              placeholder="Write a review"
            />
          </FormControl>

          <Button type="submit" mt="4" onSubmit={handleSubmit}>
            Submit Review
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Review;