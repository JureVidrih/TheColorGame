var panel = new Panel();
var gameWindow = new Window(panel, "TheColorGameWindow");

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

initGui();