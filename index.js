const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        let sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.link a[href*=' + sectionId + ']').classList.add('active')
        } else {
            document.querySelector('.link a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*============================== SCROLL REVEAL ANIMATION =================================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
    //     reset: true
});

sr.reveal('.text, .imagecontainer, .professionalskills, .ptext', {});
sr.reveal('.avartar, .textcontainer, .skillimage', { delay: 400 });
sr.reveal('.socials', { interval: 200 });
sr.reveal('.box, .workimages, .form', { interval: 200 });