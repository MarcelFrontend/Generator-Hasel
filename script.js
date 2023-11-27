const randomPasswordText = document.getElementById("randomPassword");
const newPasswordBtn = document.getElementById("newPassword");
const savePasswordBtn = document.getElementById("savePassword");

const lowerCase = "abcdefghijlmnouprstuwyz";
const upperCase = lowerCase.toUpperCase();
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|\:<>,./?";
const allChars = lowerCase + upperCase + numbers + symbols;

const passwordLength = 28;

function generateRandomPassword(){
    let password = "";
    while(password.length < passwordLength){
        password += allChars[Math.floor(Math.random() * allChars.length)];

    }
    randomPasswordText.value = password;
}
// function savePassword(){
//     localStorage.setItem("password", randomPasswordText.value);
// }

newPasswordBtn.addEventListener("click", ()=>{
    generateRandomPassword();
});

// savePasswordBtn.addEventListener("click", ()=>{
//     savePassword();
// });