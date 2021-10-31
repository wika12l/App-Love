var vei=document.getElementById("po");
var ne=document.getElementById("new");
var a1=document.getElementById("admin");
var a2=document.getElementById("about");
var h=document.getElementById("help");
var pil=document.getElementById("menu-logo-phone0");
var pl=document.getElementById("menu-logo-phone1");
function okk(){
    vei.style.display='block';
    pl.style.display='none';
    ne.style.display='none';
}
function clos(){
    ne.style.display='none';
    pl.style.display='block';
    vei.style.display='none';
}
function admin(){
    ne.style.display='block';
    a1.style.display='block';
    a2.style.display='none';
    h.style.display='none';
}
function about(){
    a2.style.display='block';
    ne.style.display='block';
    a1.style.display='none';
    h.style.display='none';
}
function help(){
    a1.style.display='none';
    a2.style.display='none';
    h.style.display='block';
    ne.style.display='block';
}
var ad=document.getElementById("losea3");
var bii=document.getElementById("losea2");
var voo=document.getElementById("losea1");
var looo=document.getElementById("losea");
var ss=document.getElementById("search");
function search1(){
    bii.style.display='block';
    ss.style.display='block';
    looo.style.display='none';
    voo.style.display='block';
    ad.style.display='none';
}
function search2(){
    ad.style.display='block';
    bii.style.display='none';
    looo.style.display='block';
    voo.style.display='none'
    ss.style.display='none'
}
