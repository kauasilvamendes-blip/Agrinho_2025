let questions = [
  {
    question: "A feira livre é um exemplo de conexão direta entre o campo e a cidade.",
    answer: true
  },
  {
    question: "Os produtos industrializados são os únicos consumidos nas áreas urbanas.",
    answer: false
  },
  {
    question: "A agricultura familiar é fundamental para abastecer as cidades com alimentos frescos.",
    answer: true
  },
  {
    question: "O campo depende da cidade apenas para vender seus produtos.",
    answer: false
  },
  {
    question: "Festivais gastronômicos nas cidades muitas vezes celebram tradições rurais.",
    answer: true
  },
  {
    question: "O transporte entre o campo e a cidade não interfere na qualidade dos alimentos.",
    answer: false
  },
  {
    question: "Muitas festas tradicionais urbanas têm origem em costumes do campo.",
    answer: true
  },
  {
    question: "A cidade e o campo são totalmente independentes entre si.",
    answer: false
  },
  {
    question: "O turismo rural é uma forma de aproximar a cidade da vida no campo.",
    answer: true
  },
  {
    question: "O consumo consciente nas cidades pode valorizar o trabalho do campo.",
    answer: true
  }
];

let currentQuestion = 0;
let score = 0;
let showResult = false;
let clicked = false;

function setup() {
  createCanvas(700, 400);
  textAlign(CENTER, CENTER);
  textSize(20);
}

function draw() {
  background(240);

  if (showResult) {
    fill(0, 102, 51);
    textSize(28);
    text("🎉 Quiz Finalizado! 🎉", width / 2, height / 2 - 50);
    textSize(22);
    text(`Você acertou ${score} de ${questions.length} perguntas.`, width / 2, height / 2);
    return;
  }

  let q = questions[currentQuestion];

  fill(0);
  textSize(24);
  text(`Pergunta ${currentQuestion + 1} de ${questions.length}`, width / 2, 40);
  textSize(20);
  textWrap(WORD);
  text(q.question, width / 2, height / 2 - 60, 600);

  drawButton("Verdadeiro", width / 2 - 120, height / 2 + 60, true);
  drawButton("Falso", width / 2 + 120, height / 2 + 60, false);
}

function drawButton(label, x, y, value) {
  rectMode(CENTER);
  fill(200);
  rect(x, y, 160, 50, 12);
  fill(0);
  textSize(18);
  text(label, x, y);

  if (mouseIsPressed && !clicked && dist(mouseX, mouseY, x, y) < 80) {
    checkAnswer(value);
    clicked = true;
  }
}

function mouseReleased() {
  clicked = false; // Permite novo clique após soltar o mouse
}

function checkAnswer(userAnswer) {
  if (questions[currentQuestion].answer === userAnswer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion >= questions.length) {
    showResult = true;
  }
}
