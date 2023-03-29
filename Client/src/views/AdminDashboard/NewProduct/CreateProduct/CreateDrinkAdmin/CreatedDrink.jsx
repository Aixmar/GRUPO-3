import { Box, Image, Text } from "@chakra-ui/react";
import css from '../CreateProduct.module.css';
import { useSelector } from "react-redux";
import { bad, cookingpizza } from "../../../../../assets/CloudinaryImg";

const CreatedDrink = ({ form, image }) => {



    return(
        <>
            <Box width='100%' height='100%' color='black' >
                <Box display='flex' height='4rem' justifyContent='space-around' alignItems='center' >
                    <Text color='#f27825' fontSize='2.2rem' fontWeight='600' >New drink..</Text>
                </Box>

                    <Box w='12rem' margin='0 auto' overflow='hidden' h='12rem' borderRadius='50%' border='1px solid #545454b9' >
                        <Image src={form.image} />
                    </Box>
                <Box ml='2rem' height='1.6rem' ><Text color='#f27825' fontWeight='600' display='inline' >Category: </Text><Text display='inline' ></Text>Drinks</Box>
                <Box ml='2rem' height='1.6rem' ><Text color='#f27825' fontWeight='600' display='inline' >Name: </Text><Text display='inline' ></Text>{form.name || <Text mr='12em' borderBottom='1px dashed #545454b9'></Text>}</Box>
                <Box ml='2rem' height='1.6rem' ><Text color='#f27825' fontWeight='600' display='inline' >Volume: </Text><Text display='inline' ></Text>{form.detail.volumen && `${form.detail.volumen} ml` || <Text mr='12rem' borderBottom='1px dashed #545454b9' /> }</Box>
                <Box ml='2rem' height='1.6rem' ><Text color='#f27825' fontWeight='600' display='inline' >Type: </Text><Text display='inline' ></Text>{form.detail.onSugar && form.detail.onSugar === 'nosugar' && 'No sugar' || form.detail.onSugar === 'sugar' && 'Sugar' || <Text mr='12rem' borderBottom='1px dashed #545454b9' />}</Box>
                <Box ml='2rem' height='1.6rem' ><Text color='#f27825' fontWeight='600' display='inline' >Stock: </Text><Text display='inline' ></Text>{ form.active && form.stock || <Text mr='12rem' borderBottom='1px dashed #545454b9' />}</Box>
                
            </Box>
        </>
    )
};


export default CreatedDrink;