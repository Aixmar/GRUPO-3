import { Button, FormControl, FormLabel, Input, Box, Text, Image } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import { useAuthProv } from "../../context/AuthProvider";
import logoG from '../../assets/logoGoogle.png'


const UserLogin = () => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/home"
  const [err,setErr] = useState('')
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, loginWithGoogle } = useAuthProv();

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    try { 
      const { data } = await axios.post("/users/login", form,{headers : {'Content-Type' : 'application/json'},withCredentials:true});
      setIsLoading(true)
      setUser(data);
      window.localStorage.setItem('loggedUser' , JSON.stringify(data));
      navigate(from,{replace:true});
      // const accessToken = response?.data;
      // setAuth({...form, accessToken})
      // window.localStorage.setItem('loggedUser' , JSON.stringify({...form,accessToken}));
      setErr('')
    } catch (error) {
      setErr(error)
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleLoginGoogle = () => {
      loginWithGoogle();
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
          {err !== '' && <p>{err.error}</p>}
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
            h='3rem'
            mt={8}
            isLoading={isLoading}
            _hover={{ bg: "#F3E8E6" }}
          >
            <Text>Login</Text>
          </Button>
          <Button
            bg={"white"}
            fontSize={"1.2rem"}
            // color={"#1B1B1B"} 
            color={"#4e4e4e"} 
            w={"full"}
            h='3rem'
            mt={8}
            _hover={{ bg: "#F3E8E6" }}
            onClick={handleLoginGoogle}
            display='flex'
            justifyContent='center'
          >
            <Image src={logoG} alg='logoGoogle' height='2rem' mr='14px' />
            <Text >Sign in with Google</Text>
          </Button>
        </Box>
        
      </form>
    </Box>
    
  );
};

export default UserLogin;
