document.getElementById("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;
  var gender = document.getElementById("gender").value;

  if (!name || !email || !gender) {
    document.getElementById("errorMessageContainer").style.display = "block";
    document.getElementById("errorMessage").innerHTML =
      "Por favor, preencha todos os campos obrigatórios";
    return;
  }

  document.getElementById("thankYouMessageContainer").style.display = "block";
  document.getElementById("form").style.display = "none";
});

alert('Clique em "OK" para acessar a página');

const form = document.querySelector("#form");
const thankYouMessageContainer = document.querySelector(
  "#thankYouMessageContainer"
);
const thankYouMessage = document.querySelector("#thankYouMessage");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  if (confirm("Tem certeza que deseja enviar o formulário?")) {
    thankYouMessageContainer.style.display = "block";
  }
});



var sobrenome = prompt("Qual é o seu sobrenome?");
var nome = prompt("Qual é o seu nome?");

alert("Nome completo: " + nome + " " + sobrenome);