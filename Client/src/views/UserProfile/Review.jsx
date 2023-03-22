import React, { useState } from "react";
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

const Review = () => {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Puntuación: ${rating}, Reseña: ${review}`);
  };

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
                    color={value <= rating ? "#FFD700" : "gray.300"}
                    transition="color 0.2s"
                    _hover={{ color: "#FFD700" }}
                  />
                </Box>
              );
            })}
          </Flex>
          <Input type="hidden" name="rating" value={rating} required />
        </FormControl>
        <Box mt="8">
          <FormControl>
            <FormLabel>Review</FormLabel>
            <Textarea
              value={review}
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
