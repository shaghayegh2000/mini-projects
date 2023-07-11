const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav =document.getElementById('nav');
const toggleIcon =document.getElementById('toggle-icon');
const image1 =document.getElementById('image1');
const image2 =document.getElementById('image2');
const image3 =document.getElementById('image3');
const textBox =document.getElementById('text-box');

function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun' , 'fa-moon');
    image1.src = 'img/undraw_proud_coder_dark.svg';
    image1.src = 'img/undraw_proud_coder_dark.svg';
    image1.src = 'img/undraw_proud_coder_dark.svg';
}

function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)'
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)'
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon' , 'fa-sun');
    image1.src = 'img/undraw_proud_coder_light.svg';
    image1.src = 'img/undraw_proud_coder_light.svg';
    image1.src = 'img/undraw_proud_coder_light.svg';
}
function switchTheme(ev) {
    if (ev.target.checked) {
        document.documentElement.setAttribute('data-theme' , 'dark');
        darkMode();
    } else {
        document.documentElement.setAttribute('data-theme' , 'light');
        lightMode();
    }
}

toggleSwitch.addEventListener('change' , switchTheme);