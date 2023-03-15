import { extendTheme } from "@chakra-ui/react";

const navbarStyles = extendTheme({
  styles: {
    global: {
      "a": {
        color: "white",
        textDecoration: "none",
        _hover: {
          textDecoration: "underline",
        },
      },
    },
  },
  components: {
    Link: {
      baseStyle: {
        mx: 4,
      },
    },
  },
});

export default navbarStyles;
