import { Box } from "@chakra-ui/react";
import { useState } from "react";
import StatusScreen from "./StatusScreen";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios'
import { useAuthProv } from "../../context/AuthProvider";
import { clearCartUser } from "../../redux/actions";
import { Spinner } from "@chakra-ui/react";



const InfoPayment = () => {
  const mp = new MercadoPago("TEST-70064824-0e86-4690-a60d-7c2ff56441f8");
  const bricksBuilder = mp.bricks();
  const cart = useSelector((state) => state.cart) || [];
  const [paymentId, setPaymentId] = useState("123456789");
  const [showStatusScreen, setShowStatusScreen] = useState(false);
  const [statusPayment, setStatusPayment] = useState('');
  const [ dataResponse, setdataResponse] = useState();
  const dispatch = useDispatch()
  const { user } = useAuthProv();
  const updateCartUser = { cart: cart , userId: user.id };
  const [loader, setLoader] = useState(false);


  
  const cartMail = cart.map((product) => {
    return {
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };
  });


  const formMail = {
      items: cartMail,
      name: user.name || user.displayName,
      email: user.email,
    }


  const totalPrice = cart.reduce((total, item) => total + item.price*item.quantity, 0) || 0;


  const cartSale = {
    total: totalPrice,
    products: cart.length ? cart : null,
    userName : user.name + ' ' + user.lastName
  }


  useEffect(() => {
    setLoader(true);
    setTimeout(() => setLoader(false), 3500);
  }, []);


  useEffect(() => {
    if (statusPayment === 'approved') {
      axios.post('/sendmail/buyitem', formMail )
      axios.put('/users/updateCartPurchase', updateCartUser )
      axios.post('/sales', cartSale)

      dispatch(clearCartUser())
    }
  },[paymentId])
  

  const renderCardPaymentBrick = async (bricksBuilder) => {
    const settings = {
      initialization: {
        amount: totalPrice, // monto a ser pago
      },
      callbacks: {
        onReady: () => {
          /*
            Callback llamado cuando Brick esté listo.
            Aquí puedes ocultar loadings de su sitio, por ejemplo.
          */
        },
        onSubmit: (cardFormData) => {
          // callback llamado cuando el usuario haga clic en el botón enviar los datos
          // console.log(JSON.stringify(cardFormData));
          // ejemplo de envío de los datos recolectados por el Brick a su servidor
          return new Promise((resolve, reject) => {
            fetch("https://grupo-3-back-production.up.railway.app/process_payment", {
           // fetch("http://localhost:3001/process_payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(cardFormData),
            })
              .then((response) => {
                // recibir el resultado del pago
                // console.log("Respuesta del servidor:", response);
                response.json().then((data) => {
                  // console.log("Datos de respuesta:", data);
                  setPaymentId(data.id);
                  setShowStatusScreen(true)
                  setStatusPayment(data.status);
                  setdataResponse(data)
                  resolve();
                  setLoader(true);
                  setTimeout(() => setLoader(false), 1000);
                });
              })
              .catch((error) => {
                // tratar respuesta de error al intentar crear el pago
                console.error("Error al enviar solicitud POST:", error);
                reject();
              });
            });
          },
          
          onError: (error) => {
            // callback llamado para todos los casos de error de Brick
            console.error(error);
          },
        },
      };
        
    const cardPaymentBrickController = await bricksBuilder.create(
      "cardPayment",
      "cardPaymentBrick_container",
      settings
    );
  };
  
  if (!showStatusScreen) renderCardPaymentBrick(bricksBuilder);

  return (
    loader ? <Box display='flex' justifyContent='center' alignItems='center' w='25rem' ><Spinner size='lg' /></Box>
    : (<Box>
      {!showStatusScreen && <Box w="25rem" id="cardPaymentBrick_container" />}

      { loader ? <Box display='flex' justifyContent='center' alignItems='center' w='25rem' ><Spinner size='lg' /></Box> 
      : showStatusScreen && (
        <StatusScreen
          loader={loader}
          setLoader={setLoader}
          payment_id={paymentId}
          showStatusScreen={showStatusScreen}
          />
      )}
      </Box>)
  
  );
};

export default InfoPayment;
