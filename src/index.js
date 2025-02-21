import 'modern-normalize/modern-normalize.css';
import "./styles.css";
import {home} from './pages/home.js';
import {about} from './pages/about.js';
import {menu} from './pages/menu.js';

// Tab switching logic
const contentContainer = document.getElementById("content");
const homeBtn = document.getElementById("home");
const aboutBtn = document.getElementById("about");
const menuBtn = document.getElementById("menu");

homeBtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    home();
})

aboutBtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    about();
})

menuBtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    menu();
})
