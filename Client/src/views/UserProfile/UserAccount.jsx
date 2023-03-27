
import UserNavBar from "./UserNavBar";
import { Box, useToast, Tooltip, Heading, Text, Button, FormControl, FormLabel, Input, Image } from "@chakra-ui/react";
import UpdateEmailForm from "./Updates/UpdateEmail";
import UpdatePasswordForm from "./Updates/UpdatePassword";
import { useState, useEffect } from "react";
// import Axios from 'axios';
import {updatePicture} from "./updatePicture";
import { useAuthProv } from "../../context/AuthProvider";
import { useSelector, useDispatch } from "react-redux";
import { getUserById } from "../../redux/actions";
import axios from "axios";
import userProfile from '../../assets/userProfile.png'


const UserAccount = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state)=> state.user);
  const { user, setUser } = useAuthProv();


  useEffect(() => {
    dispatch(getUserById(user.id));
  }, [dispatch]); 

  const [previewSource, setPreviewSource] = useState('');
  const [isUpdateEmailFormVisible, setIsUpdateEmailFormVisible] = useState(false);

  const toggleUpdateEmailForm = () => {
    setIsUpdateEmailFormVisible(!isUpdateEmailFormVisible);
  };

  const [isUpdatePasswordFormVisible, setIsUpdatePasswordFormVisible] = useState(false);

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

const updateImageHandleClick = async () => {
  const putImage = {urlImage: previewSource, userId: user.id}
  const { data } = await axios.put("http://localhost:3001/users/image", putImage);
  setUser(data);
};



  return (
  <>
    <UserNavBar />
    <Box display='flex' w='100%' h='100vh' bgGradient="linear(to-l,#000000, #272727)" >
      <Box ml="2rem" className="profile">
        <Heading pt="10px" pb="20px" color="white" as="h1" size="lg">
          Personal Info
        </Heading>
        { 
        
        previewSource && <Image w='20rem' h='20rem' objectFit='cover' borderRadius='50%' ml='2rem' src={previewSource}/> || user.image && <Image w='20rem' h='20rem' objectFit='cover' borderRadius='50%' ml='2rem' src={user.image}/>
        || <Image w='20rem' h='20rem' objectFit='cover' borderRadius='50%' ml='2rem' src={userProfile}/>
        }
        <Input
          mt='2rem'
          w='100%'
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


          axios.post("https://api.cloudinary.com/v1_1/dozwiqjh1/image/upload", formData)
            .then(Response => {
            setPreviewSource(Response.data.secure_url)
            updatePicture(user.email, Response.data.url)})
            }}/>
            {/* {
            previewSource && (
              <img src={previewSource} alt="chosen" style={{height:'300px'}} />)
            }  */}
            <Box pt="10px">
            <Button size="lg" w='full' colorScheme="orange" onClick={updateImageHandleClick}>
              Update
            </Button>
            </Box>
      </Box>


        <Box ml='2rem' pl='2rem' w='70%' mt='2rem' >        
          <Box display='flex' color="white" as="h2" fontSize='1.6rem' size="md" >
            <Text color="white" fontWeight='bold' as="h2" size="md" >
              Name:
            </Text>
            <Text color="white" ml='1rem' >{user.name || user.displayName}</Text>
          </Box>

          <Box display='flex' color="white" mt='1rem' as="h2" fontSize='1.6rem' size="md" >
            <Text color="white" fontWeight='bold' as="h2" size="md" >
              Lastname:
            </Text>
            <Text color="white" ml='1rem' >{user.lastName}</Text>
          </Box>

          <Box display='flex' color="white" mt='1rem' as="h2" fontSize='1.6rem' size="md" >
            <Text color="white" fontWeight='bold' as="h2" size="md" >
              Birthday:
            </Text>
            <Text color="white" ml='1rem' >{user.birthday}</Text>
          </Box>

          <Box display='flex' color="white" mt='1rem' as="h2" fontSize='1.6rem' size="md" >
            <Text color="white" fontWeight='bold' as="h2" size="md" >
            Email:
            </Text>
            <Text color="white" ml='1rem' >{user.email}</Text>
          </Box>

          <Box pt="10px">
            <Button size="sm" colorScheme="orange" onClick={toggleUpdateEmailForm}>
              Update
            </Button>
          </Box>

          { isUpdateEmailFormVisible && <UpdateEmailForm onClose formtype="email" { ...user }/>}

          <Box display='flex' color="white" as="h2" fontSize='1.6rem' size="md" >
            <Text color="white" fontWeight='bold' as="h2" size="md" >
            Password:
            </Text>
          </Box>

          <Text>
            <Box pt="10px">
            <Button size="sm" colorScheme="orange" onClick={toggleUpdatePasswordForm} >Update</Button>
            </Box>
          { isUpdatePasswordFormVisible && ( <UpdatePasswordForm formType="password" { ...user }/> )}
          </Text>
        </Box>
    </Box>
  </>
  );
};

export default UserAccount;
