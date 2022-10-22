
// Validação de usuário e senha da página de login
function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == "admin" && senha == "admin") {
    window.location.href='CadUsuarios.html';
  } else {
    alert("Usuário ou senha incorretos");
  }
}

function link() {
  alert("Contate o administrador do sistema \nEmail: suporte@bigboom.com.br\nTel.: 81 9 9999 0099")
}