
var ration = 2;
(function (doc, win) {
    var params = {
            defaultFontSize: 20,
            designWidth: 750
    };
    var docEl = doc.documentElement,
    resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
    recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth){
            docEl.style.fontSize = '20px';
            return
        };
        ration = clientWidth / params.designWidth;
        docEl.style.fontSize = ration * params.defaultFontSize + 'px';
    };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
