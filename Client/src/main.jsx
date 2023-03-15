import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { extendTheme } from '@chakra-ui/react';
import { Provider } from "react-redux";
import store from "./redux/store";
import {
  ChakraProvider,
  theme as chakraTheme,
} from '@chakra-ui/react';

const colors = {
  brand: {
    blacklight: "#272727",
    blackdark: "#000000",
    orange: "#f27825",
    yellow: "#eab830",
    white: "#ffffff",
  },
}

const theme = extendTheme({ 
  colors,
  ...chakraTheme
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <ChakraProvider theme={theme}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </ChakraProvider>
);
