var Window = function(panelInstance, windowId) {
    this.panelInstance = panelInstance;
    this.id = windowId;
    this.getId = function() {
        return this.id;
    }
    this.isBeingDragged = false;
    this.cachedX = 0;
    this.cachedY = 0;

    this.initialize = function() {
        this.createDOMObject();
        this.registerEvents();
    }

    this.createDOMObject = function() {
        var domObj = document.createElement("div");
        domObj.id = this.id;
        domObj.innerHTML =  '<div class="gui-window">'
                                +'<div class="gui-window__titlebar">'
                                    +'<div class="gui-window__titlebar__buttons"><a class="window-btn window-btn-close" href="#"></a><a class="window-btn window-btn-minimize" href="#"></a><a class="window-btn window-btn-maximize" href="#"></a></div><div class="gui-window__titlebar__title">Window Title</div></div><div class="gui-window__content">Window content.</div>'
                                +'</div>';
                            +'</div>';
        this.panel = domObj.getElementsByClassName("gui-panel")[0];
        this.guiWindow = domObj.querySelector(".gui-window");
        this.titleBar = domObj.querySelector(".gui-window__titlebar");
        this.close = domObj.getElementsByClassName("window-btn-close")[0];
        this.min = domObj.getElementsByClassName("window-btn-minimize")[0];
        this.max = domObj.getElementsByClassName("window-btn-maximize")[0];
        this.title = domObj.querySelector(".gui-window__titlebar__title");
        this.windowContent = domObj.querySelector(".gui-window__content");
        document.body.appendChild(domObj);
    }

    this.registerEvents = function() {
        this.close.addEventListener('click', function() {
            this.panelInstance.windowAction("close", this.id);
        }.bind(this));
        
        this.min.addEventListener('click', function() {
            this.panelInstance.windowAction("minimize", this.id);
        }.bind(this));
        
        this.max.addEventListener('click', function() {
            var content = this.guiWindow.getElementsByClassName("gui-window__content")[0];
            if(content.style.display == "none") {
                content.style.display = "block";
            } else {
                content.style.display = "none";
            }
        }.bind(this));
        
        this.titleBar.addEventListener('mousedown', function(event) {
            this.isBeingDragged = true;
            this.cachedX = event.clientX;
            this.cachedY = event.clientY;
            if(!this.guiWindow.classList.contains("window-effect-transparency")) {
                this.guiWindow.classList.add("window-effect-transparency");
            }
        }.bind(this));
        
        this.guiWindow.addEventListener('mouseup', function(event) {
            this.isBeingDragged = false;
            this.guiWindow.classList.remove("window-effect-transparency");
        }.bind(this));
        
        this.guiWindow.addEventListener('mouseout', function(event) {
            this.isBeingDragged = false;
            this.guiWindow.classList.remove("window-effect-transparency");
        }.bind(this));
        
        this.guiWindow.addEventListener('mousemove', function(event) {
            if(this.isBeingDragged) {
                var coord = this.guiWindow.getBoundingClientRect();
                this.guiWindow.style.left = (((event.clientX)-this.cachedX)+coord.left)+"px";
                this.guiWindow.style.top = (((event.clientY)-this.cachedY)+coord.top)+"px";
                if(this.guiWindow.getBoundingClientRect().top < 0) {
                    this.guiWindow.style.top = 0+"px";
                    this.cachedX = event.clientX;
                } else {
                    this.cachedX = event.clientX;
                    this.cachedY = event.clientY;
                }
            }
        }.bind(this));
    }

    this.setWidth = function(width) {
        this.guiWindow.style.width = width+"px";
    }

    this.setHeight = function(height) {
        this.guiWindow.style.height = height+"px";
    }

    this.setBackgroundColor = function(bgrcolor) {
        this.guiWindow.querySelector(".gui-window__content").style.background = bgrcolor;
    }

    this.setTitle = function(newtitle) {
        this.title.textContent = newtitle;
        panelInstance.getPanelItem(this.id).setTitle(newtitle);
    }

    this.setContent = function(content) {
        this.windowContent.innerHTML = content;
    }

    this.getWidth = function() {
        return this.guiWindow.style.width;
    }

    this.getHeight = function() {
        return this.guiWindow.style.height;
    }

    this.getBackgroundColor = function() {
        return this.guiWindow.querySelector(".gui-window__content").style.background;
    }

    this.getTitle = function() {
        return this.title.textContent;
    }

    this.getContent = function() {
        return this.windowContent.textContent;
    }
}