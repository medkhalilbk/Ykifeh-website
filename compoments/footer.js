import {
  Box,
  chakra,
  Container,
  Image,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden
} from "@chakra-ui/react"
import { FaInstagram, FaTwitter, FaYoutube, FaAppStore , FaGooglePlay } from "react-icons/fa"

const Logo = props => {
  return (
   <Image  src="logo.png" height={50} />
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
      rounded={"full"}
      w={8}
      h={8}
      cursor={"pointer"}
      as={"a"}
      href={href}
      display={"inline-flex"}
      alignItems={"center"}
      justifyContent={"center"}
      transition={"background 0.3s ease"}
      _hover={{
        bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200")
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("transaprent", "transaprent")}
      color={useColorModeValue("gray.700", "blue.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "space-between" }}
        align={{ base: "center", md: "center" }}
      >
        <Logo />
        <Text>© 2023 Ykifeh. All rights reserved</Text>
        <Stack direction={"row"} spacing={6}>
          <SocialButton label={"testing"} href={"#"}>
            <FaAppStore />
          </SocialButton>
          <SocialButton label={"YouTube"} href={"#"}>
            <FaGooglePlay />
          </SocialButton>
          <SocialButton label={"Instagram"} href={"#"}>
            <FaInstagram />
          </SocialButton>
        </Stack>
      </Container>
    </Box>
  )
}
