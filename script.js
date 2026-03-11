function stickyNav(){
    var headerHeight = document.querySelector(".home-item").offsetHeight / 2;
    var navbar = document.querySelector("nav");
    var scrollValue = window.scrollY;

    if(scrollValue > headerHeight){
        navbar.classList.add("header-sticky");
    } else {
        navbar.classList.remove("header-sticky");
    }
}
window.addEventListener("scroll", stickyNav)

var typed = new Typed(".auto-typed", {
    strings: ["Frontend Developer",  "Web Developer", "Student"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})