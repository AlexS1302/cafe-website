import backgroundImageSrc from '../images/about-bg.jpg'

// About tab content 
export function about(){
    const contentContainer = document.getElementById("content");

    const main = document.createElement("section");
    main.setAttribute("id", "about");
    contentContainer.appendChild(main);

    const backgroundImage = document.createElement("img");
    backgroundImage.src = backgroundImageSrc;
    backgroundImage.alt = "Cake image"
    main.appendChild(backgroundImage);

    const articleContainer = document.createElement("div");
    articleContainer.setAttribute("id", "article-container");
    articleContainer.classList.add("article-border");
    main.appendChild(articleContainer);

    const article = document.createElement("article");
    articleContainer.appendChild(article);

    // Text
    const h1 = document.createElement("h1");
    h1.textContent = "Where Every Sip Feels Like Home";
    h1.setAttribute("id", "about-header");
    article.appendChild(h1);

    const p = document.createElement("p");
    p.setAttribute("id", "about-paragraph");

    p.textContent = "Welcome to your sanctuary of comfort and indulgence.\n\n";
    p.textContent += "At Café Bliss, we believe in more than just serving drinks, we craft experiences. Sip sustainably sourced teas and coffees from all around the world. Pair your drink with our delicious cakes and pastries, freshly baked with love and care by our local artisans.\n\n";
    p.textContent += "Whether you're seeking a quiet corner to read your favorite book or a lively space to enjoy live acoustic music on weekends, we have something for everyone. With free Wi-Fi, cozy seating, and a menu that evolves with the seasons, we aim to be more than just a café—a place where connections are nurtured, and memories are made.\n\n";
    p.textContent += "From the first sip of your morning coffee to the last bite of an afternoon treat, we're here to make every moment special.\n\n"
    p.textContent += "Join us in celebrating the simple joys of life, one cup at a time."
    
    article.appendChild(p);

}