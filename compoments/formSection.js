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
        <FormLabel>Telephone</FormLabel>
        <Input type="number" value={phone} onChange={handleChange} placeholder="+216 123 123 123" />
        {!sent && <Button
          disabled={sent}
          onClick={() => submitForm()}
          marginTop="5"
          width="25%"
          marginTop="12"
          textAlign="center"
          colorScheme="teal"
          variant="outline" 
        >
          Button
        </Button>}
      
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
