function enviarFormulario(event) {
  event.preventDefault();

  let sentimento = document.getElementById("sentimento").value;

  if (sentimento.trim() === "") {
    alert("Por favor, preencha o campo antes de enviar.");
    return;
  }

  // Redireciona pra página de obrigado
  window.location.href = "obrigado.html";

}