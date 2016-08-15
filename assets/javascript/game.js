
var word = "";
var currentWord = "";
var guesses = 0;


function initialize() {
	var opponentChoice;
	var playerWins = 0;
	var playerLosses = 0;
	var teamArray = ["eagles","giants","redskins","cowboys","patriots","dolphins","bills","jets","packers","vikings","bears","lions","colts","jaguars","texans","titans","panthers","buccaneers","saints","falcons","seahawks","cardinals","49ers","rams","ravens","browns","bengals","steelers","chiefs","broncos","raiders","chargers"];

	randomNumber = teamArray[Math.floor(Math.random() * teamArray.length)];
	currentWord = teamArray[randomNumber];
	console.log(currentWord);
	for (var i = 0; i < currentWord.length; i++) {
		j = i;
		while (j == 0) {
			word = "";
			j++;
		}
		if (currentWord[i] == " ") {
			word += " ";	
		}
		word += "_";
	}

	document.getElementById("wordstatus").innerHTML	= word;
	console.log(see);
}


document.onkeydown = function(event) {

	var WordBeingPlayed = "";
	var correctGuess = false;
	Played = String.fromCharCode(event.keyCode).toLowerCase();
	for (k = 0; k < currentWord.length; k++) {
		if (Played == currentWord[k]) {
			WordBeingPlayed += Played;
			console.log("Match! tempWordBeingPlayed is " + WordBeingPlayed);
			correctGuess = true;
		}else if (word[k] != "_") {
			WordBeingPlayed += word[k];
			console.log("Already selected! tempWordBeingPlayed is " + WordBeingPlayed);
		}else {
			WordBeingPlayed += "_";
			console.log("Blank space! tempWordBeingPlayed is " + WordBeingPlayed);
		}
		document.getElementById("wordstatus").innerHTML	= WordBeingPlayed;

	}
	word = WordBeingPlayed;
	if (matchedGuess == true) {
		wordComplete();
	}
	
	if (matchedGuess == false) {
		guesses++;
		document.getElementById("source-button").innerHTML = guesses;
		loseGame();	
	}
	
}

function wordComplete() {

}

function loseGame() {
	
}