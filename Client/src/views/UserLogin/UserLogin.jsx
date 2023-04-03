import { Button, FormControl, FormLabel, Input, Box, Text, Image,FormHelperText } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useLocation,Link } from "react-router-dom";
import axios from "axios";
import { useAuthProv } from "../../context/AuthProvider";
import logoG from '../../assets/logoGoogle.png'
//------------------------------------------------------
import { getUserById, updateCartUser } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { Spinner } from "@chakra-ui/react";


//------------------------------------------------------
const UserLogin = ({ onClose }) => {

  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/home"
  const [err,setErr] = useState('')
  const [form, setForm] = useState({ email: "", password: "" });
  const { setUser, loginWithGoogle, user } = useAuthProv();
  const dispatch = useDispatch()
  const [loader, setLoader] = useState(false);
  const [googleLoader, setGoogleLoader] = useState(false);

  const inputChangeHandler = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    setLoader(true);
    try { 
      const { data } = await axios.post("/users/login", form,{headers : {'Content-Type' : 'application/json'},withCredentials:true});
      setUser(data);     
      //------------------------------------------------------
      dispatch(updateCartUser(data.cart));
      dispatch(getUserById(data.id));   
      //------------------------------------------------------
      window.localStorage.setItem('loggedUser' , JSON.stringify(data));
      navigate(from,{replace:true});
      // setTimeout(() => onClose(), 1500);
      // const accessToken = response?.data;
      // setAuth({...form, accessToken})
      // window.localStorage.setItem('loggedUser' , JSON.stringify({...form,accessToken}));
      setErr('')
    } catch (error) {
      // console.log(error);
      setErr(error.response.data.error)
    } finally {
      onClose();
      setLoader(false);
    }
  };
  
  const handleLoginGoogle = () => {
      setGoogleLoader(true);
      loginWithGoogle();
      setTimeout(() => onClose(), 2000);
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
      
        <Box bgGradient="linear-gradient(to right, #f27825, #eab830)" w="333px" p='2rem 2rem 1rem' rounded="md" boxShadow="lg" >
        
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
            isDisabled={ googleLoader ? true : false }
            type="submit"
            bg={"white"}
            fontSize={"1.6rem"}
            color={"#1B1B1B"} 
            w={"full"}
            h='3rem'
            mt='2rem'
            mb='1rem'
            _hover={{ bg: "#F3E8E6" }} >

            { loader ? <Spinner/> : <Text>Login</Text> }

          </Button>
          <Text textAlign='center' color='#fff' >or</Text>
          <Button
            isDisabled={ loader ? true : false }
            bg={"white"}
            fontSize={"1.2rem"}
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
            { googleLoader ? <Spinner/> : <Text>Sign in with Google</Text> }
          </Button>
            <Link to="forgot" >
              <Box h='2.4rem' mt='2rem' display='flex' alignItems='flex-end' justifyContent='center' borderTop='1px solid #fff' onClick={onClose} >
                <Text textAlign='center' color='#fff' fontSize='1.2rem' >Forgot your password?</Text>
              </Box>
            </Link>
        </Box>
        
      </form>
    </Box>
    
  );
};

export default UserLogin;
