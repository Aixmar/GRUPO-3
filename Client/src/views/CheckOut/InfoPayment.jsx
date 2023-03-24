import { Box } from "@chakra-ui/react";
import { useState } from "react";
import StatusScreen from "./StatusScreen";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import axios from 'axios'
import { useAuthProv } from "../../context/AuthProvider";


const InfoPayment = () => {
  const mp = new MercadoPago("TEST-8b8bf3cf-ef4b-4d5d-b043-44e85e071a79");
  const bricksBuilder = mp.bricks();

  const cart = useSelector((state) => state.cart) || [];
  const cartMail = cart.map((product) => {
    return {
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };
  });

  const { user } = useAuthProv();

  const formMail = {
      items: cartMail,
      name: user.name || user.displayName,
      email: user.email,
    }

  const totalPrice = cart.reduce((total, item) => total + item.price, 0) || 0;


  const [paymentId, setPaymentId] = useState("111111111");
  const [showStatusScreen, setShowStatusScreen] = useState(false);
  const [statusPayment, setStatusPayment] = useState('');
  const [ dataResponse, setdataResponse] = useState();

    console.log(dataResponse);

  useEffect(() => {
        if (statusPayment === 'approved') {
          axios.post('http://localhost:3001/sendmail/buyitem', formMail )
        }
  },[statusPayment])

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
          console.log(JSON.stringify(cardFormData));
          // ejemplo de envío de los datos recolectados por el Brick a su servidor
          return new Promise((resolve, reject) => {
            fetch("http://localhost:3001/process_payment", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(cardFormData),
            })
              .then((response) => {
                // recibir el resultado del pago
                console.log("Respuesta del servidor:", response);
                response.json().then((data) => {
                  console.log("Datos de respuesta:", data);
                  setPaymentId(data.id);
                  setShowStatusScreen(true)
                  setStatusPayment(data.status);
                  setdataResponse(data)
                  resolve();
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
    <Box>
      {!showStatusScreen && <Box w="25rem" id="cardPaymentBrick_container" />}
      {showStatusScreen && (
        <StatusScreen
          payment_id={paymentId}
          showStatusScreen={showStatusScreen}
        />
      )}
    </Box>
  );
};

export default InfoPayment;
