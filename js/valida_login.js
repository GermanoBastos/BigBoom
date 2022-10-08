
// Validação de usuário e senha da página de login
function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == "admin" && senha == "admin") {
    window.location.href='CadProdutos.html';
  } else {
    alert("Usuário ou senha incorretos");
  }
}

