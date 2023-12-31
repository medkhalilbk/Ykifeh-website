import { mode } from '@chakra-ui/theme-tools';
import { extendTheme } from "@chakra-ui/react"

const styles = {
  global: props => ({
    body: {
      color: mode('gray.800', 'whiteAlpha.900')(props),
      bg: mode('gray.100', '#141214')(props),
    },
  }),
};

 

const theme = extendTheme({
  styles,
});

export default theme;