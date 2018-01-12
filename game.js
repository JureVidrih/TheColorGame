var panel = new Panel();

var gameWindow = new Window(panel, "The Color Game");
gameWindow.initialize();
gameWindow.setWidth(1024);
gameWindow.setHeight(768);
gameWindow.setBackgroundColor("lightgray");

panel.addAWindow(gameWindow);