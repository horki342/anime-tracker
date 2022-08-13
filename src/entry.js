import { Tooltip } from 'bootstrap';
import './sass/main.scss';
import { test } from './scripts/foo';

// Make tooltips available
const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipsList = [...tooltipTriggerList].map(tooltipTriggerEl => new Tooltip(tooltipTriggerEl));

