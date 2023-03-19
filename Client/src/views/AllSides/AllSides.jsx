import { Box, Flex } from "@chakra-ui/react";
import SidesContainer from "../../components/SidesContainer/SidesContainer";
import SubNavBar from "../../components/SubNavBar/SubNavBar";
import SortSelect from "../../components/Sorters/SortSelect";
import Filters from "../../components/Filters/Filters";

const AllSides = () => {
    return (
        <Flex bgGradient="linear(to-l,#000000, #272727)">
            <Box position="absolute" zIndex="10" w="100%">
                <SubNavBar />
            </Box>
            
            {/* ACA NO VAN ESTOS FILTROS, LOS PUSE COMO EJEMPLO PARA CUANDO PONGAMOS LOS QUE SI VAN! */}
            {/* ACA NO VAN ESTOS FILTROS, LOS PUSE COMO EJEMPLO PARA CUANDO PONGAMOS LOS QUE SI VAN! */}
            <Box flex="0 0 auto" ml="2.5rem" pt="100px">
                <SortSelect
                    Sort={[
                        "A-Z",
                        "Z-A",
                        "Price: Low to high",
                        "Price: High to low",
                        "Avg. customers reviews",
                    ]}
                    // selectedSort={selectedSort}
                    // setSelectedSort={setSelectedSort}
                />
                <Box mt="1rem">
                    <Filters />
                </Box>
            </Box>
            <Box flex="1 1 auto" pt="100px" mr="2rem" ml="2rem">
                <SidesContainer />
            </Box>
        </Flex>
    );
};

export default AllSides;
