import { Button, FormControl, FormLabel, Input, Box, Text, Image,FormHelperText } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useLocation,Link } from "react-router-dom";
import axios from "axios";
import { useAuthProv } from "../../context/AuthProvider";
import logoG from '../../assets/logoGoogle.png'
//------------------------------------------------------
import { getUserById, updateCartUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
//------------------------------------------------------
const UserLogin = ({ onClose }) => {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/home"
  const [err,setErr] = useState('')
  const [form, setForm] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false);
  const { setUser, loginWithGoogle, user } = useAuthProv();
  const dispatch = useDispatch() 

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
      
      //------------------------------------------------------
      dispatch(updateCartUser(data.cart));
      dispatch(getUserById(data.id));   
      //------------------------------------------------------

      window.localStorage.setItem('loggedUser' , JSON.stringify(data));
      navigate(from,{replace:true});
      setTimeout(() => onClose(), 1500);
      // const accessToken = response?.data;
      // setAuth({...form, accessToken})
      // window.localStorage.setItem('loggedUser' , JSON.stringify({...form,accessToken}));
      setErr('')
    } catch (error) {
      console.log(error);
      setErr(error.response.data.error)
    } finally {
      setIsLoading(false);
    }
  };
  
  const handleLoginGoogle = () => {
      loginWithGoogle();
      setTimeout(() => onClose(), 4000);
  };



  return (
    
    <Box
      // bgGradient="linear(to-l,#000000, #272727)"
      // minH="100vh"
      // display="flex"
      // justifyContent="center"
      // alignItems="center"
    >
      
      <form onSubmit={submitHandler}>
      
        <Box bgGradient="linear-gradient(to right, #f27825, #eab830)" w="333px"p="10" rounded="md" boxShadow="lg" >
        
          <FormControl id="email">
          {err !== '' && (
            <FormHelperText
              bg="#fff"
              borderRadius="4px"
              p="0 4px"
              color="red.500"
            >
              {err}
            </FormHelperText>)}
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
            fontSize={"1.6rem"}
            color={"#1B1B1B"} 
            w={"full"}
            h='3rem'
            mt='2rem'
            mb='1rem'
            isLoading={isLoading}
            _hover={{ bg: "#F3E8E6" }}
          >
            <Text>Login</Text>
          </Button>
          <Text textAlign='center' color='#fff' >or</Text>
          <Button
            bg={"white"}
            fontSize={"1.2rem"}
            // color={"#1B1B1B"} 
            color={"#4e4e4e"} 
            w={"full"}
            h='3rem'
            mt='1rem'
            _hover={{ bg: "#F3E8E6" }}
            onClick={handleLoginGoogle}
            display='flex'
            justifyContent='center'
          >
            <Image src={logoG} alg='logoGoogle' height='2rem' mr='14px' />
            <Text >Sign in with Google</Text>
          </Button>
          <Link to="forgot">
          <Text textAlign='center' color='#fff' >Forgot your password?</Text>
          </Link>
          
        </Box>
        
      </form>
    </Box>
    
  );
};

export default UserLogin;
