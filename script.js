
const questions = [
    { question: "O que defende o fixismo?", answers: ["Que as espécies são imutáveis", "Que as espécies evoluem", "Que há mutações genéticas", "Que a seleção é natural"], correct: 0 },
    { question: "Segundo Lamarck, como as girafas ganharam pescoços longos?", answers: ["Por seleção natural", "Por cruzamento genético", "Por uso e desuso", "Por mutação aleatória"], correct: 2 },
    { question: "Quem propôs a seleção natural?", answers: ["Lamarck", "Darwin", "Wallace", "Mendel"], correct: 1 },
    { question: "O que é seleção natural?", answers: ["Reprodução aleatória", "Sobrevivência dos mais adaptados", "Mudança proposital de genes", "Ausência de variabilidade"], correct: 1 },
    { question: "Wallace é conhecido por:", answers: ["Contrariar Darwin", "Criar o DNA", "Chegar às mesmas conclusões que Darwin", "Criar o fixismo"], correct: 2 },
    { question: "A Teoria Sintética da Evolução combina:", answers: ["Lamarck e Darwin", "Darwin e Genética", "Mendel e Wallace", "Darwin e Mendelismo"], correct: 1 },
    { question: "Mutação é:", answers: ["Mistura de genes", "Entrada de genes", "Mudança no DNA", "Evidência embriológica"], correct: 2 },
    { question: "Seleção artificial é feita por:", answers: ["Natureza", "Mutação", "Seres humanos", "Seleção natural"], correct: 2 },
    { question: "Camuflagem é:", answers: ["Parecer outro ser", "Misturar-se ao ambiente", "Ser predador", "Migrar de ambiente"], correct: 1 },
    { question: "Uma evidência da evolução:", answers: ["Seleção artificial", "Mutação proposital", "Fósseis", "Fixismo"], correct: 2 },
    { question: "O que são superbactérias?", answers: ["Bactérias boas", "Bactérias extintas", "Bactérias adaptadas", "Bactérias artificiais"], correct: 2 },
    { question: "Seleção sexual está ligada a:", answers: ["Sobrevivência", "Adaptação", "Atração reprodutiva", "Camuflagem"], correct: 2 },
    { question: "Darwinismo Social é:", answers: ["Teoria de Darwin", "Ideia política", "Evidência científica", "Uma distorção das ideias de Darwin"], correct: 3 },
    { question: "Quem disse 'Nada em Biologia faz sentido exceto à luz da evolução'?", answers: ["Darwin", "Lamarck", "Wallace", "Dobzhansky"], correct: 3 },
    { question: "Mimetismo é:", answers: ["Adaptar-se ao ambiente", "Imitar outro organismo", "Fugir de predadores", "Evidência de fósseis"], correct: 1 }
];

let currentQuestionIndex = 0;

const questionContainer = document.getElementById("question-container");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

function showQuestion() {
    resetState();
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.innerText = currentQuestion.question;
    currentQuestion.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.addEventListener("click", () => selectAnswer(index));
        answerButtons.appendChild(button);
    });
}

function resetState() {
    answerButtons.innerHTML = "";
}

function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    const buttons = answerButtons.querySelectorAll("button");
    buttons.forEach((btn, idx) => {
        btn.style.backgroundColor = idx === correctIndex ? "#4caf50" : "#f44336";
        btn.disabled = true;
    });
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        questionContainer.innerText = "Parabéns! Você completou o quiz.";
        answerButtons.innerHTML = "";
        nextButton.style.display = "none";
    }
});

showQuestion();
