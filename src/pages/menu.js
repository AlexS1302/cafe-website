import backgroundImageSrc from '../images/menu-bg.jpg'
import { menuItems } from '../components/menuData.js';
import { displayMenu } from '../components/displayMenu.js';

export function menu(){
    const contentContainer = document.getElementById("content");

    const main = document.createElement("section");
    main.setAttribute("id", "menu");
    contentContainer.appendChild(main);

    const backgroundImage = document.createElement("img");
    backgroundImage.src = backgroundImageSrc;
    backgroundImage.alt = "Tea background image"
    main.appendChild(backgroundImage);

    const menuContainer = document.createElement("div");
    menuContainer.setAttribute("id", "menu-container");
    menuContainer.classList.add("menu-border")
    main.appendChild(menuContainer);
    
    const teaHeader = document.createElement("h1");
    teaHeader.setAttribute("id", "tea-header");
    teaHeader.textContent = "Seasonal Teas";
    menuContainer.appendChild(teaHeader);
    
    const menuList = document.createElement("ul");
    menuList.setAttribute("id", "menu-list");
    menuContainer.appendChild(menuList);

    displayMenu(menuItems);
}