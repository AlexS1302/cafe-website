import backgroundImageSrc from '../images/menu-bg.jpg'
import { teas } from '../components/menuData.js';
import { desserts } from '../components/menuData.js';
import { displayMenu } from '../components/displayMenu.js';

export function menu(){
    const contentContainer = document.getElementById("content");

    const main = document.createElement("section");
    main.setAttribute("id", "menu");

    const backgroundImage = document.createElement("img");
    backgroundImage.src = backgroundImageSrc;
    backgroundImage.alt = "Tea background image"
    main.appendChild(backgroundImage);

    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menu-container");
    menuContainer.classList.add("menu-border")
    
    //Teas
    const teaHeader = document.createElement("h1");
    teaHeader.setAttribute("id", "tea-header");
    teaHeader.textContent = "Seasonal Teas";
    menuContainer.appendChild(teaHeader);
    
    const teaList = document.createElement("ul");
    teaList.setAttribute("id", "tea-list");
    menuContainer.appendChild(teaList);

    displayMenu(teas, teaList);

    //Cakes
    const dessertHeader = document.createElement("h1");
    dessertHeader.setAttribute("id", "dessert-header");
    dessertHeader.textContent = "Seasonal Desserts";
    menuContainer.appendChild(dessertHeader);

    const dessertList = document.createElement("ul");
    dessertList.setAttribute("id", "dessert-list");
    menuContainer.appendChild(dessertList);

    displayMenu(desserts, dessertList);

    main.appendChild(menuContainer);
    contentContainer.appendChild(main);
}