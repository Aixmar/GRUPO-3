import { useEffect } from "react";
import Sides from "../Sides/Sides";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "../../redux/actions";
import { SimpleGrid } from "@chakra-ui/react";

const SidesContainer = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getPizzas());
    }, [dispatch]);

    const sides = useSelector((state) => state.pizzas);
    const OnlySides = sides.filter((items) => items.category === 'sides')

    return (
        <>

            <SimpleGrid columns={[2, 2, 4]} spacing={10}>
                {OnlySides.map(side => (
                    <Sides
                        key={side.name}
                        id={side.id}
                        name={side.name}
                        image={side.image}
                        price={side.price}
                    />
                ))}
            </SimpleGrid>

        </>
    )
}

export default SidesContainer