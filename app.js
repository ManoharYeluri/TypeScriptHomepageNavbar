const headerEl = document.getElementsByTagName('header')[0];
const mainEl = document.getElementsByTagName('main')[0];
const author = document.getElementById('author');

let lastScrollTop = 0;

window.addEventListener("scroll", function () {
    let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (currentScrollTop > lastScrollTop) {
        headerEl.style.transform = 'translateY(0px)';
    } else {
        if (window.innerWidth <= 750) {
            headerEl.style.transform = 'translateY(200px)';
        }
    }
    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;

    mainEl.style.backgroundColor = `${randomColor()}`;
    author.style.color = `${randomColor()}`;
    console.log(randomColor());
}, false);

window.addEventListener('resize', function () {
    headerEl.style.transform = 'translateY(0px)';
})

function randomNumber() {
    return Math.floor(Math.random() * 256);
}

function randomColor() {
    return `rgb(${randomNumber()},${randomNumber()},${randomNumber()}, 0.25)`
}