import React from 'react'
import { Text } from '@chakra-ui/react'
import { Image } from '@chakra-ui/react'
function Section() {
  return (
    <div className='text-1' style={{textAlign:'center'  , marginTop:'2%' }} >
        
        <Text fontSize='1xl'>Corem ipsum dolor sit </Text>
        <Text fontSize={'2xl'} > Forem ipsum dolor sit amet consectetur </Text>
        <div data-aos="fade-up"
     data-aos-duration="3000" style={{ position: 'relative', height: 600 }}>
      <img src="phone.png" alt="Phone" style={{ height: '100%', margin: 'auto' }} />
      <img src="emojis.png" alt="Emojis" style={{  position: 'absolute' ,top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
    </div>
    
    <div data-aos="zoom-in" style={{ position: 'relative', height: 600 , marginTop:150 }}>
      <img src="phone2.png" alt="Phone" style={{ height: '100%', margin: 'auto' }} />
      <img src="emoji2.png" alt="Emojis" style={{ height:'60%', position: 'absolute' ,top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <Text  fontSize={'2xl'} fontWeight={200} margin={"auto"} width={'100%'} marginTop={'-140'}  zIndex={0} align={'center'}> 
      Corem ipsum dolor sit 
    </Text>
      <Text  fontSize={{ base: '24px', md: '40px', lg: '48px' }} fontWeight={900} margin={"auto"} width={'60%'} marginTop={''}  zIndex={2} align={'center'}> 
Forem ipsum dolor sit amet consectetur
    </Text>
    </div>  
    <div data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500" style={{ position: 'relative', height: 600 , marginTop:150 }}>
      <img src="phone3.png" alt="Phone" style={{ height: '100%', margin: 'auto' }} />
      <img src="emoji3.png"  alt="Emojis" style={{ height:'60%', position: 'absolute' ,top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
      <Text  fontSize={'2xl'} fontWeight={200} margin={"auto"} width={'100%'} marginTop={'-140'}  zIndex={0} align={'center'}> 
      Corem ipsum dolor sit 
    </Text>
      <Text  fontSize={{ base: '24px', md: '40px', lg: '48px' }} fontWeight={900} margin={"auto"} width={'60%'} marginTop={''}  zIndex={2} align={'center'}> 
Forem ipsum dolor sit amet consectetur
    </Text>
    </div>  
  
    </div>

    
  )
}

export default Section