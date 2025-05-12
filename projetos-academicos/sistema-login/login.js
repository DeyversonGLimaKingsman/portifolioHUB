document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Obter valores dos campos
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Definir credenciais válidas (exemplo)
    const validUsername = "admin";
    const validPassword = "123456";

    // Validar login
    if (username === validUsername && password === validPassword) {
        alert("Login bem-sucedido!");
        // Aqui você pode redirecionar ou fazer outras ações, ex: window.location.href = "home.html";
    } else {
        document.getElementById('error-message').style.display = "block"; // Exibe mensagem de erro
    }
});