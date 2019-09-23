const backToTopButton = document.querySelector("#bcktop");

/*      INUTILE AI FINI DEL SITO
window.addEventListener("scroll",scrollFunction);

function scrollFunction(){
    if(window.pageYOffset > 300){
        if(!backToTopButton.classList.contains("btnEntrance")){
            backToTopButton.classList.remove("btnExit");
            backToTopButton.style.display = "block";
            backToTopButton.classList.add("btnEntrance");
        }
    }
    else{
        if(backToTopButton.classList.contains("btnEntrance")){
            backToTopButton.classList.remove("btnEntrance");
            backToTopButton.classList.add("btnExit");
            setTimeout(function(){
                backToTopButton.style.display = "none";
            },250);
        }
    }
}
*/

backToTopButton.addEventListener("click",backToTop);

function backToTop(){
    window.scrollTo(0,0);
}


