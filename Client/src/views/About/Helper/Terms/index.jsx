import { Box, Text, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";
import { useState } from "react";


const Terms = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleOpenPrivacyModal = () => {
    setIsPrivacyOpen(true);
  };

  const handleClosePrivacyModal = () => {
    setIsPrivacyOpen(false);
  };

  return (
    <Box p={8} bgGradient="linear-gradient(to right, #f27825, #eab830)">
      <Box mt={8} mb={12} textAlign="center">
        <Text fontSize="3xl" fontWeight="bold" color="white">Try the best pizzas created to your style with Mix2Pizza</Text>
        <Text fontSize="xl" color="#272727" mt={4}>We have a wide variety of ingredients to taste.</Text>
        <Text fontSize="xl" color="#272727" mt={4}>Made with love for you.</Text>
      </Box>

      <Flex justifyContent="center">
      <Box mr={4} onClick={handleOpenModal} cursor='pointer'>
        <Text fontSize="lg" fontWeight="bold" color="white">
          Terms of Service
        </Text>
      </Box>

      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader cursor='pointer'>Terms of Service</ModalHeader>
          <ModalCloseButton />
          <ModalBody >
            <p style={{ marginBottom: "0.5rem"}}>Terms and Conditions of Pizza Ecommerce:</p>
            <ol style={{ marginBottom: "0.5rem" }}>
              <li style={{ marginBottom: "0.5rem" }}>Orders: All orders placed through our ecommerce platform are subject to our acceptance. We reserve the right to reject any order.</li>
              <li style={{ marginBottom: "0.5rem" }}>Payment: Payment must be made in full at the time of ordering. We accept credit and debit cards.</li>
              <li style={{ marginBottom: "0.5rem" }}>Delivery: We will make every effort to deliver your pizza within the estimated delivery time. However, delivery times are not guaranteed and may be affected by factors outside of our control.</li>
              <li style={{ marginBottom: "0.5rem" }}>Returns: We do not offer returns or refunds for pizzas ordered through our ecommerce platform. If you are unsatisfied with your order, please contact us to discuss a possible solution.</li>
              <li style={{ marginBottom: "0.5rem" }}>Liability: We are not responsible for any loss or damage that may occur as a result of ordering through our ecommerce platform, including but not limited to delivery delays, product defects, or unauthorized use of your credit or debit card.</li>
            </ol>

            <p style={{ marginBottom: "0.9rem" }} >By placing an order through our ecommerce platform, you agree to these terms and conditions.</p>
          </ModalBody>
        </ModalContent>
      </Modal>


     
      <Box mr={4} onClick={handleOpenPrivacyModal} cursor='pointer'>
        <Text fontSize="lg" fontWeight="bold" color="white">
          Privacy
        </Text>
      </Box>

      <Modal isOpen={isPrivacyOpen} onClose={handleClosePrivacyModal}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontWeight="bold">Privacy Policy</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ul>
            <li style={{ marginBottom: "0.5rem" }} >  We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and disclose your information when you use our ecommerce platform.</li>

            <li  >Information We Collect:</li> 

              <p style={{ marginBottom: "0.9rem" }}> We collect information that you provide to us when you place an order, including your name, lastname, address, payment method and birthday.</p>
              </ul>
            </ModalBody>
            </ModalContent>
      </Modal>

      </Flex>
    </Box>
  );
};

export default Terms;
