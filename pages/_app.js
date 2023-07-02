import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from '@chakra-ui/react';
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const theme = extendTheme({
    styles: {
      global: () => ({
        body: {
          bg: "#0D0D0D",
        },
      }),
    },
  });
 const MyApp = ({ Component, pageProps }) => {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      mirror:true,
      offset: 50,
    });
  }, []);

 return (
 <ChakraProvider theme={theme}>
 <Component {...pageProps} />
 
 </ChakraProvider>
 );
 }
 
 export default MyApp;