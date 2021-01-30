const hamburger = document.querySelector(".hamburger"); 
const navLinks =  document.querySelector(".navbar");
const links = document.querySelectorAll(".navbar li");

hamburger.addEventListener("click", () => {
    if(navLinks.classList.toggle("open")){
    navLinks.style.background = '#000'
    links.forEach(link =>  {
        link.classList.toggle("fade");
        hamburger.classList.toggle('toggle');
    });
    }else{
    links.forEach(link =>  {
        link.classList.toggle("fade");
        hamburger.classList.toggle('toggle');
        navLinks.style.background = 'none'
    })
    }
}
);

const scrollUpbtn = document.getElementById('scroll-up-btn');

window.addEventListener('scroll', runEvent)

function runEvent (e) {
    scrollUpbtn.classList.toggle('active', window.scrollY > 100 )


    e.preventDefault();
}
function scrollToTop(e) {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })

    e.preventDefault()
}