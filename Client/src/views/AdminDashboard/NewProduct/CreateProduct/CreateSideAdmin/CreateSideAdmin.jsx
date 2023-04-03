import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Text, Grid, GridItem, FormLabel, Radio, RadioGroup, Stack, Box, Input, Switch, Select, Flex, StackDivider, Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Image } from "@chakra-ui/react";
import CreatedSide from './CreatedSide';
import validate from "./validate";
import css from '../CreateProduct.module.css';
import { ok } from "../../../../../assets/CloudinaryImg.js";

const initialStateForm = {
  name: "",
  image: "",
  price: 0,
  detail: {
    calories: 0,
    fat: 0,
    carbs: 0,
    protein: 0,
    subcategory: "",
    description: ""
  },
  category: "sides",
  rating: 0,
  stock: 0,
  active: false
}

const CreateSideAdmin = () => {

  const [form, setForm] = useState(initialStateForm);
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);



  const handleDetail = (event) => {
    const { name, value } = event.target;    
    setForm({ ...form, detail: { ...form.detail, [name]: value }});
    errors[name] && setErrors(validate({ ...form, detail: { ...form.detail, [name]: value } }));
  };

    
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
    errors[name] && setErrors(validate({ ...form, [name]: value }));
  };


  const handleSwitchChange = (event) => {
    const { name, checked } = event.target;
    setForm({ ...form, [name]: checked });
  };

  const handleUpdateImage = async (event) => {
    const { files } = event.target;
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('upload_preset', 'users_photo');
    const { data } = await axios.post(`https://api.cloudinary.com/v1_1/dozwiqjh1/image/upload`, formData);
    setForm({ ...form, image: data.secure_url });
  };
  

  const handleClose = () => setIsOpen(false);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const hasErrors = validate(form);
    setErrors(hasErrors);

    if(!Object.values(hasErrors).length){
      const { data } = await axios.post('/pizzas', form);
        setForm(initialStateForm);    
        setIsOpen(true);
    };
  };




  return (
    <>
    <Box bgGradient="linear(to-l,#000000, #272727)"  height='100vh'>
        <Box display='flex' heigth='auto' width='96%' margin='0 auto' bg='#fff' border='1px solid black' borderRadius='6px' >
            <Box display="flex" flexDir='column' width='64%' >        
                <Box display='flex' alignItems='center' borderBottom='1px solid #545454b9' h='3.6rem' margin='1rem .4rem' pb='1rem' >
                    <FormLabel w='3.4rem' h='auto' fontWeight="bold" >Side name:</FormLabel>
                    <Input type='text' name='name' onChange={handleInputChange} w='40%' border='1px solid #545454b9' mr='1rem' />
                    {errors.name && <Text color="red">{errors.name}</Text>}
                    <FormLabel w='3.4rem' fontWeight="bold" >Side image:</FormLabel>
                    <Input type='file' name='image' onChange={handleUpdateImage} w='40%' border='1px solid #545454b9' h='2.6rem' pt='4px' cursor='pointer' />
                    {errors.image && <Text color="red" ml='1rem' >{errors.image}</Text>}
                </Box>
                
                <Grid templateColumns="repeat(3, 1fr)" templateRows='70% 4rem 1fr' width='100%' h='60%' color="black" >                    
                    
                    <GridItem  >
                        <RadioGroup ml='2rem' >
                            <FormLabel fontWeight="bold" >Type:</FormLabel>
                            <Stack display='flex' h='10rem' flexWrap='wrap' > 
                                <Radio onChange={handleDetail} name='subcategory' size="lg" border='1px solid #545454b9' value='sweet'>Sweet</Radio>
                                <Radio onChange={handleDetail} name='subcategory' size="lg" border='1px solid #545454b9' value='salad'>Salad</Radio>
                                <Radio onChange={handleDetail} name='subcategory' size="lg" border='1px solid #545454b9' value='icecream'>Ice cream</Radio>
                                <Radio onChange={handleDetail} name='subcategory' size="lg" border='1px solid #545454b9' value='dip'>Dip</Radio>
                            </Stack>
                        </RadioGroup>
                        {errors.subcategory && <Text color="red">{errors.subcategory}</Text>}
                    </GridItem>

                    <GridItem >
                        <Box gap='0 1rem' mb='1rem' ml='2rem' >
                            <FormLabel htmlFor='price' fontWeight="bold" pt='3px' >Calories:</FormLabel>
                            <Input type='number' name='calories' onChange={handleDetail} border='1px solid #545454b9' htmlSize={2} width='30%' />
                        </Box>
                        <Box gap='0 1rem' ml='2rem' >
                            <FormLabel htmlFor='price' fontWeight="bold" pt='3px' >Fat:</FormLabel>
                            <Input type='number' name='fat' onChange={handleDetail} border='1px solid #545454b9' htmlSize={2} width='30%' />
                        </Box>                                
                    </GridItem>

                    <GridItem >
                        <Box gap='0 1rem' mb='1rem' ml='2rem' >
                            <FormLabel htmlFor='price' fontWeight="bold" pt='3px' >Carbs:</FormLabel>
                            <Input type='number' name='carbs' onChange={handleDetail} border='1px solid #545454b9' htmlSize={2} width='30%' />
                        </Box>
                        <Box gap='0 1rem' ml='2rem' >
                            <FormLabel htmlFor='price' fontWeight="bold" pt='3px' >Protein:</FormLabel>
                            <Input type='number' name='protein' onChange={handleDetail} border='1px solid #545454b9' htmlSize={2} width='30%' />
                        </Box>                                
                    </GridItem>

                    <GridItem gridColumn='1/-1' borderTop='1px solid #545454b9' m='0 .4rem' display='flex' alignItems='center' >
                        <Stack display='flex' alignItems='center' direction='row' >
                            <Box display='flex' gap='0 1rem' pl='4rem' pt='6px' >                            
                              <Switch size='lg' name='active' id='active' onChange={handleSwitchChange} />
                              <FormLabel fontWeight="bold" htmlFor='active' w='8rem' >Active (in stock)</FormLabel>                
                            </Box>
                            {
                                form.active && 
                                <Box display='flex'  gap='0 1rem' alignItems='center' pl='4rem' >
                                    <FormLabel htmlFor='price' fontWeight="bold" pt='3px' >Stock quantity:</FormLabel>
                                    <Input type='number' name='stock' value={form.stock} onChange={handleInputChange} border='1px solid #545454b9' htmlSize={2} width='30%' />
                                </Box>
                            }           
                        </Stack>
                    </GridItem>

                    <GridItem gridColumn='1/-1' gridRow='3/4' m='0 .4rem' h='100%' >                
                        <Box width='100%' borderTop='1px solid #545454b9' height='auto'  >                          
                          <FormLabel htmlFor='description' fontWeight="bold" m='1rem 0' >Description</FormLabel>
                          <Textarea name='description' border='1px solid #545454b9' onChange={handleDetail} ></Textarea>
                          {errors.description && <Text color="red" mb='1rem' >{errors.description}</Text>}
                        </Box>   
                    </GridItem>

                </Grid>
            </Box>
    

            
            
            <Box width='36%' height='70vh' display='flex' flexDirection='column' borderLeft='1px solid #545454b9'  >
                <CreatedSide form={form} setForm={setForm} ></CreatedSide>
                <Box display='flex' justifyContent='space-around' alignItems='center' mb='2rem' mr="2rem" ml="2rem">
                    <Box >
                        <FormLabel htmlFor='price' fontWeight="bold" >Price:</FormLabel>
                        <Input type='number' name='price' value={form.price} onChange={handleInputChange} border='1px solid #545454b9' htmlSize={2} width='50%' />
                        {errors.price && <Text color="red" mb='1rem' >{errors.price}</Text>}
                    </Box>
                    <Button onClick={handleSubmit} type="submit" hoverbg="black" borderRadius="full" fontSize='1.5rem' mt='1.4rem' padding="2rem 1.4rem" background="linear-gradient(to right, #f27833, #eab830)" >
                        Create new side
                    </Button>
                </Box>
            </Box>
        </Box>
         
        <Modal isOpen={isOpen} onClose={handleClose} >
          <ModalOverlay backdropFilter='blur(6px)' bg='#000000b6' />
          <ModalContent margin='auto'  >
          <ModalCloseButton/>
            <Image src={ok} alt="ok" h='2.8rem' objectFit='contain' mt='1rem' mb='0' />
            <ModalHeader textAlign='center' fontSize='1.8rem' p='0' >Side created successfully!</ModalHeader>
            <ModalBody textAlign='center' fontSize='1.4rem' >
            <Link to='/allpizzas' ><Button mt='.6rem' fontSize='1.4rem' bg={"orange.400"} color={"white"} _hover={{ bg: "orange.500" }} onClick={handleClose} >Go to menu</Button></Link>
            <Text>or</Text>
            <Link to='/createProduct' ><Button mb='.6rem' fontSize='1.4rem' bg={"orange.400"} color={"white"} _hover={{ bg: "orange.500" }} onClick={handleClose} >Add more items</Button></Link>
            </ModalBody>
          </ModalContent>
        </Modal>
    </Box>
    </>
  );
};

export default CreateSideAdmin;
