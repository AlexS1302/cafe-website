import backgroundImageSrc from '../images/menu-bg.jpg'

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

    const menuList = document.createElement("ul");
    menuList.setAttribute("id", "menu-list");
    menuContainer.appendChild(menuList);

    // Menu items
    const teaHeader = document.createElement("h3");
    teaHeader.setAttribute("id", "tea-header");
    teaHeader.textContent = "Seasonal Teas";
    menuList.appendChild(teaHeader);

    const greenTea = document.createElement("p");
    greenTea.textContent = "Cherry Blossom Green Tea";
    menuList.appendChild(greenTea);

}