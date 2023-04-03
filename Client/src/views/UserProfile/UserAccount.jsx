import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import { Box, Heading, Text, Button, Input, Image, Card, CardHeader, CardBody, Stack, StackDivider, Alert, AlertIcon, AlertTitle, AlertDescription, } from "@chakra-ui/react";
import UpdateEmailForm from "./Updates/UpdateEmail";
import UpdatePasswordForm from "./Updates/UpdatePassword";
import { useState, useRef, useEffect } from "react";
import { useAuthProv } from "../../context/AuthProvider";
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import axios from "axios";
import userProfile from "../../assets/userProfile.png";
import { useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import UserSettings from "./UserSettings";
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);


const UserAccount = () => {

  const toast = useToast();
  const { user, setUser } = useAuthProv();
  const [currentImage, setCurrentImage] = useState("");
  const [isUpdateEmailFormVisible, setIsUpdateEmailFormVisible] = useState(false);
  const [isUpdatePasswordFormVisible, setIsUpdatePasswordFormVisible] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const pond = useRef(null);

  useEffect(() => {
    window.localStorage.setItem('loggedUser', JSON.stringify(user));
  }, [user]);


  const toggleUpdateEmailForm = () => {
    setIsUpdateEmailFormVisible(!isUpdateEmailFormVisible);
  };
  const handleUpdateEmailSuccess = () => {
    toggleUpdateEmailForm();
    toast({
      title: "Email has been changed",
      position: "top-center",
      status: "success",
      duration: 2000,
      isClosable: true,
      variant: "subtle",
      style: {
        backgroundColor: "white",
        color: "orange",
      },
    });
  };

  const toggleUpdatePasswordForm = () => {
    setIsUpdatePasswordFormVisible(!isUpdatePasswordFormVisible);
  };
  const handleUpdatePasswordSuccess = () => {
    toggleUpdatePasswordForm();
    toast({
      title: "Password has been changed",
      position: "top-center",
      status: "success",
      duration: 2000,
      isClosable: true,
      variant: "subtle",
      style: {
        backgroundColor: "white",
        color: "orange",
      },
    });
  };

  const uploadImage = async (fileItem) => {
    if (!fileItem[0]?.file?.name) return setCurrentImage('');  
    setLoadingImage(true);
    const formData = new FormData();
    formData.append("file", fileItem[0].file);
    formData.append("upload_preset", "users_photo");
    const { data } = await axios.post("https://api.cloudinary.com/v1_1/dozwiqjh1/image/upload", formData);
    setCurrentImage(data.secure_url);   
    setLoadingImage(false);
  };


  const handleUpdateImage = async () => {
    setLoadingImage(true);
    const putImage = { urlImage: currentImage, userId: user.id };
    const { data } = await axios.put("/users/image", putImage);
    setUser(data);
    toast({
      title: "Image has been changed",
      position: "top-center",
      status: "success",
      duration: 2000,
      isClosable: true,
      variant: "subtle",
      style: {
        backgroundColor: "white",
        color: "orange",
      },
    });
    pond.current.removeFiles();
    setLoadingImage(false);
    setCurrentImage('');
  };


  const hiddenPassword = user && user.password.replace(/./g, "*");



  return (
    <>
      <Box display="flex" w="100%" minHeight="100vh" bgGradient="linear(to-l,#000000, #272727)" >
        <Box ml="2rem" className="profile" w='auto' >
          <Heading pt="10px" pb="20px" color="white" as="h1" size="lg" mb='1rem' ml='1rem' textAlign='center' w='100%' >Profile pic</Heading>

          {
            loadingImage ? ( <Box w='20rem'  h='20rem' display='flex' justifyContent='center' alignItems='center' ml="2rem" ><LoadingSpinner /></Box> ) : (( currentImage && ( <Image src={currentImage} w="20rem" h="20rem" objectFit="cover" borderRadius="50%" ml="2rem" /> )) 
            || ( user.image && ( <Image src={user.image} w="20rem" h="20rem" objectFit="cover" borderRadius="50%" ml="2rem" /> ))
            || ( <Image src={userProfile} w="20rem" h="20rem" objectFit="cover" borderRadius="50%" ml="2rem" /> ))
          }

          { currentImage && 
          <motion.div 
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
            >
            <Box ml="2rem" mt='2rem' >
              <Button size="lg" w="full" colorScheme="orange" onClick={handleUpdateImage} >Update</Button>
            </Box>
          </motion.div> }

            
          <Box mt="2rem" w='90.4%' id="inputTag" type="file" ml="2rem" cursor='pointer' >
              <FilePond 
                ref={pond} 
                maxFiles={1} 
                acceptedFileTypes={['image/png', 'image/jpeg', 'image/jpg']} 
                onupdatefiles={uploadImage}
                labelIdle='Drag & drop your pic here or browse...'                 
                    />
          </Box>
        </Box>
        
        <Card minHeight='36rem' height={(isUpdateEmailFormVisible || isUpdatePasswordFormVisible ? '48rem' : '32rem') } w='40%' ml='4rem' >
          <CardHeader>
            <Heading size='lg'>Personal Info</Heading>
          </CardHeader>

          <CardBody>
            <Stack divider={<StackDivider />} spacing='4'>

              <Box>
                <Heading size='md' >Name</Heading>
                <Text pt='2' fontSize='lg'>{user.name}</Text>
              </Box>

              <Box>
                <Heading size='md' >Last name</Heading>
                <Text pt='2' fontSize='lg'>{user.lastName}</Text>
              </Box>

              <Box>
                <Heading size='md' >Birthday</Heading>
                <Text pt='2' fontSize='lg'>{user.birthday || '--/--/--'}</Text>
              </Box>

              <Box>
                <Box display='flex' justifyContent='space-between' >
                  <Box>
                    <Heading size='md' >Email</Heading>
                    <Text pt='2' fontSize='lg'>{user.email}</Text>
                  </Box>
                  <Box pt="10px">
                    <Button size="sm" colorScheme="orange" onClick={toggleUpdateEmailForm} >Update</Button>
                  </Box>
                </Box>
                <Box>
                  {isUpdateEmailFormVisible && ( <UpdateEmailForm toggleUpdateEmailForm={toggleUpdateEmailForm} setUser={setUser} formtype="email" {...user} handleUpdateEmailSuccess={handleUpdateEmailSuccess} /> )}
                </Box>
              </Box>
             
              <Box>
                <Box display='flex' justifyContent='space-between' >
                  <Box>
                    <Heading size='md' >Password</Heading>
                    <Text pt='2' fontSize='lg'>{hiddenPassword}</Text>
                  </Box>
                  <Box pt="10px">
                  <Button size="sm" colorScheme="orange" onClick={toggleUpdatePasswordForm} >Update</Button>
                  </Box>
                </Box>
                <Box>
                {isUpdatePasswordFormVisible && ( <UpdatePasswordForm toggleUpdatePasswordForm={toggleUpdatePasswordForm} setUser={setUser} formType="password" {...user} handleUpdatePasswordSuccess={handleUpdatePasswordSuccess}/> )}
                </Box>
              </Box>

            </Stack>
          </CardBody>
        </Card>


        <UserSettings/>



        {/* <Box ml="2rem" pl="2rem" w="70%" mt="4rem">

          <Box display="flex" color="white" as="h2" fontSize="1.6rem" size="md">
            <Text color="white" fontWeight="bold" as="h2" size="md">Name:</Text>
            <Text color="white" ml="1rem">{user.name || user.displayName}</Text>
          </Box>

          <Box display="flex" color="white" mt="1rem" as="h2" fontSize="1.6rem" size="md" >
            <Text color="white" fontWeight="bold" as="h2" size="md">Lastname:</Text>
            <Text color="white" ml="1rem">{user.lastName}</Text>
          </Box>

          <Box display="flex" color="white" mt="1rem" as="h2" fontSize="1.6rem" size="md" >
            <Text color="white" fontWeight="bold" as="h2" size="md">Birthday:</Text>
            <Text color="white" ml="1rem">{user.birthday}</Text>
          </Box>

          <Box display="flex" color="white" mt="1rem" as="h2" fontSize="1.6rem" size="md" >
            <Text color="white" fontWeight="bold" as="h2" size="md">Email:</Text>
            <Text color="white" ml="1rem">{user.email}</Text>
          </Box>

          <Box pt="10px">
            <Button size="sm" colorScheme="orange" onClick={toggleUpdateEmailForm} >Update</Button>
          </Box>

          {isUpdateEmailFormVisible && ( <UpdateEmailForm onClose formtype="email" {...user} /> )}

          <Box display="flex" color="white" as="h2" fontSize="1.6rem" size="md">
            <Text color="white" fontWeight="bold" as="h2" size="md">Password:</Text>
          </Box>

          <Box pt="10px">
            <Button size="sm" colorScheme="orange" onClick={toggleUpdatePasswordForm} >Update</Button>
          </Box>

          {isUpdatePasswordFormVisible && ( <UpdatePasswordForm formType="password" {...user} /> )}

        </Box> */}
      </Box>
    </>
  );
};



export default UserAccount;
