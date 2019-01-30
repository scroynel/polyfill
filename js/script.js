window.addEventListener('load', function () {
        
    var title = document.querySelector('.title')
        , text = document.querySelector('.text')
        , main = document.querySelector('.main');
    
    Element.prototype.showText = function (time) {
        
        var dt = 40
            , step = time / dt
            , divHeight = title.clientHeight + 20
            , openStep = 300 / step
            , self = this
            , realHeight = title.clientHeight + text.clientHeight;
        
        if (main.clientHeight < 100) {
            var interval = setInterval(function () {
                        self.style.height = divHeight + 'px';
                        divHeight += openStep;
                        if (divHeight >= realHeight + 40) {
                            clearInterval(interval);
                }
            }, dt);
        }
        
        else if (main.clientHeight >= realHeight) {
            var interval = setInterval(function () {
                self.style.height = realHeight + 40 + 'px';
                realHeight -= openStep;
                if (main.clientHeight <= divHeight) {
                    clearInterval(interval);
                }
            }, dt);
        }
    }
    
    main.addEventListener('click', function () {
        this.showText(1000);
    });
    
})





























































