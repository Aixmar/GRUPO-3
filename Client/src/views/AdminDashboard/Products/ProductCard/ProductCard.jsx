import { Flex, IconButton, Image, Text,Button } from "@chakra-ui/react"
import { FcApproval, FcCancel } from "react-icons/fc"
import { useEffect, useState } from "react"
import axios from "axios"

const ProductCard = (props) => {

    const [active, setActive] = useState(props.active)
    
    const clickHandlerDisable = async() => {
        if(!active) setActive(true)
        else{setActive(false)}

    }

    useEffect(()=> {
        axios.put(`/pizzas/${props.id}`, {active:active})
        .then()
    },[active])
    return (
        <Flex padding="20px" border="1px solid black">
            <Text marginRight={10}>{props.id}</Text>
            <Image w="45px" src={props.image} marginRight={5} alt={props.name} />
            <Text marginRight={10}>{props.name}</Text>
            <Text marginRight={5}>${props.price}</Text>
            <Text paddingLeft="10px" marginRight={5}>{props.stock} prod.</Text>
            {
                active === false ? <IconButton icon={<FcApproval />} onClick={clickHandlerDisable}></IconButton> :
                    <IconButton icon={<FcCancel />} onClick={clickHandlerDisable}></IconButton>
            }
           

        </Flex>
    )
}
export default ProductCard