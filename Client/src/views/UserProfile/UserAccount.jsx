import UserNavBar from "./UserNavBar";
import { Box, Heading, Text, Button, Input, Image } from "@chakra-ui/react";
import UpdateEmailForm from "./Updates/UpdateEmail";
import UpdatePasswordForm from "./Updates/UpdatePassword";
import { useState } from "react";
import { useAuthProv } from "../../context/AuthProvider";

import axios from "axios";
import userProfile from '../../assets/userProfile.png'


const UserAccount = () => {

  const { user, setUser } = useAuthProv();
  const [ currentImage, setCurrentImage ] = useState('');
  const [isUpdateEmailFormVisible, setIsUpdateEmailFormVisible] = useState(false);
  const [isUpdatePasswordFormVisible, setIsUpdatePasswordFormVisible] = useState(false);



  const toggleUpdateEmailForm = () => {
    setIsUpdateEmailFormVisible(!isUpdateEmailFormVisible);
  };


  const toggleUpdatePasswordForm = () => {
    setIsUpdatePasswordFormVisible(!isUpdatePasswordFormVisible);
  };


  const uploadImage = async (event) => {
    const { files } = event.target;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "users_photo");
    const { data } = await axios.post('https://api.cloudinary.com/v1_1/dozwiqjh1/image/upload', formData);
    setCurrentImage(data.secure_url);
  };


  const handleUpdateImage = async () => {
    const putImage = { urlImage: currentImage, userId: user.id }
    const { data } = await axios.put("http://localhost:3001/users/image", putImage);
    setUser(data);
  };



  return (
  <>
    <UserNavBar />

    <Box display='flex' w='100%' h='100vh' bgGradient="linear(to-l,#000000, #272727)" >

      <Box ml="2rem" className="profile">
        <Heading pt="10px" pb="20px" color="white" as="h1" size="lg">Personal Info</Heading>
        
        {        
          currentImage && <Image src={currentImage} w='20rem' h='20rem' objectFit='cover' borderRadius='50%' ml='2rem' />
          || user.image && <Image src={user.image} w='20rem' h='20rem' objectFit='cover' borderRadius='50%' ml='2rem' />
          || <Image src={userProfile} w='20rem' h='20rem' objectFit='cover' borderRadius='50%' ml='2rem' />
        }

        <Input mt='2rem' w='100%' id="inputTag" type="file" color="white" pt="5px" onChange={uploadImage}/>

        <Box pt="10px">
          <Button size="lg" w='full' colorScheme="orange" onClick={handleUpdateImage}>Update</Button>
        </Box>
      </Box>


      <Box ml='2rem' pl='2rem' w='70%' mt='2rem' >

        <Box display='flex' color="white" as="h2" fontSize='1.6rem' size="md" >
          <Text color="white" fontWeight='bold' as="h2" size="md" >Name:</Text>
          <Text color="white" ml='1rem' >{user.name || user.displayName}</Text>
        </Box>

        <Box display='flex' color="white" mt='1rem' as="h2" fontSize='1.6rem' size="md" >
          <Text color="white" fontWeight='bold' as="h2" size="md" >Lastname:</Text>
          <Text color="white" ml='1rem' >{user.lastName}</Text>
        </Box>

        <Box display='flex' color="white" mt='1rem' as="h2" fontSize='1.6rem' size="md" >
          <Text color="white" fontWeight='bold' as="h2" size="md" >Birthday:</Text>
          <Text color="white" ml='1rem' >{user.birthday}</Text>
        </Box>

        <Box display='flex' color="white" mt='1rem' as="h2" fontSize='1.6rem' size="md" >
          <Text color="white" fontWeight='bold' as="h2" size="md" >Email:</Text>
          <Text color="white" ml='1rem' >{user.email}</Text>
        </Box>

        <Box pt="10px">
          <Button size="sm" colorScheme="orange" onClick={toggleUpdateEmailForm}>Update</Button>
        </Box>

        { isUpdateEmailFormVisible && <UpdateEmailForm onClose formtype="email" { ...user } />}

        <Box display='flex' color="white" as="h2" fontSize='1.6rem' size="md" >
          <Text color="white" fontWeight='bold' as="h2" size="md" >Password:</Text>
        </Box>

        <Box pt="10px">
          <Button size="sm" colorScheme="orange" onClick={toggleUpdatePasswordForm} >Update</Button>
        </Box>

        { isUpdatePasswordFormVisible && ( <UpdatePasswordForm formType="password" { ...user }/> )}

      </Box>
    </Box>
  </>
  );
};

export default UserAccount;
