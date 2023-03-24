import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "../../redux/actions";
import { Link as RouterLink } from "react-router-dom";
import user from "./json";

import { Box, Flex, Text, Link} from "@chakra-ui/react";
const UserProfile = () => {
  const dispatch = useDispatch();
  //const user = useSelector((state) => state.user);

  // useEffect(() => {
  //     dispatch(getUser(1))
  // }, []);

  return (
    <Flex bg="orange" p={2} alignItems="center">
      <Box mr={4}>
        <Link to="/profile/account" as={RouterLink}>
          <Text as="span" fontSize="2xl" color="black">
            <span className="icon fontawesome-user scnd-font-color"></span>
            Account
          </Text>
        </Link>
      </Box>
      <Box mr={4}>
        <Link to="/profile/settings" as={RouterLink}>
          <Text as="span" fontSize="2xl" color="black">
            <span className="icon entypo-cog scnd-font-color"></span>
            Settings
          </Text>
        </Link>
      </Box>
       <Box mr={4}>
        <Link to="/profile/stars" as={RouterLink}>
          <Text as="span" fontSize="2xl" color="black">
            <span className="icon fontawesome-star-empty scnd-font-color"></span>
            Favorites
          </Text>
        </Link>
      </Box> 
      <Box mr={4}>
        <Link to="/profile/history" as={RouterLink}>
          <Text as="span" fontSize="2xl" color="black">
            <span className="icon fontawesome-star-empty scnd-font-color"></span>
            History
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default UserProfile;
