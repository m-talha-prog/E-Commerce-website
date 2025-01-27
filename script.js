const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}

document.addEventListener('DOMContentLoaded' ,function() {
    let products = document.querySelectorAll('.pro');
    products.forEach(function(pro) {
        pro.addEventListener('click' , function() {
            let pageUrl = pro.getAttribute("data-page");
            window.location.href = pageUrl;
        })
    })
})