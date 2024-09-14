import logo from "./img/logo.svg";
import phoneSVG from "./img/phone.svg";
import emailSVG from "./img/mail.svg";

import facebookIcon from "./img/social-media-icons/facebook.png";
import githubIcon from "./img/social-media-icons/github.png";
import instagramIcon from "./img/social-media-icons/instagram.png";
import twitterIcon from "./img/social-media-icons/twitter.png";

const footer = document.createElement("footer");

footer.innerHTML = `<div id="footer-logo">
<img src=${logo} alt="Ice Cream Shop Logo">
</div>
<div id="footer-nav" class="footer-column">
<p>Ice Cream Shop</p>
<button type="button">Home</button>
<button type="button">Menu</button>
<button type="button">About</button>
<button type="button"> Careers</button>
</div>
<div id="contact-info" class="footer-column">
<p>Contact Us</p>
<div id="phone-number" class="contact-item">
    <img src=${phoneSVG} alt="Phone icon">
    <p>+1 123-456-7890</p>
</div>
<div id="email" class="contact-item">
    <img src=${emailSVG} alt="email icon">
    <p id="email"> contact@icecreamshop.com</p>
</div>
<div id="social-media-icons" class="contact-item">
    <img id="facebook-icon" src=${facebookIcon} alt="Facebook icon">
    <img src=${githubIcon} alt="Github icon">
    <img src=${instagramIcon} alt="Instagram icon">
    <img src=${twitterIcon} alt="Twitter icon">
</div>


</div>`

export {footer};