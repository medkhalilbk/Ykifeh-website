import React from 'react'
import { Container, Text } from '@chakra-ui/react'


const style = {
  backgroundImage : "http://localhost:3000/emoji3.png"
}



function Subscription() {
  return (
    <Container maxW={'3xl'} style={{backgroundColor:'red'}} >
      <div >Install now
    <Text fontSize={'6xl'} >
    Call to Action
Section</Text></div>
    </Container>
  )
}

export default Subscription