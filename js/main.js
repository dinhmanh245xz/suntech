$(".menu-items > li").hover(function() {
    $(".header-menu-bg").addClass('active');
}).mouseleave(function() {
    
   
    setTimeout(function() {
       

    }, 1000);

});

$(".menu-items").mouseleave(function(){
    $(".header-menu-bg").removeClass('active');
});

// document.querySelector(".menu-items > li").hover(function(){
//     document.querySelector(".header-menu-bg").addClass("active");

// }).mouseleave(function(){
//     setTimeout(function(){

//     },1000);
// });

