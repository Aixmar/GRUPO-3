import { Button, FormControl, FormLabel, Input, Box, Text } from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const UserLogin = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const [backResponse, setBackResponse] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post("/api/login", form);
      setBackResponse(response.data);
      const modal = document.querySelector("#registerModal");
      modal.showModal();
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      bgGradient="linear(to-l,#000000, #272727)"
      minH="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <form onSubmit={submitHandler}>
        <Box bgGradient="linear-gradient(to right, #f27825, #eab830)" w="333px"p="10" rounded="md" boxShadow="lg" >
          <FormControl id="email">
            <FormLabel color="white">Email:</FormLabel>
            <Input
              type="email"
              name="email"
              value={form.email}
              onChange={inputChangeHandler}
              placeholder=""
              bg="#272727"
              color="white"
              _placeholder={{ color: "gray.400" }}
              required
            />
          </FormControl>
          <FormControl mt="6" id="password">
            <FormLabel color="white">Password:</FormLabel>
            <Input
              type="password"
              name="password"
              value={form.password}
              onChange={inputChangeHandler}
              bg="#272727"
              color="white"
              _placeholder={{ color: "gray.400" }}
              required
            />
          </FormControl>
          <Button
            type="submit"
            bg={"white"}
            fontSize={"2xl"}
            color={"#1B1B1B"} 
            w={"full"}
            mt={8}
            isLoading={isLoading}
            _hover={{ bg: "#F3E8E6" }}
          >
            <Text>Login</Text>
          </Button>
        </Box>
        <dialog id="registerModal">
          <Box bg="gray.700" p="10" rounded="md" boxShadow="lg">
            <h2>Welcome {backResponse.name}!</h2>
            <Box mt="6">
              <Link to="/home">
                <Button
                  bg={"orange.500"}
                  fontSize={"2xl"}
                  w={"full"}
                  _hover={{ bg: "orange.600" }}
                >
                  Go to home
                </Button>
              </Link>
            </Box>
          </Box>
        </dialog>
      </form>
    </Box>
  );
};

export default UserLogin;
