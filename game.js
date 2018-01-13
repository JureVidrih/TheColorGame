var panel = new Panel();

var gameWindow = new Window(panel, "TheColorGameWindow");
gameWindow.initialize();

panel.addAWindow(gameWindow);

gameWindow.setWidth(1600);
gameWindow.setHeight(900);
gameWindow.setBackgroundColor("white");
gameWindow.setTitle("The Color Game");
gameWindow.setContent("Content goes here...");