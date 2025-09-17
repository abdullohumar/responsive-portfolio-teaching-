// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');

// Mobile nav toggle
hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('active');
});