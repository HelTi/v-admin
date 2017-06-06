(function(doc,win){
    var docEle=doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc=function(){
            var clientHeight=document.body.clientHeight;
            if(!clientHeight) return;
            console.log(clientHeight + 'px');
            var footer=document.getElementById("content");
            footer.style.setProperty('min-height',(clientHeight-45)+'px');
        };
        if(!doc.addEventListener)return;
        win.addEventListener(resizeEvt,recalc,false);
        doc.addEventListener('DOMContentLoaded',recalc,false);
})(document,window)

