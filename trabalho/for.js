document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".clicar").addEventListener("click", function (event) {
        event.preventDefault(); // Evita o recarregamento da página

        // Captura os valores dos campos
        let nome = document.querySelector(".name").value.trim();
        let email = document.querySelector(".email").value.trim();
        let numero = document.querySelector(".numero").value.trim();
        let msg = document.querySelector(".msg").value.trim();

        // Validação básica dos campos
        if (!nome || !email || !numero || !msg) {
            alert("Por favor, preencha todos os campos!");
            return;
        }

        // Validação do email (formato correto)
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Por favor, insira um email válido!");
            return;
        }

        // Validação do número (formato brasileiro)
        let numeroRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
        if (!numeroRegex.test(numero)) {
            alert("Por favor, insira um número válido no formato (XX) XXXXX-XXXX ou XX XXXX-XXXX!");
            return;
        }

        // Exibe os dados preenchidos
        alert(`Dados enviados com sucesso!\n\nNome: ${nome}\nEmail: ${email}\nNúmero: ${numero}\nMensagem: ${msg}`);

    });
});
