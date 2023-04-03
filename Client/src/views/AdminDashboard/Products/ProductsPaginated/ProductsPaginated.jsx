import { useEffect, useState } from "react";
import { Button, Link, Text } from "@chakra-ui/react";

const ProductsPaginated = ({ products, productsPerPage, paginated }) => {
  const pageNumber = [];
  for (let i = 1; i <= Math.ceil(products / productsPerPage); i++) {
    // aca se me guarda cuantas paginaciones va a tener mi paginado. En este caso son 250 paises/ 10 = 25 paginas
    pageNumber.push(i);
  }

  // const scroll = () => {
  //     window.scroll({
  //         top: 100,
  //         behavior: 'smooth'
  //       })
  // }

  const [current, setCurrent] = useState(1);
  const clickHandlerNext = () => {
    setCurrent(current + 1);
    paginated(current + 1);
  };

  const clickHandlerPrevious = () => {
    setCurrent(current - 1);
    paginated(current - 1);
  };

  const clickHandlerLast = () => {
    const lastProduct = pageNumber.length - 0;
    setCurrent(lastProduct);
    paginated(lastProduct);
  };

  useEffect(() => {
    products && setCurrent(1);
    products && paginated(1);
  }, [products]);

  return (
    <>
      <div>
        {current > 1 && (
          <Button
            borderRadius="10px"
            padding="10px"
            margin="10px"
            background="linear-gradient(to right, #f27833, #eab830)"
            fontFamily="Montserrat"
            onClick={clickHandlerPrevious}
          >
            Previous
          </Button>
        )}
        {pageNumber.length && (
          <a>
            {current} of {pageNumber.length}
          </a>
        )}
        {current < pageNumber.length && (
          <Button borderRadius="10px" padding="10px"
          margin="10px" background="linear-gradient(to right, #f27833, #eab830)"
          fontFamily="Montserrat" onClick={clickHandlerNext}>
            Next
          </Button>
        )}
        {pageNumber.length > 2 && current < pageNumber.length - 1 && (
          <Button borderRadius="10px" padding="10px"
          margin="10px" background="linear-gradient(to right, #f27833, #eab830)"
          fontFamily="Montserrat" onClick={clickHandlerLast}>
            Last
          </Button>
        )}
      </div>
    </>
  );
};
export default ProductsPaginated;
