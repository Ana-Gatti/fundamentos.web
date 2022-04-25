
let nome = window.document.getElementById("nome")
let email = document.querySelector("#email")
let nomeOk = false
let emailOk = false


function validaNome() {

   let txtNome = document.querySelector("#txtNome")
   if (nome.value.length < 3) {
      txtNome.innerHTML = "Digite um Nome Válido"
      txtNome.style.color = "red"
   } else {
      nomeOk = true
   }

}

function validaEmail() {
   let txtEmail = document.querySelector("#txtEmail") 

   if (email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 ) {
      txtEmail.innerHTML = "Digite um e-mail válido"
      txtEmail.style.color = "red"
   } else {
      emailOk = true
   }
}

function cadastrar() {
   if (nomeOk == true && emailOk == true) {
      alert ("Cadastro feito com sucesso!")
   }
}