const registerButton = document.querySelector("#registerButton")
let loginButton = document.querySelector('#loginButton')
const emailLogin = document.getElementById("emailLogin")
const senhaLogin = document.getElementById("senhaLogin")


loginButton.addEventListener('click', ()=>{
    console.log("SSSSSSSSS")
    window.location.href = "../pages/cart.html"
});

registerButton.addEventListener('click', ()=>{
    window.location.href = "../mainPage.html"
});