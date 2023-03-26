
import UserNavBar from "./UserNavBar";
import { Box, useToast, Tooltip, Heading, Text, Button, FormControl, FormLabel, Input, Image } from "@chakra-ui/react";
import UpdateEmailForm from "./Updates/UpdateEmail";
import UpdatePasswordForm from "./Updates/UpdatePassword";
import { useState, useEffect } from "react";
import Axios from 'axios';
import {updatePicture} from "./updatePicture";
import { useAuthProv } from "../../context/AuthProvider";
import { useSelector, useDispatch } from "react-redux";
import { getUserById } from "../../redux/actions";
import axios from "axios";
const UserAccount = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state)=> state.user);
  const { user } = useAuthProv();


  useEffect(() => {
    dispatch(getUserById(user.id));
  }, [dispatch]); 

 console.log(userData);
  const [previewSource, setPreviewSource] = useState('');
  const [isUpdateEmailFormVisible, setIsUpdateEmailFormVisible] =
    useState(false);
  const toggleUpdateEmailForm = () => {
    setIsUpdateEmailFormVisible(!isUpdateEmailFormVisible);
  };
  const [isUpdatePasswordFormVisible, setIsUpdatePasswordFormVisible] =
    useState(false);
  const toggleUpdatePasswordForm = () => {
    setIsUpdatePasswordFormVisible(!isUpdatePasswordFormVisible);
  };
  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
    setSelectedFile(file);
    setFileInputState(e.target.value);
};
const onClose = () => {
 setIsUpdateEmailFormVisible(false)
}

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
        setPreviewSource(reader.result);
    };
    };

  const updateImageHandleClick = () => {
    const putImage = {urlImage: previewSource, userId: user.id}
    Axios.put("http://localhost:3001/users/image", putImage);
    }
  return (
    <Box  bgGradient="linear(to-l,#000000, #272727)" w="auto" h="1080px">
      <UserNavBar />
      <Box ml="2rem"  className="profile">
        <Heading pt="10px" pb="20px" color="white" as="h1" size="lg">
          Personal Info
        </Heading>
        <Image src={user.image}/>
        <Input 
        id="inputTag"
        type="file"
        color="white"
        pt="5px" 
        onChange={ async (event) => {
          {()=> handleFileInputChange(file)}
        // toast({
        //   position: 'top-left',
        //   duration: 4000,
        //   isClosable:true,
        //   render: () => (
        //     <Box color='white' p={3} bg='green.400' fontWeight="bold">
        //       <Text>¡Cambiando foto! esto puede tardar varios segundos</Text>
        //     </Box>
        //   )
        //   })

        const formData = new FormData()
        formData.append("file", event.target.files[0])
        formData.append("upload_preset", "users_photo")


        Axios.post("https://api.cloudinary.com/v1_1/dozwiqjh1/image/upload", formData)
          .then(Response => {
          setPreviewSource(Response.data.secure_url)
          updatePicture(user.email, Response.data.url)})
          }}/>
            {previewSource && (
              <img src={previewSource} alt="chosen" style={{height:'300px'}} />)} 
            <Box pt="10px">
            <Button size="sm" colorScheme="orange" onClick={updateImageHandleClick}>
              Update
            </Button>
            </Box>



        <Heading  color="white" as="h2" size="md" marginTop="4">
          Name
        </Heading>

        <Text color="white">{user.name || user.displayName}</Text>
        <Heading color="white" as="h2" size="md" marginTop="4">
          Lastname
        </Heading>
        <Text color="white">{user.lastName}</Text>
        <Heading color="white" as="h2" size="md" marginTop="4">
          Birthday
        </Heading>
        <Text color="white">{user.birthday}</Text>
        <Heading  color="white" as="h2" size="md" marginTop="4">
          Email
        </Heading>
        <Text color="white">
        {userData.email}
          <Box pt="10px">
          <Button size="sm" colorScheme="orange" onClick={toggleUpdateEmailForm}>
            Update
          </Button>
          </Box>
        {isUpdateEmailFormVisible && <UpdateEmailForm onClose formtype="email" {...user}/>}
        </Text>

        <Heading color="white"  as="h2" size="md" marginTop="4">
          Password
        </Heading>
        <Text>
          <Box pt="10px">
          <Button
            size="sm"
            colorScheme="orange"
            onClick={toggleUpdatePasswordForm}
          >
            Update
          </Button>
          </Box>
        </Text>
        {isUpdatePasswordFormVisible && (
          <UpdatePasswordForm formType="password" {...user}/>
        )}
      </Box>
    </Box>
  );
};

export default UserAccount;
