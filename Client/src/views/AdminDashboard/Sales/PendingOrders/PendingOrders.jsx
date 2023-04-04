import {
  Box,
  Heading,
  Flex,
  Text,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Image,
} from "@chakra-ui/react";
import axios from "axios";
import { useState } from "react";
import { deleteOrders, getOrders } from "../../../../redux/actions";
import { useDispatch } from "react-redux";

const PendingOrders = (props) => {
  const { orders } = props;
  const dispatch = useDispatch()

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(10);
  const lastProduct = currentPage * productsPerPage; // indice 10 // cuando currentPage sea 2, indice va a ser 20
  const firstProduct = lastProduct - productsPerPage; // indice 0 // cuando currentPage sea 2, indice va a ser 10
  //const currentProducts = products.slice(firstProduct, lastProduct) // me va a slicear del indice 0 al indice 9 // cuando currentPage sea 2, slicea del indice 10 al 19
  
  const handlerOnClick = (id) => {
      const { data } = axios.delete(`/orders/${id}`)
      const orderdelete = orders.filter((order) => order.id !== id)
      console.log(orderdelete);
      dispatch(deleteOrders(orderdelete))
  };

  const paginated = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  return (
    <Box width="100%" maxWidth="1500px" color="white">
      <Heading marginBottom={5} marginTop={10} color="#f27825">
        Pending Orders
      </Heading>
      {orders.length !== 0 ? (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th color="white" scope="col">
                  CLIENT
                </Th>
                <Th color="white" scope="col">
                  ORDER
                </Th>
                <Th color="white" scope="col">
                  DONE
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((sale) => {
            
                let otros = sale.products.slice(1);
                return (
                        <>
                      <Tr color="white">
                        <Td rowspan={sale.products.length}>{sale.userName}</Td>
                        <Td>
                          {sale.products[0].name} x {sale.products[0].quantity}
                        </Td>
                      
                        <Button onClick={() => handlerOnClick(sale.id)} mx="2rem" color="black">
                            Done
                        </Button>
                      
                      </Tr>

                      {otros.map((p) => {
                        return (
                          <Tr>
                            <Td>
                              {p.name} x {p.quantity}
                            </Td>
                          </Tr>
                        );
                      })}
                  </>
                );
              })}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <Text fontWeight="bold" color="white">
          There is no order
        </Text>
      )}
    </Box>
  );
};
export default PendingOrders;
