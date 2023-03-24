
import UserNavBar from "./UserNavBar";
import { Box, useToast, Tooltip, Heading, Text, Button, FormControl, FormLabel, Input, Image } from "@chakra-ui/react";
import UpdateEmailForm from "./Updates/UpdateEmail";
import UpdatePasswordForm from "./Updates/UpdatePassword";
import { useState } from "react";
import Axios from 'axios';
import {updatePicture} from "./updatePicture";
import { useAuthProv } from "../../context/AuthProvider";
import { useSelector } from "react-redux";
const UserAccount = () => {
  const userData = useSelector((state)=> state.user);
 
  const { user } = useAuthProv();
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
    <div>
      <UserNavBar />
      <Box className="profile">
        <Heading as="h1" size="lg">
          Personal Info
        </Heading>
        <Image src={user.image}/>
        <Input 
        id="inputTag"
        type="file" 
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
  
            <Button size="sm" colorScheme="teal" onClick={updateImageHandleClick}>
              Update
            </Button> 



        <Heading as="h2" size="md" marginTop="4">
          Name
        </Heading>

        <Text>{user.name || user.displayName}</Text>
        <Heading as="h2" size="md" marginTop="4">
          Lastname
        </Heading>
        <Text>{user.lastName}</Text>
        <Heading as="h2" size="md" marginTop="4">
          Birthday
        </Heading>
        <Text>{user.birthday}</Text>
        <Heading as="h2" size="md" marginTop="4">
          Email
        </Heading>
        <Text>
          {user.email}
          <Button size="sm" colorScheme="teal" onClick={toggleUpdateEmailForm}>
            Update
          </Button>
        </Text>
        {isUpdateEmailFormVisible && <UpdateEmailForm formtype="email" />}

        <Heading as="h2" size="md" marginTop="4">
          Password
        </Heading>
        <Text>
       
          <Button
            size="sm"
            colorScheme="teal"
            onClick={toggleUpdatePasswordForm}
          >
            Update
          </Button>
        </Text>
        {isUpdatePasswordFormVisible && (
          <UpdatePasswordForm formType="password" />
        )}
      </Box>
    </div>
  );
};

export default UserAccount;



