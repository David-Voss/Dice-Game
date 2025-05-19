
// Generates a random number between 1 and 6, simulating a die roll
function randomNumber() {
   return Math.floor(Math.random() * 6) + 1;
}

// Returns the file path to the image corresponding to the given die number
function imageSelector(number) {
    return `./images/dice${number}.png`;
}

// Updates the image source of the selected element to reflect the die roll
function changeDiceImage(imgClass, die) {
    return document.querySelector(imgClass).setAttribute("src", imageSelector(die));
}

// Compares the two dice and returns a string indicating the winner
function winnerEvaluation(die1, die2) {
    if (die1 === die2) {
        return "Draw!";
    } else if (die1 > die2) {
        return "&#128681; Player 1 Wins!";
    } else if (die1 < die2) {
        return "Player 2 Wins! &#128681;";
    }
}

// Simulates a dice game: rolls both dice, updates images, and displays the result
function playGame() {
    let dieNumber1 = randomNumber();
    let dieNumber2 = randomNumber();

    changeDiceImage(".img1", dieNumber1);
    changeDiceImage(".img2", dieNumber2);

    document.querySelector("h1").innerHTML = winnerEvaluation(dieNumber1, dieNumber2);
}

// Executes when the page is loaded
window.onload = function () {
    if (sessionStorage.getItem("visited")) {
        // If the user has visited before, play the game automatically
        playGame();
    } else {
        // On first visit, mark the session as visited and show default content
        sessionStorage.setItem("visited", "true");
    }
};