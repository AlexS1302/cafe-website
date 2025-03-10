import 'modern-normalize/modern-normalize.css';
import "./styles.css";
import {home} from './pages/home.js';
import {about} from './pages/about.js';
import {menu} from './pages/menu.js';

// Tab switching logic
const contentContainer = document.getElementById("content");
const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const aboutBtn = document.getElementById("about-btn");
homeBtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    home();
});

menuBtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    menu();
});

aboutBtn.addEventListener("click", () => {
    contentContainer.innerHTML = "";
    about();
});

home();