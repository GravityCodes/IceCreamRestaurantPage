import "./GlobalStyles.css";
import "./home.css";
import "./menu.css";
import "./about.css";

const $htmlContainer = document.querySelector("#content");

function InitPage () {
    const divHero = document.createElement("div");
    divHero.setAttribute("id", "hero");

    const h1 = document.createElement("h1");
    const imgHero = document.createElement("img")
    imgHero.setAttribute("src", "./img/Main-SoftServe-IceCream.png")
    imgHero.setAttribute("alt", "Vanilla soft serve ice cream")
    
    divHero.appendChild()
    $htmlContainer.appendChild(divHero)
}

export {InitPage};