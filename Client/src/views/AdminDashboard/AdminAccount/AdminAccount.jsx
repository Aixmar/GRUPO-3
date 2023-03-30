import SideBar from "../../../components/SideBar/SideBar";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner";
import { Box, Heading, Text, Button, Input, Image, Flex } from "@chakra-ui/react";
import { useState, useRef, useEffect } from "react";
import { useAuthProv } from "../../../context/AuthProvider";
import { FilePond, registerPlugin } from 'react-filepond'
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type';
import FilePondPluginImagePreview from 'filepond-plugin-image-preview';
import axios from "axios";
import userProfile from '../../../assets/userProfile.png'
import { useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
registerPlugin(FilePondPluginFileValidateType, FilePondPluginImagePreview);


const AdminAccount = () => {

    const toast = useToast();

    const { user, setUser } = useAuthProv();
    const [currentImage, setCurrentImage] = useState("");
    const [loadingImage, setLoadingImage] = useState(false);
    const pond = useRef(null);
  
  
  
    useEffect(() => {
      window.localStorage.setItem('loggedUser', JSON.stringify(user));
    }, [user.image]);
  
  
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
      toast({ title: "Image has been changed", color: "orange" });
      pond.current.removeFiles();
      setLoadingImage(false);
      setCurrentImage('');
    };
  


    return (
        <>  
            <Flex  w="100%" h="100vh" bgGradient="linear(to-l,#000000, #272727)" >

                <Box ><SideBar /></Box>

                <Box display="flex"  w="30%" >
                    <Box ml="2rem" className="profile">
                    
                    <Heading pt="10px" pb="20px" color="white" as="h1" size="lg" ml='2rem' textAlign='center' >Admin Info</Heading>

                    {
                        loadingImage ? ( <Box w='20rem' h='20rem' display='flex' justifyContent='center' alignItems='center' ml="2rem" ><LoadingSpinner /></Box> ) : ((currentImage && ( <Image src={currentImage} w="20rem" h="20rem" objectFit="cover" borderRadius="50%" ml="2rem" /> ))
                        || ( user.image && ( <Image src={user.image} w="20rem" h="20rem" objectFit="cover" borderRadius="50%" ml="2rem" /> ))
                        || ( <Image src={userProfile} w="20rem" h="20rem" objectFit="cover" borderRadius="50%" ml="2rem" /> ))
                    }

                                        { currentImage && 
                        <motion.div 
                        initial={{ y: 100 }}
                        animate={{ y: 0 }}
                        transition={{ duration: 0.5 }}>

                        <Box ml="2rem" mt='2rem' >
                        <Button size="lg" w="full" colorScheme="orange" onClick={handleUpdateImage} >Update</Button>
                        </Box>
                        </motion.div> 
                    }


                        <Box mt="2rem" w='90.4%' id="inputTag" type="file" ml="2rem" cursor='pointer' >
                            <FilePond 
                                ref={pond} 
                                maxFiles={1} 
                                acceptedFileTypes={['image/png', 'image/jpeg']} 
                                onupdatefiles={uploadImage}
                                labelIdle='Drag & drop your pic here or browse...' />
                        </Box>

                    </Box>                    
                </Box>
                

                <Box pl="2rem" w="70%" mt="4rem">

                    <Box display="flex" color="white" as="h2" fontSize="1.6rem" size="md">
                        <Text color="white" fontWeight="bold" as="h2" size="md">Name:</Text>
                        <Text color="white" ml="1rem">{user.name || user.displayName}</Text>
                    </Box>

                    <Box display="flex" color="white" mt="1rem" as="h2" fontSize="1.6rem" size="md" >
                        <Text color="white" fontWeight="bold" as="h2" size="md">Lastname:</Text>
                        <Text color="white" ml="1rem">{user.lastName}</Text>
                    </Box>

                    {/* <Box display="flex" color="white" mt="1rem" as="h2" fontSize="1.6rem" size="md" >
                        <Text color="white" fontWeight="bold" as="h2" size="md">Birthday:</Text>
                        <Text color="white" ml="1rem">{user.birthday}</Text>
                    </Box> */}

                    <Box display="flex" color="white" mt="1rem" as="h2" fontSize="1.6rem" size="md" >
                        <Text color="white" fontWeight="bold" as="h2" size="md">Email:</Text>
                        <Text color="white" ml="1rem">{user.email}</Text>
                    </Box>

                </Box>

            </Flex>
        </>
    )
};



export default AdminAccount;