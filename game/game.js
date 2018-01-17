// GUI OBJECTS

var panel = new Panel();
var gameWindow = new Window(panel, "TheColorGameWindow");

initGui();

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