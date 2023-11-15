const playBtn = document.getElementById("play");
const errorContainer = document.getElementById("errors");
let choseNumber = getRandomNum(1, 100);
let gameOver = 0;

// GERAR NUMERO ALEATORIO
function getRandomNum(min, max) {
	min = Math.ceil(min);
	max = Math.ceil(max);
	return Math.floor(Math.random() * (max - min) + min);
}

// CRIAR SINAL DE ERRO NA TELA
function createErrorSign() {
	const span = document.createElement("span");

	span.innerText = "X";
	span.classList.add("error-letter");
	errorContainer.appendChild(span);
}

// RESETAR STATUS
function reset() {
	document.getElementById("player-move").value = "";
	while (errorContainer.firstChild) {
		errorContainer.removeChild(errorContainer.firstChild);
	}
	choseNumber = getRandomNum(1, 100);
	gameOver = 0;
	// console.log(choseNumber);
}

// FUNCIONALIDADE DO BOTÃO
function getPlayerMove() {
	const playerMove = parseInt(document.getElementById("player-move").value);
	console.log(typeof playerMove);

	if (isNaN(playerMove) || playerMove === "") {
		alert("Valor inválido!");
		reset();
	} else {
		if (playerMove !== choseNumber) {
			if (playerMove > choseNumber) {
				alert(`${playerMove} foi maior que o número escolhido`);
			} else {
				alert(`${playerMove} foi menor que o número escolhido`);
			}
			createErrorSign();

			gameOver += 1;
			// console.log(gameOver);
			document.getElementById("player-move").value = "";

			if (gameOver === 5) {
				alert("GAME OVER");
				reset();
			}
		} else {
			alert("PARABÉNS, VOCÊ GANHOU!");
			reset();
		}
	}
}

playBtn.addEventListener("click", (event) => {
	event.preventDefault;
	getPlayerMove();
});
const input = document.getElementById("player-move");
input.addEventListener("keypress", (event) => {
	if (event.key === "Enter") {
		event.preventDefault;
		getPlayerMove();
	}
});
// const result = getRandomNum(0, 100);
// console.log(choseNumber);
