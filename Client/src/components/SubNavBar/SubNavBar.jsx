import { Flex, Button, Box } from "@chakra-ui/react";
import { Link, Link as RouterLink} from "react-router-dom";

function SubNavbar() {
  return (
    <Flex
      direction='row'
      padding="1rem"
      bgGradient="linear-gradient(to right, #f27825, #eab830)"
      color="white"
      justifyContent='center'
      gap='20rem'
    >
        
        <Link  as={RouterLink} to="/allpizzas">
          <Button color="#f27825" bgGradient="linear(to-l,#000000, #272727)" borderRadius="full">
              Pizzas
          </Button>
        </Link>
        
        <Link as={RouterLink} to="/alldrinks">
          <Button bgGradient="linear(to-l,#000000, #272727)" color="#f27825" borderRadius="full" >
            Drinks
          </Button>
        </Link>
        
        <Link as={RouterLink} to="/allsides">
          <Button bgGradient="linear(to-l,#000000, #272727)" color="#f27825" borderRadius="full">
            Sides
          </Button>
        </Link>
    </Flex>
  );
}

export default SubNavbar;
