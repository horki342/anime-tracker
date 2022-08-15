import './sass/main.scss';
import { Tooltip } from 'bootstrap';
import { resizingAbility } from './scripts/mobile';
import animeCardToggler from './scripts/anime-card-togger';

// Make tooltips available
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipsList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));

// Resizing ability 
resizingAbility();
window.addEventListener('resize', () => resizingAbility());

// nav buttons functionality
document.getElementById("down").onclick = function () {
    window.scroll(0, window.scrollY + 100);
};

document.getElementById("up").onclick = function () {
    window.scroll(0, window.scrollY - 100);
}

// init anime card toggler
const openButtons = document.querySelectorAll('[name="open-container"]');
let active = true;
openButtons.forEach(btn => btn.addEventListener('click', () => {
    if (active) animeCardToggler.openCard(btn.parentNode);
    else animeCardToggler.closeCard(btn.parentNode);
    active = !active;
}));

// textarea resizing
const textarea = document.querySelector('textarea');
textarea.oninput = () => textarea.style.height = `${textarea.scrollHeight}px`;