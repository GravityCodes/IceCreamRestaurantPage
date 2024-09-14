import {InitHomePage} from "./InitHomePage";
import { InitMenuPage } from "./InitMenuPage";
import { InitAboutPage } from "./InitAboutPage";
import {footer} from "./footer";

const $htmlContainer = document.querySelector("#content");
const homePage = InitHomePage();
const menuPage = InitMenuPage();
const aboutPage = InitAboutPage();

// Initialize home page
homePage.forEach(item => $htmlContainer.appendChild(item));
$htmlContainer.appendChild(footer);

(() => {
    const $nav = document.querySelector("nav");
    const $footerNav = document.querySelector("#footer-nav");
    const $fullMenuButton = document.querySelector("#ss-btn");
    const $whyUsButton = document.querySelector("#wu-btn");


    function childsToList (page) {
        if (Array.prototype.isPrototypeOf(page)){
            return page;
        }
        else {
            return [page];
        }
    }

    let currentScreen = childsToList(homePage);
    let currentButton = $nav.children[0];

    function navHandler (e) {
        

        switch (e.target.textContent) {
            case 'Home':
                window.scrollTo(0,0); 
                currentScreen.forEach(child => $htmlContainer.removeChild(child));
                $htmlContainer.removeChild(footer);
                currentButton.classList.remove("active-btn");
                homePage.forEach(child => $htmlContainer.appendChild(child));
                currentScreen = childsToList(homePage); 
                currentButton = $nav.children[0];
                currentButton.classList.add("active-btn");
                $htmlContainer.appendChild(footer);
                break;
            case 'Menu':
                window.scrollTo(0,0); 
                currentScreen.forEach(child => $htmlContainer.removeChild(child));
                $htmlContainer.removeChild(footer);
                currentButton.classList.remove("active-btn");
                $htmlContainer.appendChild(menuPage);
                currentScreen = childsToList(menuPage);
                currentButton = $nav.children[1];
                currentButton.classList.add("active-btn");
                $htmlContainer.appendChild(footer);
                break;
            case 'About':
                window.scrollTo(0,0); 
                currentScreen.forEach(child => $htmlContainer.removeChild(child));
                $htmlContainer.removeChild(footer);
                currentButton.classList.remove("active-btn");
                $htmlContainer.appendChild(aboutPage);
                currentScreen = childsToList(aboutPage);
                currentButton = $nav.children[2];
                currentButton.classList.add("active-btn");
                $htmlContainer.appendChild(footer);
                break;   
            default:
                console.log("No section for pressed button");
        }
        
    }
    $nav.addEventListener('click', e => navHandler(e));
    $footerNav.addEventListener('click', e => navHandler(e));

    function viewFullMenu(){
        window.scrollTo(0,0); 
        currentButton.classList.remove("active-btn");
        currentButton = $nav.children[1];
        currentButton.classList.add("active-btn");
        currentScreen.forEach(child => $htmlContainer.removeChild(child));
        $htmlContainer.removeChild(footer);

        $htmlContainer.appendChild(menuPage);
        currentScreen = childsToList(menuPage);
        $htmlContainer.appendChild(footer);
    }
    $fullMenuButton.addEventListener('click',viewFullMenu);

    function viewAboutUs (){
        window.scrollTo(0,0); 
        currentButton.classList.remove("active-btn");
        currentButton = $nav.children[2];
        currentButton.classList.add("active-btn");
        currentScreen.forEach(child => $htmlContainer.removeChild(child));
        $htmlContainer.removeChild(footer); 
        $htmlContainer.appendChild(aboutPage);
        currentScreen = childsToList(aboutPage);
        $htmlContainer.appendChild(footer);
    }
    $whyUsButton.addEventListener('click', viewAboutUs);
})();



