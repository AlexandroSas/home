const backToTopButton = document.querySelector("#bcktop");

backToTopButton.addEventListener("click",backToTop);

function backToTop(){
    window.scrollTo(0,0);
}