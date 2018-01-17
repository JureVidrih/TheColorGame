// GUI OBJECTS

var panel = new Panel();
var gameWindow = new Window(panel, "TheColorGameWindow");

initGui();

// DOM HANDLERS

var gameHeader = document.querySelector("#gameHeader");
var displayedColor = document.querySelector("#displayedColor");
var displayedResult = document.querySelector("#displayedResult");

var colors = document.querySelector("#colors");
var colorObjects = document.querySelectorAll(".colorObj");

var tryAgain = document.querySelector("#tryAgain");
var diffEasy = document.querySelector("#diffEasy");
var diffHard = document.querySelector("#diffHard");

// GAME VARIABLES

var bgrColors = [];
var correctColor = 0;
var difficulty = "HARD";

// GAME METHODS

function initGui() {
    gameWindow.initialize();

    panel.addAWindow(gameWindow);

    gameWindow.setWidth(1600);
    gameWindow.setHeight(900);
    gameWindow.setBackgroundColor("white");
    gameWindow.setTitle("The Color Game");
    var gameContent = document.querySelector("#gameContent");
    gameWindow.setContent(gameContent.outerHTML);
    gameContent.remove();
}

function generateColors() {
    var arr = [];

    var numOfColors = 6;

    if(difficulty == "EASY") {
        for(i = 3; i < numOfColors; i++) {
            colorObjects[i].style.display = "none";
        }

        numOfColors = 3;
    } else {
        for(i = 3; i < numOfColors; i++) {
            colorObjects[i].style.display = "inline-block";
        }
    }

    for(i = 0; i < numOfColors; i++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        arr.push("rgb("+r+", "+g+", "+b+")");
    }

    correctColor = Math.floor(Math.random()*numOfColors);

    return arr;
}

function newGame() {
    bgrColors = generateColors();

    displayedResult.style.opacity = 0.0;
    displayedColor.textContent = bgrColors[correctColor].toUpperCase();

    for(i = 0; i < colorObjects.length; i++) {
        colorObjects[i].style.backgroundColor = bgrColors[i];
    }
}

function bindEventListeners() {

    colorObjects.forEach(function(element, index) {
        element.addEventListener('click', function() {
            if(correctColor == index) {
                gameHeader.style.backgroundColor = bgrColors[index];
                newGame();
            } else {
                element.style.backgroundColor = "transparent";
            }
        });
    });

    tryAgain.addEventListener('click', function() {
        gameHeader.style.backgroundColor = "LimeGreen";
        newGame();
    });

    diffEasy.addEventListener('click', function() {
        if(difficulty == "HARD") {
            difficulty = "EASY";
            gameHeader.style.backgroundColor = "LimeGreen";
            diffEasy.style.color = "gold";
            diffHard.style.color = "black";
            newGame();
        }
    });

    diffHard.addEventListener('click', function() {
        if(difficulty == "EASY") {
            difficulty = "HARD";
            gameHeader.style.backgroundColor = "LimeGreen";
            diffHard.style.color = "gold";
            diffEasy.style.color = "black";
            newGame();
        }
    });
}

bindEventListeners();
newGame();