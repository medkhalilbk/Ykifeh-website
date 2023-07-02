
function isPhoneNumber(str) {
    // Remove any non-digit characters from the string
    const phoneNumber = str.replace(/\D/g, '');
  
    // Check if the resulting string is of length 10 (assuming a 10-digit phone number format)
    return phoneNumber.length === 10;
  }

  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  
  export async function checkForm({mail,phone}){

try {
    if(!isValidEmail(mail)){
       throw "invalid Form"
    }
    if(!isPhoneNumber(phone)){
        throw "invalid phone"
    }
} catch (error) {
    
}

  }