// Add a scroll event listener to trigger the animation when scrolled to
window.addEventListener('scroll', function () {
    var jumbotron = document.querySelector('.jumbotron-tall');
    var actionAnimation = document.querySelector('.action-animation');
    var jumbotronTop = jumbotron.getBoundingClientRect().top;
    var windowHeight = window.innerHeight;

    if (jumbotronTop < windowHeight * 0.75) {
        actionAnimation.style.animation = 'none'; // Disable the animation
    } else {
        actionAnimation.style.animation = 'slideInUp 1s ease-in-out forwards'; // Enable the animation
    }
});
