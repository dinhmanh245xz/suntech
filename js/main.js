$(".menu-items > li").hover(function() {
    $(".header-menu-bg").addClass('active');
}).mouseleave(function() {
    
   
    setTimeout(function() {
       

    }, 1000);

});

$(".menu-items").mouseleave(function(){
    $(".header-menu-bg").removeClass('active');
});
$(".dropdown-menu").mouseleave(function(){
    $(".header-search__category").removeClass('open');
});

$(".dropdown-menu").mouseleave(function(){
    $(".header-language").removeClass('open');
});

const opendropdown = document.querySelector(".header-search__category");
opendropdown.addEventListener('click',(event) => {
    opendropdown.classList.toggle('open');
})


const openlanguage = document.querySelector(".header-language");
openlanguage.addEventListener('click',(event) => {
    openlanguage.classList.toggle('open');
})

const openAccount = document.querySelector(".header__account");
openAccount.addEventListener('click',(event) => {
    openAccount.classList.toggle('open');
})

function changeSpan (element) {
    let tags = document.getElementsByClassName("lbl-btn");
    for(i = 0; i < tags.length; i++){
        tags[i].style.background="#fff ";
        tags[i].style.color="#000";   
    }
    element.style.background="#000";
    element.style.color="#fff";
    
}

// document.querySelector(".menu-items > li").hover(function(){
//     document.querySelector(".header-menu-bg").addClass("active");

// }).mouseleave(function(){
//     setTimeout(function(){

//     },1000);
// });

