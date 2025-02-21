import backgroundImageSrc from '../images/background-image.jpg'

// Home tab content
export function home() {
    const contentContainer = document.getElementById("content");

    const mainSection = document.createElement("div");
    mainSection.setAttribute("id", "main");
    
    const backgroundImage = document.createElement("img");
    backgroundImage.src = backgroundImageSrc;
    backgroundImage.alt = "Tea pot background image"
    backgroundImage.classList.add("fade-in");
    
    const title = document.createElement("h1");
    title.textContent = "Tea Time Bliss";
    const description = document.createElement("p");
    description.textContent = "Your daily dose of tranquility";
    const button = document.createElement("button");
    button.setAttribute("id", "find-out-btn");
    button.textContent = "Find out more";
    
    contentContainer.appendChild(mainSection);
    mainSection.appendChild(backgroundImage);
    mainSection.appendChild(title);
    mainSection.appendChild(description);
    mainSection.appendChild(button);
}

