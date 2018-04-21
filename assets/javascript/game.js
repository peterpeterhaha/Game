var wordList = [
 "metalocalypse",
 "Dethklok",
 "Pickles",
 "Dr Rockso",
 "Murderface"];

var chosenWord = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 1;
var numGuesses = 15;

function startGame(){

wrongGuesses = [];
console.log("Deaths ", wrongGuesses);
numGuesses = 15;
blanksAndSuccesses = [];


chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
lettersInChosenWord = chosenWord.split("");
numBlanks = lettersInChosenWord.length;
console.log(chosenWord);
console.log(numBlanks)

for(var i = 0; i < numBlanks; i++){
    blanksAndSuccesses.push("_");
}
console.log(blanksAndSuccesses);
document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
document.getElementById('guesses-left').innerHTML = numGuesses;
}
function checkLetters(letter){
    var letterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if(chosenWord[i] === letter){
            letterInWord = true;

        }
    }

    if(letterInWord){
        for(i = 0; i < numBlanks; i++){
            if(chosenWord[i] === letter){
            blanksAndSuccesses[i] = letter;

        }
        }
    }else{
        numGuesses --;
        wrongGuesses.push(letter)
    }
}
function roundComplete(){
    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

    console.log(lettersInChosenWord);
    console.log(blanksAndSuccesses);
    if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
        winCounter++;
        alert("Your Prize is DEATH!");
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    }else if(numGuesses === 0){
        document.getElementById('loss-counter').innerHTML  = lossCounter ++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("You are DEAD!");        
        startGame();
    }
}
startGame();
document.onkeyup = function(event){
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("Letter of your doom: ", letterGuessed)
    checkLetters(letterGuessed)
    roundComplete();
}