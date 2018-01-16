// GUI OBJECTS

var panel = new Panel();
var gameWindow = new Window(panel, "TheColorGameWindow");

// GAME FUNCTIONS

function initGui() {
    gameWindow.initialize();

    panel.addAWindow(gameWindow);

    gameWindow.setWidth(1600);
    gameWindow.setHeight(900);
    gameWindow.setBackgroundColor("white");
    gameWindow.setTitle("The Color Game");
    var gameContent = document.querySelector("#gameContent");
    gameContent.remove();
    gameWindow.setContent(gameContent.outerHTML);
}

function generateColors() {
    var arr = [];
    var numOfColors;

    if(difficulty == "easy") {
        numOfColors = 3;
    } else {
        numOfColors = 6;
    }

    for(i = 0; i < numOfColors; i++) {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);

        arr[i] = "rgb("+r+", "+g+", "+b+")";
    }

    return arr;
}

function initEventListeners() {
    var colorObjects = document.querySelectorAll(".colorObj");

    colorObjects.forEach(function(element, index) {
        element.addEventListener('click', function() {
            var result = document.querySelector("#displayedResult");
            if(index != correctColor-1) {
                result.textContent = "NOT CORRECT";
                result.style.opacity = "1.0";
                element.style.backgroundColor = "transparent";
            } else {
                result.textContent = "";
                document.querySelector(".gameHeader").style.backgroundColor = element.style.backgroundColor;
                newGame();
            }
        });
    });

    var tryAgain = document.querySelector("#tryAgain");

    tryAgain.addEventListener('click', function() {
        document.querySelector(".gameHeader").style.backgroundColor = "LimeGreen";
        newGame();
    });

    var diffEasy = document.querySelector("#diffEasy");
    var diffHard = document.querySelector("#diffHard");

    diffEasy.addEventListener('click', function() {
        if(difficulty == "hard") {
            difficulty = "easy";
            this.style.color = "gold";
            diffHard.style.color = "black";
            document.querySelector(".gameHeader").style.backgroundColor = "LimeGreen";
            newGame();
        }
    });
    
    diffHard.addEventListener('click', function() {
        if(difficulty == "easy") {
            difficulty = "hard";
            this.style.color = "gold";
            diffEasy.style.color = "black";
            document.querySelector(".gameHeader").style.backgroundColor = "LimeGreen";
            newGame();
        }
    });
}

function newGame() {
    colors = generateColors();
    correctColor = 0;

    if(difficulty == "easy") {
        correctColor = Math.floor(Math.random()*3+1);
    } else {
        correctColor = Math.floor(Math.random()*6+1);
    }
    
    console.log("Correct color is: " + correctColor);
    
    document.querySelector("#headerRGBValue").textContent = colors[correctColor-1].toUpperCase();

    var colorObjects = document.querySelectorAll(".colorObj");

    for(i = 0; i < colorObjects.length; i++) {
        colorObjects[i].style.backgroundColor = colors[i];
    }

    if(difficulty == "easy") {
        for(i = 3; i < colorObjects.length; i++) {
            colorObjects[i].style.display = "none";
        }
    } else {
        for(i = 0; i < colorObjects.length; i++) {
            colorObjects[i].style.display = "inline-block";
        }
    }
}

// GAME VARIABLES

var difficulty = "hard";

var colors;
var correctColor;

initGui();
initEventListeners();
newGame();