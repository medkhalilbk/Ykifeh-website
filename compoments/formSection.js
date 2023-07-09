import React from 'react';
import { Alert , AlertIcon , Box , AlertTitle , AlertDescription,CloseButton ,  Button, Container, FormControl, FormLabel, Input } from '@chakra-ui/react';
import { useState } from 'react';
function FormSection() {
  const [res, setRes] = useState(null);
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [sent , setSent] = useState(false)
  const handleChange = (e) => {
    setPhone(e.target.value);
  };

  function submitForm() {
    console.log(phone);
    setSent(true)
  }

  return (
    <Container >
      <FormControl isRequired marginTop="12" marginBottom="12">
        <FormLabel>Email</FormLabel>
        <Input placeholder="hello@ykifeh.tn" />
           {!sent && 
           <div style={{justifyItems:'center'}} >
           <Button
          disabled={sent}
          
          onClick={() => submitForm()}
          margin={'auto'}
          marginTop="5"
          width="100%" 
          textAlign="center"
          colorScheme="blue"
          variant="outline"   
        >
          Subscribe
        </Button>
        </div>}
      
      </FormControl>
     {sent &&      <Alert status='success'>
      <AlertIcon />
      <Box>
        <AlertTitle>Success!</AlertTitle>
        <AlertDescription>
          Your application has been received, you are added to our subscribers.
        </AlertDescription>
      </Box>
      <CloseButton
        alignSelf='flex-start'
        position='relative'
        right={-1}
        top={-1}
     
      />
    </Alert>}
    </Container>
  );
}

export default FormSection;
