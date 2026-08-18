```javascript
/* =========================================
   AGRINHO 2026
   Projeto: Água que Alimenta
   Aluno: Carlos Eduardo
   Professor: Luiz Alessandro
   Colégio Estadual Dom Pedro II
   ========================================= */


/* =========================================
   CALCULADORA DE ECONOMIA DE ÁGUA
   ========================================= */

function calcularEconomia() {

    // Pega o valor digitado pelo usuário
    const consumo = Number(
        document.getElementById("consumo").value
    );

    // Pega a porcentagem escolhida
    const porcentagem = Number(
        document.getElementById("economia").value
    );

    // Área onde o resultado será mostrado
    const resultado = document.getElementById("resultado");


    // Verifica se o usuário digitou um valor válido
    if (consumo <= 0 || isNaN(consumo)) {

        resultado.innerHTML = `
            <div class="icone">⚠️</div>

            <h3>
                Digite um valor válido
            </h3>

            <p>
                Informe uma quantidade de água utilizada
                por dia.
            </p>
        `;

        return;
    }


    // Calcula a quantidade de água economizada
    const economia =
        consumo * (porcentagem / 100);


    // Calcula quanto sobraria de consumo
    const consumoFinal =
        consumo - economia;


    // Formata os números para o padrão brasileiro
    const economiaFormatada =
        economia.toLocaleString("pt-BR");

    const consumoFormatado =
        consumo.toLocaleString("pt-BR");

    const consumoFinalFormatado =
        consumoFinal.toLocaleString("pt-BR");


    // Mostra o resultado
    resultado.innerHTML = `
        <div class="icone">
            💧
        </div>

        <h3>
            Resultado da simulação
        </h3>

        <p>
            Com uma economia de
            <strong>${porcentagem}%</strong>,
            seria possível economizar aproximadamente:
        </p>

        <h2>
            ${economiaFormatada} litros por dia
        </h2>

        <p>
            O consumo passaria de
            <strong>${consumoFormatado} L</strong>
            para aproximadamente
            <strong>${consumoFinalFormatado} L</strong>.
        </p>

        <p>
            🌱 Pequenas melhorias podem contribuir
            para um uso mais responsável da água.
        </p>
    `;
}


/* =========================================
   QUIZ DE SUSTENTABILIDADE
   ========================================= */

// Lista de perguntas do quiz
const perguntas = [

    {
        pergunta:
            "Qual atitude pode ajudar a reduzir o desperdício de água na agricultura?",

        opcoes: [
            "Utilizar irrigação de forma planejada.",
            "Deixar vazamentos sem manutenção.",
            "Irrigar sempre na maior quantidade possível."
        ],

        correta: 0
    },


    {
        pergunta:
            "Por que é importante proteger nascentes e rios?",

        opcoes: [
            "Porque a água não possui nenhuma relação com a agricultura.",
            "Porque a preservação ajuda a conservar os recursos hídricos.",
            "Porque somente as cidades dependem da água."
        ],

        correta: 1
    },


    {
        pergunta:
            "O que representa a agricultura sustentável?",

        opcoes: [
            "Produzir sem se preocupar com os recursos naturais.",
            "Parar completamente a produção de alimentos.",
            "Buscar produção eficiente junto com preservação ambiental."
        ],

        correta: 2
    },


    {
        pergunta:
            "Qual prática pode ajudar o produtor a decidir melhor quando irrigar?",

        opcoes: [
            "Observar a umidade do solo e as condições climáticas.",
            "Irrigar sem verificar as condições do solo.",
            "Utilizar sempre a mesma quantidade de água."
        ],

        correta: 0
    },


    {
        pergunta:
            "Por que economizar água também ajuda o futuro da agricultura?",

        opcoes: [
            "Porque preservar os recursos naturais ajuda a manter a capacidade de produção.",
            "Porque a agricultura não depende dos recursos naturais.",
            "Porque economizar água elimina a necessidade de planejamento."
        ],

        correta: 0
    }

];


// Guarda qual pergunta está sendo exibida
let perguntaAtual = 0;


// Guarda a quantidade de respostas corretas
let pontuacao = 0;


/* =========================================
   MOSTRAR PERGUNTA
   ========================================= */

function mostrarPergunta() {

    const pergunta =
        perguntas[perguntaAtual];


    // Mostra o texto da pergunta
    document.getElementById("pergunta").textContent =
        pergunta.pergunta;


    // Local onde ficarão as respostas
    const opcoes =
        document.querySelector(".opcoes");


    // Limpa as opções anteriores
    opcoes.innerHTML = "";


    // Cria um botão para cada alternativa
    pergunta.opcoes.forEach(
        (opcao, indice) => {

            const botao =
                document.createElement("button");


            botao.textContent =
                opcao;


            botao.onclick =
                function () {

                    responder(indice);

                };


            opcoes.appendChild(botao);

        }
    );


    // Limpa a mensagem anterior
    document.getElementById(
        "resultadoQuiz"
    ).textContent = "";


    // Esconde o botão de próxima pergunta
    document
        .getElementById("proxima")
        .classList.add("escondido");
}


/* =========================================
   RESPONDER QUESTÃO
   ========================================= */

function responder(indice) {

    const pergunta =
        perguntas[perguntaAtual];


    const resultado =
        document.getElementById(
            "resultadoQuiz"
        );


    // Verifica se a resposta está correta
    if (indice === pergunta.correta) {

        resultado.textContent =
            "✅ Resposta correta! Muito bem.";

        resultado.style.color =
            "#28753c";


        // Adiciona um ponto
        pontuacao++;

    } else {

        resultado.textContent =
            "❌ Resposta incorreta. Pense em práticas que preservem os recursos naturais.";

        resultado.style.color =
            "#b23a3a";
    }


    // Desativa os botões depois da resposta
    const botoes =
        document.querySelectorAll(
            ".opcoes button"
        );


    botoes.forEach(
        botao => {

            botao.disabled = true;

        }
    );


    // Mostra o botão para continuar
    document
        .getElementById("proxima")
        .classList.remove("escondido");
}


/* =========================================
   PRÓXIMA PERGUNTA
   ========================================= */

function proximaPergunta() {

    perguntaAtual++;


    // Se ainda existem perguntas
    if (
        perguntaAtual <
        perguntas.length
    ) {

        mostrarPergunta();

        return;
    }


    // Se o quiz terminou
    document.getElementById(
        "pergunta"
    ).textContent =
        "🎉 Quiz finalizado!";


    document.querySelector(
        ".opcoes"
    ).innerHTML = "";


    document.getElementById(
        "resultadoQuiz"
    ).innerHTML = `
        🌱 Você acertou
        <strong>${pontuacao}</strong>
        de
        <strong>${perguntas.length}</strong>
        perguntas.

        <br><br>

        Continue aprendendo sobre
        sustentabilidade, agricultura
        e preservação ambiental!
    `;


    // Esconde o botão
    document
        .getElementById("proxima")
        .classList.add("escondido");
}


/* =========================================
   INICIALIZAÇÃO DO QUIZ
   ========================================= */

// Mostra a primeira pergunta
// assim que o site é carregado.
mostrarPergunta();
```
