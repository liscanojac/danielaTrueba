window.onload = init;

function init() {

    var buttons = document.getElementsByClassName('btn-outline-main');

    for (var i = 0; i < buttons.length; i++) {

        buttons[i].onmouseout = descendantAnimation;
    }

    let navbarIcons = document.getElementById('navbar-icons');

    navbarIcons.addEventListener("click", burgerMenu);
}

function burgerMenu() {
    
    let menu = document.getElementById('menu');
    let close = document.getElementById('close');
    let menuList = document.getElementById('menu-list');

    if (close.classList.contains('d-none')) {
        menu.classList.add('d-none');
        close.classList.remove('d-none');
        menuList.classList.remove('d-none');
        menuList.style.animation = 'fade-in 2s ease-out';
    } else {
        menu.classList.remove('d-none');
        close.classList.add('d-none');
        menuList.classList.add('d-none');
    }
}

window.addEventListener("scroll", function() {
    let scrollPosition = this.scrollY;
    window.onscroll = scrollUp();
    
    navbarScroll(scrollPosition);
    
    let scroll = this.document.getElementById('scroll');
    if (scrolledBeyondHeader(scrollPosition)) {
        scroll.style.animation = 'fade-out 2s ease-out';
        
        setTimeout(hideScroll(scroll), 2000);    
        
    } else if (!scrolledBeyondHeader(scrollPosition) && window.scrollingUp) {
        
        
        scroll.style.animation = 'fade-in 2s ease-out';
        
        setTimeout(showScroll(scroll), 2000);
        
    }
    
});

function scrollUp() {
    this.scrollingUp = this.oldScroll > this.scrollY;
    this.oldScroll = this.scrollY;
}

function scrolledBeyondHeader(position) {
    let hero = document.getElementById('hero');

    return position > .7 * hero.scrollHeight;   
}

function hideScroll(x) {
    x.style.opacity = '0';
}

function showScroll(x) {
    x.style.opacity = '1';
}

function descendantAnimation(eventObj) {

    var button = eventObj.target;

    if (!button.classList.contains('sliding-down')) {
        button.classList.add('sliding-down');
    }       
}

function navbarScroll(scrollPosition) {

    let navbar = document.getElementById('navbar');

    if (scrollPosition > 100) {
        addNavbarScroll(navbar);
    } else {
        removeNavbarScroll(navbar);
    }
}
function addNavbarScroll(navbar) {
    
    navbar.classList.add('navbar-scroll');
}

function removeNavbarScroll(navbar) {
    
    navbar.classList.remove('navbar-scroll');
}