import {InitHomePage} from "./InitHomePage";
import { InitMenuPage } from "./InitMenuPage";
import { InitAboutPage } from "./InitAboutPage";
import {footer} from "./footer";

const $htmlContainer = document.querySelector("#content");

//InitHomePage().forEach(item => $htmlContainer.appendChild(item));

//$htmlContainer.appendChild(InitMenuPage());

$htmlContainer.appendChild(InitAboutPage());

$htmlContainer.appendChild(footer);