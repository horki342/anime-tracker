import { Tooltip } from 'bootstrap';
import { resizingAbility } from './scripts/mobile';
import './sass/main.scss';

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
