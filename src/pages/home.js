import { createMenuButton } from '../components/menuButton';
import backgroundImageSrc from '../images/home-bg.jpg'

// Home tab content
export function home() {
    const contentContainer = document.getElementById("content");

    const main = document.createElement("section");
    main.setAttribute("id", "home");
    
    const backgroundImage = document.createElement("img");
    backgroundImage.src = backgroundImageSrc;
    backgroundImage.alt = "Tea pot background image"
    backgroundImage.classList.add("fade-in");
    
    const title = document.createElement("h1");
    title.textContent = "Tea Time Bliss";
    const description = document.createElement("p");
    description.textContent = "Your daily dose of tranquility";

    const menuButton = createMenuButton();

    contentContainer.appendChild(main);
    main.appendChild(backgroundImage);
    main.appendChild(title);
    main.appendChild(description);
    main.appendChild(menuButton);
}

