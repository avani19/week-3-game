var teamArray = ["eagles","giants","redskins","cowboys","patriots","dolphins","bills","jets","packers","vikings","bears","lions","colts","jaguars","texans","titans","panthers","buccaneers","saints","falcons","seahawks","cardinals","49ers","rams","ravens","browns","bengals","steelers","chiefs","broncos","raiders","chargers"];
// whatever we used in the html to define this id
var userGuessedLetters = "User Guessed Letters :";  
var wrounglettercount= 1;
var word;
var guesses=8;
// var numLives= 10;

word = teamArray[Math.floor(Math.random()* teamArray.length)];
var newteam=new Array(word.length);
// this gives a number of dashees to the line
for(var j=0; j<word.length; j++){
  newteam[j] = '_';
  // console.log('correct');

}


var teamMessage= "Team: " + newteam;
document.getElementById("teamName").innerHTML = teamMessage;
// press key
document.onkeyup = function(event){
  // convert letters into lower case
  var userguess = String.fromCharCode(event.keyCode).toLowerCase();

  var guess;
  for(var i=0; i<word.length; i++){
    if(word[i]==userguess){
      newteam[i]=userguess;
      guess = true;
    }else{
      guess = false;
    }
  }
  if(!guess){
    guesses = guesses - 1
    // numberofgussedletter = numberofgussedletter-1;
    userGuessedLetters= userGuessedLetters+userguess+" ";
  }
  var myteam = "Team: " + newteam;
  document.getElementById("teamName").innerHTML= myteam;

  var numLivestMessage = "Lives Left: "+ guesses;
  document.getElementById("numlives").innerHTML= numLivestMessage;
  document.getElementById("userGuessedLetters").innerHTML= userGuessedLetters; 
  
  if(guesses==0){
    alert('ohhh!! SORRY!! You almost got Hanged! Lets play again!!');
    location.reload(true);
  }
  var correctLetter=true;
 for(var i= 0; i<word.length;i++){
     if(newteam[i]=="_"){
       correctLetter=false;
     }
}
if(correctLetter){
       setTimeout(function(){
        alert(' You Won!!! Keep playing! '); 
         location.reload(true);   
       }, 1000);
     }
}
