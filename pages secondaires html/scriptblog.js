document.addEventListener('DOMContentLoaded', function () {
    animateBody();
    animateButtons();
    animateHeading();
});

function animateBody() {
    anime({
        targets: 'body',
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
    });
}

function animateButtons() {
    var buttons = document.querySelectorAll('.animate-button');
    anime({
        targets: buttons,
        translateY: [-10, 0],
        opacity: [0, 1],
        duration: 800,
        easing: 'easeInOutQuad',
        delay: anime.stagger(100), 
    });
}

function animateHeading() {
    anime({
        targets: 'h2',
        translateY: [-20, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
    });

    var sections = document.querySelectorAll('section');
    sections.forEach(function (section) {
        anime({
            targets: section,
            translateY: [20, 0],
            opacity: [0, 1],
            duration: 1000,
            easing: 'easeInOutQuad',
        });
    });
    anime({
        targets: 'footer',
        translateY: [20, 0],
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
    });
};
