import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { extendTheme } from "@chakra-ui/react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

// import store from "./redux/store";
// import store, { persistor } from "./redux/store";
import { store, persistor } from "./redux/store";

import { ChakraProvider, theme as chakraTheme } from "@chakra-ui/react";
import { AuthProvider } from "./context/AuthProvider";
import axios from "axios";

const colors = {
  brand: {
    blacklight: "#272727",
    blackdark: "#000000",
    orange: "#f27825",
    yellow: "#eab830",
    white: "#ffffff",
  },
};

const theme = extendTheme({
  colors,
  ...chakraTheme,
});
  axios.defaults.baseURL = `https://grupo-3-back-production.up.railway.app`;
//axios.defaults.baseURL = `http://localhost:3001`;
ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AuthProvider>
            <App />
          </AuthProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </ChakraProvider>
);
