/*============================== SCROLL REVEAL ANIMATION =================================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2200,
    delay: 10,
    // reset: true
});

sr.reveal('.text, .imagecontainer, .professionalskills, .ptext', {});
sr.reveal('.avartar, .aboutsubtitle, .abouttext, .skillimage', { delay: 400 });
sr.reveal('.socials', { interval: 200 });
sr.reveal('.box, .workimages, .form', { interval: 200 });

var link = document.getElementsByClassName("checkbtn");
window.onclick = function(event) {
    if (event.target == link) {
        link.style.display = "none";
    }
}
