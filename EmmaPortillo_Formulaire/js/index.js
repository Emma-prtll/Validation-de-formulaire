// Récupération des éléments
const form = document.querySelector("form")
const inputEmail = document.querySelector("#email")
const inputLname = document.querySelector("#lname")
const inputFname = document.querySelector("#fname")
const inputSubject = document.querySelector("#subject")
const inputMessage = document.querySelector("#message")

// RegEx
const checkEmail = /^[a-z0-9][a-z0-9._-]+@[a-z0-9][a-z0-9._-]+\.[a-z]{2,7}$/i
const checkPhone = /^[+0][1-9]{2}\s?[0-9]{2,3}\s?[0-9]{2,3}\s?[0-9]{1,2}/
const checkLname = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/
const checkFname = /^[A-Z][a-zA-Z '.-]*[A-Za-z][^-]$/
const checkSubject = /\w/
const checkMessage = /\w/

let text = document.getElementById(`messageBox`)
let feedBack = document.getElementById(`feedBackContainer`)

// Fonction de vérification
function checkInput(exp, input) {
    const value = input.value.trim()

    if (exp.test(value)) {
        input.style.border = "2px solid green"
        text.textContent= input.name + " is valid !"
        return true
    } else if (value === "") {
        input.style.border = "none"
        text.textContent= input.name + " is empty !"
        return false
    } else {
        input.style.border = "2px solid red"
        text.textContent= input.name + " is not valid !"
        return false
    }
}


// Validation en temps réel
if(document.getElementById(`submit`) !== null){
inputEmail.addEventListener("input", () => checkInput(checkEmail, inputEmail))
inputLname.addEventListener("input", () => checkInput(checkLname, inputLname))
inputFname.addEventListener("input", () => checkInput(checkFname, inputFname))
inputSubject.addEventListener("input", () => checkInput(checkSubject, inputSubject))
inputMessage.addEventListener("input", () => checkInput(checkMessage, inputMessage))

// Validation au clic sur le bouton "Submit"
form.addEventListener("submit", function (event) {
    event.preventDefault() // Empêche le rechargement de la page

    const emailIsOk = checkInput(checkEmail, inputEmail)
    const lnameIsOk = checkInput(checkLname, inputLname)
    const fnameIsOk = checkInput(checkFname, inputFname)
    const subjectIsOk = checkInput(checkSubject, inputSubject)
    const messageIsOk = checkInput(checkMessage, inputMessage)

    if (emailIsOk && lnameIsOk && fnameIsOk && subjectIsOk && messageIsOk) {
        // Affiche le message de confirmation
        formDone.style.display = "flex"
        form.style.display = "none"
        feedBack.style.display = "none"

    } else {
        // Message d'erreur en cas de formulaire mal remplis
        alert("Please fill in all fields correctly!")
    }
})
}