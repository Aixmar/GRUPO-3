import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getUser } from "../../redux/actions";
import { Link as RouterLink } from "react-router-dom";
import { Box, Flex, Text, Link} from "@chakra-ui/react";  
import { useAuthProv } from '../../context/AuthProvider';

const UserProfile = () => {
  const dispatch = useDispatch();
  const { user } = useAuthProv();
  //const user = useSelector((state) => state.user);

  // useEffect(() => {
  //     dispatch(getUser(1))
  // }, []);

  return (
    <Flex bgGradient="linear-gradient(to right, #f27825, #eab830)" p={2} alignItems="center">
      <Box mr={2}>
        <Link to="/profile/account" as={RouterLink}>
          <Text ml="2rem" as="span" fontSize="2xl" color="white">
            <span className="icon fontawesome-user scnd-font-color"></span>
            Account
          </Text>
        </Link>
      </Box>
      { user.email === 'mix2pizza@gmail.com' && <Box mr={4}>
        <Link to="/admin" as={RouterLink}>
          <Text ml="2rem" as="span" fontSize="2xl" color="white">
            <span className="icon entypo-cog scnd-font-color"></span>
            Dashboard
          </Text>
        </Link>
      </Box> }
      <Box mr={2}>
        <Link to="/profile/settings" as={RouterLink}>
          <Text ml="1rem" as="span" fontSize="2xl" color="white">
            <span className="icon entypo-cog scnd-font-color"></span>
            Settings
          </Text>
        </Link>
      </Box>
       <Box mr={2}>
        <Link to="/profile/stars" as={RouterLink}>
          <Text ml="1rem" as="span" fontSize="2xl" color="white">
            <span className="icon fontawesome-star-empty scnd-font-color"></span>
            Favorites
          </Text>
        </Link>
      </Box> 
      <Box mr={2}>
        <Link to="/profile/history" as={RouterLink}>
          <Text ml="1rem" as="span" fontSize="2xl" color="white">
            <span className="icon fontawesome-star-empty scnd-font-color"></span>
            History
          </Text>
        </Link>
      </Box>
    </Flex>
  );
};

export default UserProfile;
