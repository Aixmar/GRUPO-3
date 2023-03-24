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

    useEffect(  ()=> {
        axios.put(`/pizzas/${props.id}`, {active:active})
        .then()
    },[active])
    return (
        <Flex padding="20px" border="1px solid black">
            <Text>{props.id}</Text>
            <Image w="45px" src={props.image} alt={props.name} />
            <Text>{props.name}</Text>
            <Text>{props.price}</Text>
            <Text paddingLeft="10px">{props.stock}</Text>
            {
                active === false ? <IconButton icon={<FcApproval />} onClick={clickHandlerDisable}></IconButton> :
                    <IconButton icon={<FcCancel />} onClick={clickHandlerDisable}></IconButton>
            }
           

        </Flex>
    )
}
export default ProductCard