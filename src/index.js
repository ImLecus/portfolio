var positions = [];
const navBottom = document.getElementById("navBottom");
const setPositions = () => {
    positions = [
        0,
        document.getElementById("about-h").offsetTop - document.getElementById("about-h").offsetHeight,
        document.getElementById("projects-h").offsetTop - document.getElementById("projects-h").offsetHeight,
        document.getElementById("contact-h").offsetTop - document.getElementById("contact-h").offsetHeight
    ];
}
window.addEventListener("resize", setPositions());
window.addEventListener("load", setPositions());
const goTo = (id) => {
    window.scrollTo({
        top: positions[id],
        behavior: "smooth"
    });
    Active(id);   
}
window.addEventListener("scroll", () => {
    let posY = window.scrollY;
    if(posY + 90 < positions[1]){
        Active(0);
    }
    else if(window.scrollY + 90 < positions[2]){
        Active(1);
    }
    else if(window.scrollY + 90 < positions[3]){
        Active(2)
    }
    else{
        Active(3);
    }
});
const Active = (id) => {
    for(let i = 0; i < document.querySelectorAll("header div a").length; i++){
        document.querySelectorAll("header div a")[i].classList.remove("active");
    }
    document.querySelectorAll("header div a")[id].classList.add("active");
}
const setNavBottom = (pos) => {
    navBottom.style.transform = `translateY(${pos}%)`;
}
document.getElementById("navDropdown").addEventListener("click", () => {
    if(navBottom.style.transform === "translateY(0%)"){
         setNavBottom(-200);
     }
     else{
         setNavBottom(0);
     }
});