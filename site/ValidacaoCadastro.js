// Validação para usuário realizar o cadastro corretamente.
document.addEventListener("DOMContentLoaded", function () {
    var form = document.querySelector("form");
  
    form.addEventListener("submit", function (event) {
      var usernameInput = document.getElementById("username");
      var usernameValue = usernameInput.value;
  
      // Verificar se o campo de usuário está em branco ou contém apenas espaços em branco
      if (usernameValue.trim() === "") {
        alert("O campo de usuário não pode estar em branco.");
        event.preventDefault(); // Impede o envio do formulário
        return;
      }
  
      // Verificar se o campo de usuário contém pelo menos um caractere alfanumérico
      var alphanumericRegex = /[a-zA-Z0-9]/;
      if (!alphanumericRegex.test(usernameValue)) {
        alert("O campo de usuário deve conter pelo menos um número, símbolo ou letra.");
        event.preventDefault(); // Impede o envio do formulário
        return;
      }
  
      var passwordInput = document.getElementById("password");
      var passwordValue = passwordInput.value;
  
      // Verificar se o campo de senha está em branco
      if (passwordValue.trim() === "") {
        alert("O campo de senha não pode estar em branco.");
        event.preventDefault(); // Impede o envio do formulário
        return;
      }
    });
  });