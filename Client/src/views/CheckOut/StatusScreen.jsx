import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";

const StatusScreen = ({ payment_id, showStatusScreen }) => {
  const mp = new MercadoPago("TEST-8b8bf3cf-ef4b-4d5d-b043-44e85e071a79");
  const bricksBuilder = mp.bricks();

  const renderStausScreenBrick = async (bricksBuilder) => {
    const settings = {
      initialization: {
        paymentId: payment_id, // id de pago generado por Mercado Pago
      },
      callbacks: {
        onReady: () => {
          // callback llamado cuando Brick está listo
        },
        onError: (error) => {
          // callback llamado para todos los casos de error de Brick
        },
      },
    };
    window.statusBrickController = await bricksBuilder.create(
      "statusScreen",
      "statusScreenBrick_container",
      settings
    );
  };

  if (showStatusScreen) {
    renderStausScreenBrick(bricksBuilder);
  }

  return <Box id="statusScreenBrick_container" />;
};

export default StatusScreen;
