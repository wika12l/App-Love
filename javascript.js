var me=document.getElementById("metext");
function ab1(){
    me.style.display='block';
}
function ab2(){
    me.style.display='none';
}
var aks=document.getElementById("qu");
var men=document.getElementById("allhead");
var log=document.getElementById("login");
var All1=document.getElementById("allsong");
var All2=document.getElementById("allmv");
var All3=document.getElementById("alldoll");
var All4=document.getElementById("alltiktok");
function submit(){
    var nam=document.getElementById("name").value;
    var Num=document.getElementById("num").value;
    if(nam=="")
    {
        swal("Please input your name!");
        All1.style.display='none';
    }
    else if(Num=="")
    {
        swal("Please input your phone number!");
        All1.style.display='none';
    }
    else if((nam>="a"&&nam<="z")||(nam>="A"&&nam<="Z"))
    {
        swal("Success!", "Successful!", "success");
        
        log.style.display='none';
        men.style.display='block';
        aks.style.display='block';
    }
    else
    {
        swal("Your name is only literally!");
        All1.style.display='none';
    }
    
}
function song(){
    All1.style.display='block';
    All2.style.display='none';
    All3.style.display='none';
    All4.style.display='none';
    aks.style.display='none';
}
function mv(){
    All2.style.display='block';
    All1.style.display='none';
    All3.style.display='none';
    All4.style.display='none';
    aks.style.display='none';
}
function dol(){
    All3.style.display='block';
    All2.style.display='none';
    All1.style.display='none';
    All4.style.display='none';
    aks.style.display='none';
}
function Tiktok(){
    All3.style.display='none';
    All4.style.display='block';
    All2.style.display='none';
    All1.style.display='none';
    aks.style.display='none';
}
function hom(){
    All3.style.display='none';
    All4.style.display='none';
    All2.style.display='none';
    All1.style.display='none';
    aks.style.display='none';
    aks.style.display='block';
}
