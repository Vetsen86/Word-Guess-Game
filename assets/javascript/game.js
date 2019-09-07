// First, I need to create an array of strings that will represent my words. 10ish should suffice.
var words = ["halo", "persona", "pacman", "mario", "zelda", "metroid", "sword", "lives", "diablo", "monsters", 
    "battlefield"];


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
    alert("You lose!");
    losses += 1;
    document.getElementById("loss").innerHTML = losses;
    word = getWord();
    spaces = getSpaces(word);
    guessArray = [];
    rightArray = [];
    guesses = word.length + 4;
    document.getElementById("left").innerHTML = guesses;
    document.getElementById("guess").innerHTML = guessArray.join(", ");
    rightGuesses = 0;
}

function win() {
    alert("You win!");
    wins += 1;
    document.getElementById("win").innerHTML = wins;
    word = getWord();
    spaces = getSpaces(word);
    guessArray = [];
    rightArray = [];
    guesses = word.length + 4;
    document.getElementById("left").innerHTML = guesses;
    document.getElementById("guess").innerHTML = guessArray.join(", ");
    rightGuesses = 0;
}


//Now I need to write a function for the actual guess

function guess(word, spaces, key) {
    //First I should compare the key pressed to the word
    if (word.includes(key)) {
        //loop through the array to make sure it is finding all the correct letters
        for (i = 0; i < word.length; i++) {
            if (word[i] === key) {
                spaces[i] = key;
                document.getElementById("spaces").innerHTML = spaces.join(" ");
                rightGuesses += 1;
            }
        }
        //this is outside the loop to ensure guesses only go down by one per key press
        guesses -= 1;
        document.getElementById("left").innerHTML = guesses;
        
        //if key pressed is not already in the array of correct keys pressed, add key to it
        if (!rightArray.includes(key)) {
            rightArray.push(key);
            console.log(rightArray);
        //Otherwise, negate the guess by manipulating variables so as not to reduce guesses from keys already pressed
        } else {
            guesses += 1;
            document.getElementById("left").innerHTML = guesses;
            rightGuesses -= 1;
            console.log(guesses);
            console.log(rightGuesses);
        }
        //If the number of correct guesses = word's length, user wins
        //If guesses = 0, user loses
        if (rightGuesses === word.length) {
            win();
        } else if (guesses === 0) {
            lose();
        }

        //if a wrong key hasn't already been pressed, then push key to array and reduce guesses
    } else if (!guessArray.includes(key)) {
        guessArray.push(key);
        document.getElementById("guess").innerHTML = guessArray.join(", ");
        guesses -= 1;
        document.getElementById("left").innerHTML = guesses;
        if (guesses === 0) {
            lose();
        }
    }
}




// I need to capture the user's keystroke and save it to a variable.

document.onkeyup = function(event) {
    var keyPressed = event.key;
    guess(word, spaces, keyPressed);
    console.log(keyPressed);
}