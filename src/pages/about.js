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
    main.appendChild(articleContainer);

    const article = document.createElement("article");
    articleContainer.appendChild(article);


}