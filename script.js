// SELECT ELEMENTS
let emailInput = document.querySelector("#emailInput");
let resultMessage = document.querySelector("#resultMessage");
let emailForm = document.querySelector("#emailForm");

// EVENT TO ACTIVATE AFTER SUBMIT
emailForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let email = emailInput.value;
    let isValid = validateEmail(email);

    if(isValid) {
        resultMessage.innerHTML = "Cadastrado com sucesso!";
        resultMessage.style.color = "green";
    } else {
        resultMessage.innerHTML = "Endereço de Email Inválido";
        resultMessage.style.color = "red";
    }
});

// FUNCTION TO VALIDATE EMAIL
let validateEmail = (email) => {
    let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+$/;
    return regex.test(email);
}