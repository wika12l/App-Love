var vso=document.getElementById("amenu");
var logo1=document.getElementById("menu-logo-phone1");
var hlo=document.getElementById("home-logo-phone1");
function vdo(){
    vso.style.display='none';
    $(document).ready(function(){
        $('#menu-logo-phone1').click(function(){
           $('.items-menu-phone').slideToggle();
           $('.head-menu-phone').slideToggle();
        });
    });
    hlo.style.display='none';
    logo1.style.display='block';
}
$(document).ready(function(){
    $('.mu2').click(function(){
       $('.BB').slideToggle();
    });
});

