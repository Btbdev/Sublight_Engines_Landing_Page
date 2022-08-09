const hamburger = document.getElementbyId('hamburger');
const navMenu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    // navMenu.classList.toggle('change');
});

// document.querySelectorAll('.nav-link').forEach(n =>
//     n.addEventListener('click', () => {
//         hamburger.classList.remove('change');
//         navMenu.classList.remove('change');
//     }))