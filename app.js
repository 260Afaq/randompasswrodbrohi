// const passwordBox = document.getElementById("password");
// const  length= 12;
 

// const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowerCase = "abcdefghijklmnopqrstuvwxyz";
// const number = "0123456789"
// const symbol = "@#$%^&*()-+{}[]<>/=";

// const allChars = upperCase+lowerCase+number+symbol;

// function createPassword(){
//     let password ="";
//      password += upperCase[Math.floor(Math.random()* upperCase.length)]; 
//      password += lowerCase[Math.floor(Math.random()* lowerCase.length)];
//      password += number[Math.floor(Math.random()* upperCase.length)] 
//      password += symbol[Math.floor(Math.random()* upperCase.length)];
     
//     while(length > password.length){
//         password += symbol[Math.floor(Math.random()*allChars.length];

//     }
//     passwordBox.value = 'password';
// }
// function copyPassword(){
//     passwordBox.select();
//     navigator.clipboard.writeText('copy');
// }
const passwordBox = document.getElementById("password");
const length = 12; // Corrected variable name from 'lenght' to 'length'

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%^&*()-+{}[]<>/=";

const allChars = upperCase + lowerCase + number + symbol;

function createPassword() {
    let password = "";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += number[Math.floor(Math.random() * number.length)]; // Corrected to use 'number.length'
    password += symbol[Math.floor(Math.random() * symbol.length)]; // Corrected to use 'symbol.length'
    
    while (password.length < length) { // Corrected to check if password length is less than 'length'
        password += allChars[Math.floor(Math.random() * allChars.length)]; // Corrected to close the parentheses
    }
    
    passwordBox.value = password; // Corrected to set the value to the generated password
}

function copyPassword() {
    passwordBox.select();
    navigator.clipboard.writeText(passwordBox.value) // Corrected to copy the actual password
        .then(() => {
            alert("Password copied to clipboard!"); // Optional: Alert the user
        })
        .catch(err => {
            console.error("Failed to copy: ", err); // Optional: Handle errors
        });
}