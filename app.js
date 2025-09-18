// Global Variable
const themes = ['default', 'blue', 'green'];
let currentTheme = 0;

// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const themeBtn = document.getElementById('theme-btn');
const themeIcon = document.querySelector('.theme-icon');

// Mobile nav toggle
hamburger.addEventListener('click', function(){
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(){
        navMenu.classList.remove('active');
    });
});

// Theme Switcher
themeBtn.addEventListener('click', function () {
    currentTheme = (currentTheme + 1) % themes.length;
    document.body.setAttribute('data-theme', themes[currentTheme]);

    // update icon
    const icons = ['🌈', '💙', '💚'];
    themeIcon.textContent = icons[currentTheme];
});