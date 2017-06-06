/**
 * Created by Administrator on 2017/5/24 0024.
 */
export default  function (ele) {
    var a=[];
    var p=ele.previousSibling;
    while (p){
        if(p.nodeType===1){
            a.push(p)
        }
        p=p.previousSibling;
    }
    a.reverse();
    var n=ele.nextSibling;
    while(n) {
        if(n.nodeType===1){
            a.push(n)
        }
        n=n.nextSibling;
    }
    return a;
}