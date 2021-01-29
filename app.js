const hamburger = document.querySelector(".hamburger"); 
const navLinks =  document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar li");
var x = window.matchMedia("(max-width: 700px)");

hamburger.addEventListener("click", () => {
    if(navLinks.classList.toggle("open")){
    links.forEach(link =>  {
        link.classList.toggle("fade");
        hamburger.classList.toggle('toggle');
    });
    }else{
    links.forEach(link =>  {
        link.classList.toggle("fade");
        hamburger.classList.toggle('toggle');
        
    });
    }
    if(x.matches){
        navLinks.style.background = '#000'
    }
    else {
        navLinks.style.background = '#fff'
    }
});