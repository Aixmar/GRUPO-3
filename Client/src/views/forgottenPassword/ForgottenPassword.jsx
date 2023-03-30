import axios from 'axios'
import { useState } from "react";
import { Link } from "react-router-dom";
import {
    Box,
    Button,
    FormControl,
    FormLabel,
    Input,
    Stack,
  } from "@chakra-ui/react";

  const ForgottenPassword = () => {
    const [{ email }, setUserEmail] = useState({ email: "" });
    const [err, setErr] = useState("");
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      console.log({ email });
      try {
        await axios.post("users/forgotPassword", { email });
        const modal = document.querySelector("#forgot");
        modal.showModal();
      } catch (error) {
        setErr(error.response.data.error);
      }
    };
  
    return (
      <Box bgGradient="linear(to-l,#000000, #272727)" w="auto" h="705px" >
        <Box display="flex" justifyContent="center"
           alignItems="center" pb="50px">
        <Stack
          bgGradient="linear-gradient(to right, #f27825, #eab830)"
          color="white"
          borderRadius="md"
          w="333px"
          padding="8"
          justifyContent="center"
          alignItems="center"
          as="form"
          onSubmit={handleSubmit}
        >
          {err !== "" && <p>{err}</p>}
          <FormControl isRequired>
            <FormLabel>Email</FormLabel>
            <Input
              bg="#272727"
              type="email"
              name="email"
              value={email}
              onChange={(e) => setUserEmail({ email: e.target.value })}
              placeholder="example@example.com"
            />
          </FormControl>
          <Button
            type="submit"
            // bg={"orange.400"}
            fontSize={"1.6rem"}
            bg="white"
            w="full"
            h="3rem"
            color={"#4e4e4e"}
            _hover={{ bg: "#F3E8E6" }}
          >
            Send email
          </Button>
  
          <dialog id="forgot">
            <h2>An email was sent to you</h2>
            <div>
              <Link to="/allpizzas">
                <Button
                  m="1rem 0"
                  p="1.6rem 2rem 1.6rem"
                  fontSize="1.6rem"
                  bg={"orange.400"}
                  color={"white"}
                  _hover={{ bg: "orange.500" }}
                  onClick={() => {
                    const modal = document.querySelector("#forgot");
                    modal.close();
                    onClose();
                  }}
                >
                  Go to menu
                </Button>
              </Link>
            </div>
          </dialog>
        </Stack>
        </Box>
      </Box>
    );
  };

export default ForgottenPassword


