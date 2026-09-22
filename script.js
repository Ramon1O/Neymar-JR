const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();

    if (nome === "") {
        alert("Digite seu nome antes de enviar.");
        return;
    }

    // Respostas corretas
    const respostasCorretas = {
        q1: "b",
        q2: "b",
        q3: "a",
        q4: "a",
        q5: "c"
    };

    let acertos = 0;

    // Verificar as respostas
    for (let pergunta in respostasCorretas) {

        const resposta = document.querySelector(
            `input[name="${pergunta}"]:checked`
        );

        if (!resposta) {
            alert("Responda todas as perguntas antes de enviar.");
            return;
        }

        if (resposta.value === respostasCorretas[pergunta]) {
            acertos++;
        }
    }

    alert(
        "Nome: " + nome +
        "\nVocê acertou " + acertos + " de 5 perguntas." +
        "\nSua nota foi: " + acertos
    );

});