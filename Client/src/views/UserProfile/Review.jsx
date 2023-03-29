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
} from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { useAuthProv } from "../../context/AuthProvider";
import axios from "axios";
import { getItemDetail } from "../../redux/actions";

const Review = (props) => {
  // const dispatch = useDispatch()
  const item = useSelector((state) => state.itemDetail)
  // const [current,setCurrent] = useState({})
  const { user } = useAuthProv()
  const [form, setForm] = useState({
      name: user.name,
      image: user.image,
      rating: null,
      review: ""
  })
  // const [rating, setRating] = useState(0);
  // const [review, setReview] = useState("");
  const handleReviewChange = (e) => {
    // setReview(event.target.value);
    setForm({ ...form, review: e.target.value })
  };

  const handleRating = (value) => {
    setForm({ ...form,  rating: value })
  };
  // item.reviews = item.reviews || {}
  // item.reviews = {...item.reviews,...form}
  const handleSubmit = (event) => {
    event.preventDefault();
    axios.put(`/pizzas/${item.id}`, {reviews:{...item.reviews,...form}})
  };
  // useEffect(() => {
  //   setCurrent(item)
  // },[item])

  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      p={4}
      mt={4}
      onSubmit={handleSubmit}
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
