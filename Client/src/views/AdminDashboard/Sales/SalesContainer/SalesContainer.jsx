import { Box, Heading, Flex, Text,Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image } from "@chakra-ui/react"


import { useState } from "react"

const SalesContainer = (props) => {

    const { sales } = props

    const [currentPage, setCurrentPage] = useState(1)
    const [productsPerPage, setProductsPerPage] = useState(10)
    const lastProduct = currentPage * productsPerPage // indice 10 // cuando currentPage sea 2, indice va a ser 20
    const firstProduct = lastProduct - productsPerPage // indice 0 // cuando currentPage sea 2, indice va a ser 10
    //const currentProducts = products.slice(firstProduct, lastProduct) // me va a slicear del indice 0 al indice 9 // cuando currentPage sea 2, slicea del indice 10 al 19


    const paginated = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
    return (
        <Box width="100%" maxWidth="1500px" color="white">
            <Heading marginBottom={5} marginTop={10} color="#f27825">Sales</Heading>
            {sales.length !== 0 ? 
        <TableContainer>
  <Table variant='simple'>
    
    <Thead>
      <Tr>
        <Th color="white" scope="col">CLIENT</Th>
        <Th color="white" scope="col">ORDER</Th>
        <Th color="white" scope="col" isNumeric>TOTAL</Th>
        <Th color="white" scope="col" isNumeric>DATE</Th>
      </Tr>
    </Thead>
    <Tbody>
      {
        sales.map(sale =>{
            let otros = sale.products.slice(1)
            let date = sale.createdAt.slice(0,10)
            console.log(date);
            
          return(
            <>
            <Tr color="white">
                <Td rowspan={sale.products.length}>{sale.userName}</Td>
                <Td >{sale.products[0].name} x {sale.products[0].quantity}</Td>
                <Td rowspan={sale.products.length}>{sale.total}</Td>
                <Td rowspan={sale.products.length}>{date}</Td>
              </Tr>
            
              {otros.map(p => {
                return(
                  <Tr>
                    <Td>{p.name} x {p.quantity}</Td>
                  </Tr>
                )
              })}
            </>
              
          )
        })
      }
    </Tbody>
  </Table>
</TableContainer>
: <Text fontWeight='bold' color="white">There is not any sale</Text>
}   
        </Box>
    )
}
export default SalesContainer