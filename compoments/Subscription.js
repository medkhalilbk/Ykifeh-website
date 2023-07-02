import React from 'react'
import { Container, Text } from '@chakra-ui/react'


const style = {
  backgroundImage : "http://localhost:3000/emoji3.png"
}



function Subscription() {
  return (
    <Container maxW={'6xl'}   textAlign="center" marginTop={"12"} >
      <div >Join on community
    <Text fontSize={'6xl'} fontWeight={"bold"}  >
     Subscribe {<br/>} and get the latest updates</Text></div>
    </Container>
  )
}

export default Subscription