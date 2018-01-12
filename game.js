var playerPoints;

function initialize() {
    playerPoints = 0;
}

function game() {
    initialize();
    document.body.style.background = "DeepSkyBlue";
    var paragraphs = document.getElementsByTagName("p");

    for(i = 0, sum = ""; i < paragraphs.length; i++) {
        for(c = 0, p = paragraphs[i].innerHTML; c < p.length; c++) {
            if(p.charAt(c) == "-") {
                sum += "_";
            } else {
                sum += p.charAt(c);
            }
        }
        paragraphs[i].innerHTML = sum;
        sum = "";
    }
}

game();