export function displayMenu(menuItems, menuList) {
    menuItems.forEach(item => {
        const menuItemContainer = document.createElement("li");
        menuItemContainer.classList.add("menu-item");

        const itemName = document.createElement("h3");
        itemName.textContent = item.name;

        const itemDesc = document.createElement("p");
        itemDesc.textContent = item.description;

        menuItemContainer.appendChild(itemName);
        menuItemContainer.appendChild(itemDesc);
        menuList.appendChild(menuItemContainer);
    });
}
