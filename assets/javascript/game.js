// First, I need to create an array of strings that will represent my words. 10 should suffice.
var words = ["halo", "persona", "pacman", "mario", "zelda", "metroid", "battlefield", "lives", "diablo", "monsters"];


//Then I need to get a random word from the array.
function getWord() {
    var randomIndex = Math.floor(Math.random() * words.length);
    var wordArray = words[randomIndex].split('');
    return wordArray;
}

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

var spaces = getSpaces(word);
console.log(spaces);


// I need to capture the user's keystroke and save it to a variable.

document.onkeyup = function(event) {
    var keyPressed = event.key;
    console.log(keyPressed);
}