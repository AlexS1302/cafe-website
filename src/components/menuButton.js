import { menu } from "../pages/menu";

export function createMenuButton() {
    const contentContainer = document.getElementById("content");

    const menuButton = document.createElement("button");
    menuButton.setAttribute("id", "find-out-btn");
    menuButton.textContent = "Find out more";

    menuButton.addEventListener("click", () => {
        contentContainer.innerHTML = "";
        menu();
    });

    return menuButton;
}