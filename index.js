const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let generatePasswordsButtonEl = document.getElementById("generate-passwords-button-el")
let passwordOneEl = document.getElementById("password-one-el")
let passwordTwoEl = document.getElementById("password-two-el")
const passwordLength = 15

generatePasswordsButtonEl.addEventListener("click", function() {
    let passwordOne = getRandomString(passwordLength)
    let passwordTwo = getRandomString(passwordLength)
    console.log(passwordOne) 
    console.log(passwordTwo) 
    passwordOneEl.textContent = passwordOne
    passwordTwoEl.textContent = passwordTwo
})

function getRandomString(passwordLength) {
    let password = ""
    for (let i = 0; i < passwordLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length) 
        password += characters[randomIndex]
    }
    return password;
}

// function generate() {
//     let passwordOne = getRandomString(passwordLength)
//     let passwordTwo = getRandomString(passwordLength)
//     console.log(passwordOne) 
//     console.log(passwordTwo) 
//     passwordOneEl.textContent = passwordOne
//     passwordTwoEl.textContent = passwordTwo    
// }
