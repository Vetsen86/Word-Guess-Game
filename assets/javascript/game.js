// First, I need to create an array of strings that will represent my words. 10 should suffice.
var words = ["halo", "persona", "pacman", "mario", "zelda", "metroid", "sword", "lives", "diablo", "monster"];


//Then I need to get a random word from the array.
function getWord() {
    var randomIndex = Math.floor(Math.random() * words.length);
    var wordArray = words[randomIndex].split('');
    document.getElementById("left").innerHTML = wordArray.length + 4;
    return wordArray;
}
//Then I need to show the number of blank spaces and get an array with those spaces (to be used later)
function getSpaces(word) {
    var spaceArray = [];
    word.forEach(function (element) {
        spaceArray.push("_");
    });
    document.getElementById("spaces").innerHTML = spaceArray.join(" ");
    return spaceArray;
}

var word = getWord();
console.log(word);

var guesses = word.length + 4;

var spaces = getSpaces(word);
console.log(spaces);

var guessArray = [];
var rightArray = [];

var losses = 0;
var wins = 0;
var rightGuesses = 0;

function lose() {
    losses += 1;
    document.getElementById("loss").innerHTML = losses;
    word = getWord();
    spaces = getSpaces(word);
    guessArray = [];
    guesses = word.length + 4;
    document.getElementById("left").innerHTML = guesses;
    document.getElementById("guess").innerHTML = guessArray.join(", ");
    rightGuesses = 0;
}

function win() {
    wins += 1;
    document.getElementById("win").innerHTML = wins;
    word = getWord();
    spaces = getSpaces(word);
    guessArray = [];
    guesses = word.length + 4;
    document.getElementById("left").innerHTML = guesses;
    document.getElementById("guess").innerHTML = guessArray.join(", ");
    rightGuesses = 0;
}


//Now I need to write a function for the actual guess

function guess(word, spaces, key) {
    //First I should compare the key pressed to the word
    
    if (word.includes(key)) {
        spaces[word.indexOf(key)] = key;
        document.getElementById("spaces").innerHTML = spaces.join(' ');
        rightArray.push(key);
        guesses -= 1;
        rightGuesses += 1;
        document.getElementById("left").innerHTML = guesses;
        if (rightGuesses === word.length) {
            win();
        } else if (guesses === 0) {
            lose();
        }
    } else {
        if (!guessArray.includes(key)) {
            guessArray.push(key);
            document.getElementById("guess").innerHTML = guessArray.join(", ");
            guesses -= 1;
            document.getElementById("left").innerHTML = guesses;
            if (guesses === 0) {
                lose();
            }
        }

    }
}




// I need to capture the user's keystroke and save it to a variable.

document.onkeyup = function(event) {
    var keyPressed = event.key;
    guess(word, spaces, keyPressed);
    console.log(keyPressed);
}