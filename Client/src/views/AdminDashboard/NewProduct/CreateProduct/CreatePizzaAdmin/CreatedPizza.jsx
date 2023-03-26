import { Box, Image, Text } from "@chakra-ui/react";
import css from '../CreateProduct.module.css';
import { useSelector } from "react-redux";
import { bad, cookingpizza } from "../../../../../assets/CloudinaryImg";

const CreatedPizza = ({ form, setForm, toppings, setToppings, cheeses, setCheeses, meats, setMeats }) => {
    const { detail } = form;
    const { ingredients } = useSelector((state) => state);

    const removeTopping = (event) => {
        const { name } = event.target;
        const currentIngredient = (ingredients.find((ingr) => ingr.name === name));
        setForm({ ...form, 
            detail: { ...detail, toppingIngredients: detail.toppingIngredients.filter((topping) => topping !== currentIngredient.name) },
            price: form.price - currentIngredient.price
        });
        setToppings([ currentIngredient, ...toppings ]);
    };

    const removeCheese = (event) => {
        const { name } = event.target;
        const currentIngredient = (ingredients.find((ingr) => ingr.name === name));
        setForm({ ...form, 
            detail: { ...detail, cheeseIngredients: detail.cheeseIngredients.filter((topping) => topping !== currentIngredient.name) },
            price: form.price - currentIngredient.price
        });
        setCheeses([ currentIngredient, ...cheeses ]);
    };

    const removeMeat = (event) => {
        const { name } = event.target;
        const currentIngredient = (ingredients.find((ingr) => ingr.name === name));
        setForm({ ...form, 
            detail: { ...detail, meatIngredients: detail.meatIngredients.filter((topping) => topping !== currentIngredient.name) },
            price: form.price - currentIngredient.price
        });
        setMeats([ currentIngredient, ...meats ]);
    };
    


    return(
        <>
            <Box width='100%' height='100%' color='black' >
                <Box display='flex' height='6rem' justifyContent='space-around' mt='.4rem' ml='5rem' alignItems='center' >
                    <Text color='#f27825' fontSize='2.6rem' fontWeight='600' >New pizza..</Text>
                    <Image src={cookingpizza} alt='pizza' height='8.6rem' />
                </Box>

                <Box ml='2rem' height='1.6rem' ><Text color='#f27825' fontWeight='600' display='inline' >Dough: </Text><Text display='inline' ></Text>{form.detail.dough || <Text mr='12em' borderBottom='1px dashed #545454b9'></Text>}</Box>
                <Box ml='2rem' height='1.6rem' ><Text color='#f27825' fontWeight='600' display='inline' >Bake: </Text><Text display='inline' ></Text>{form.detail.type || <Text mr='12rem' borderBottom='1px dashed #545454b9' /> }</Box>
                <Box ml='2rem' height='1.6rem' ><Text color='#f27825' fontWeight='600' display='inline' >Base: </Text><Text display='inline' ></Text>{form.detail.base || <Text mr='12rem' borderBottom='1px dashed #545454b9' />}</Box>
                <Box ml='2rem' height='1.6rem' ><Text color='#f27825' fontWeight='600' display='inline' >Mozzarella: </Text><Text display='inline' ></Text>{form.detail.mozzarella || <Text mr='12rem' borderBottom='1px dashed #545454b9' />}</Box>
                
                <Box ml='2rem' mb='rem' >
                    <Text color='#f27825' mb='.4rem' fontWeight='600' >Toppings:</Text>
                    {
                        !detail.toppingIngredients.length && <Text mr='12rem' borderBottom='1px dashed #545454b9' height='2.4rem' /> ||
                        <Box display='flex' color='black' height='2.4rem' gap='10px' flexWrap='wrap' className={css.contSelectedToppings} >
                            {
                                detail.toppingIngredients?.map((topping, idx) => (
                                    <Text display='flex' alignItems='center' border='1px solid black' borderRadius='6px' p='0 8px' key={idx} >{topping}
                                        <Image name={topping} onClick={removeTopping} src={bad} alt='x' height='1.2rem' borderRadius='50%' _hover={{ transition: 'background .1s', background: 'black'}}  cursor='pointer' />
                                    </Text>))
                            }
                        </Box>
                    }
                </Box>

                <Box ml='2rem' mb='rem' >
                    <Text color='#f27825' mb='.4rem' fontWeight='600' >Cheeses:</Text>
                    {
                        !detail.cheeseIngredients.length && <Text mr='12rem' borderBottom='1px dashed #545454b9' height='2.4rem' /> ||
                        <Box display='flex' color='black' minHeight='2.4rem' gap='10px' flexWrap='wrap' className={css.contSelectedToppings} >
                            {
                                detail.cheeseIngredients?.map((cheese, idx) => (
                                    <Text display='flex' alignItems='center' border='1px solid black' p='6px 8px' borderRadius='6px' key={idx} >{cheese}
                                        <Image name={cheese} onClick={removeCheese} src={bad} alt='x' height='1.2rem' borderRadius='50%' _hover={{ transition: 'background .1s', background: 'black'}}  cursor='pointer' />
                                    </Text>))
                            }
                        </Box>
                    }
                </Box>

                <Box ml='2rem' mb='rem' >
                    <Text color='#f27825' mb='.4rem' fontWeight='600' >Meats:</Text>
                    
                    {    
                        !detail.meatIngredients.length && <Text mr='12rem' borderBottom='1px dashed #545454b9' height='2.4rem' /> ||
                        <Box display='flex' color='black' height='2.4rem' gap='10px' flexWrap='wrap' className={css.contSelectedToppings} >
                            {
                                detail.meatIngredients?.map((meat, idx) => (
                                    <Text display='flex' alignItems='center' border='1px solid black' borderRadius='6px' p='0 8px' key={idx} >{meat}
                                        <Image name={meat} onClick={removeMeat} src={bad} alt='x' height='1.2rem' borderRadius='50%' _hover={{ transition: 'background .1s', background: 'black'}}  cursor='pointer' />
                                    </Text>)) || 'jolasdfasdf'
                            }
                        </Box>
                    }
                </Box>
            </Box>
        </>
    )
};


export default CreatedPizza;