// Array de usuários com login e senha.
var usuarios = [
  {
    login: 'eu_gustavodias',
    pass: 'senhasegura'
  },
  {
    login: 'line_nogueira',
    pass: '123'
  },
  {
    login: 'milena_s',
    pass: '@2023@'
  }
];

// Função para limpar campos de usuário e senha.
function limparCampos() {
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';
}

// Verificação para efetivar o login.
function logar() {
  var username = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // Verifica se o par de login e senha corresponde a algum usuário.
  var usuarioEncontrado = usuarios.find(function (usuario) {
    return usuario.login === username && usuario.pass === password;
  });

  if (usuarioEncontrado) {

    location.href = '../jogoMario/index.html';
    // Redireciona o usuário para a página do jogo.
  } else {
    alert('Usuário ou senha incorretos');
    limparCampos();
    // Informa erro caso o usuário forneça dados inválidos.
  }
}


// Modal de Recuperação de senha.

document.addEventListener("DOMContentLoaded", function() {
  // Pega a propriedade modal.
  var modal = document.getElementById("myModal");
  
  // Pega a propriedade do botão que abre o modal.
  var btn = document.getElementById("forgotPasswordLink");
  
  // Pega a propriedade <span> que fecha o modal.
  var span = document.getElementsByClassName("close")[0];
  
  // Quando o usuário clica no botão, abre o modal e impede o comportamento padrão do link.
  btn.onclick = function(event) {
      event.preventDefault();
      modal.style.display = "block";
  }
  
  // Tripla validação de fechamento / cancelamento modal. 
  // Quando o usuário clica em <span> (x), fecha o modal.
  span.onclick = function() {
      modal.style.display = "none";
  }

  btncancelar.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "none";
  }
  
  // Quando o usuário clica fora do modal, ele também fecha.
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
});