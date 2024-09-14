import "./GlobalStyles.css";
import "./home.css";
import "./menu.css";
import "./about.css";
import imgHeroLink from "./img/MainSoftServeIceCream.png";
import img1Link from "./img/sakura.png";
import img2Link from "./img/Vatella.png";
import img3Link from "./img/Purple Dragon.png";
import acImg1Link from "./img/largeserving.jpg";
import acImg2Link from "./img/icecreammachine.jpg";





class IceCreamItem  {
    constructor(imgUrl, imgAlt, name, details, price) {
        this.imgUrl = imgUrl;
        this.imgAlt = imgAlt;
        this.name = name;
        this.details = details;
        this.price = price;
    }
    init() {
        
        const iceCreamItem1 = document.createElement("div");
        iceCreamItem1.classList.add("ice-cream-item");
    
        const img1 = document.createElement("img");
        img1.src = this.imgUrl;
        img1.alt = this.imgAlt;
        
        const icInformation = document.createElement("div");
        icInformation.classList.add("ic-information");

        const nameP = document.createElement("p");
        nameP.textContent = this.name;

        const infoP = document.createElement("p");
        infoP.textContent = this.details;

        const price = document.createElement("p");
        price.textContent = this.price;
        price.classList.add("ic-price");

        iceCreamItem1.appendChild(img1);
        iceCreamItem1.appendChild(icInformation);

        icInformation.appendChild(nameP);
        icInformation.appendChild(infoP);

        iceCreamItem1.appendChild(price);

        return iceCreamItem1;
    }
}

function InitHomePage () {

    // HERO SECTION

    const divHero = document.createElement("div");
    divHero.id = "hero";

    const h1Hero = document.createElement("h1");
    h1Hero.textContent = "Ice Cream So Good You Might Lick It Off The Screen.";

    const imgHero = document.createElement("img");
    imgHero.src = imgHeroLink;
    imgHero.alt = "Vanilla soft serve ice cream";
    
    divHero.appendChild(h1Hero);
    divHero.appendChild(imgHero);
    /*****************************************************/

    // MAIN SECTION

    const main = document.createElement("main");

    // Special Section
    const h2Main = document.createElement("h2");
    h2Main.textContent = "Specials";

    const SpecialSection = document.createElement("section");
    SpecialSection.id = "special-section";

    const SpecialContainer = document.createElement("div");
    SpecialContainer.id = "special-container";


    const iceCreamItem1 = new IceCreamItem(img1Link,"Strawberry Soft Serve Ice cream","Sakura", "Soft swerve ice cream made with pink Japanese strawberries.", "$3.99");
    const iceCreamItem2 = new IceCreamItem(img2Link, "Vanilla and nutella soft serve ice cream","Vanetlla", "Vanilla and nutella soft serve ice cream.", "$2.99");
    const iceCreamItem3 = new IceCreamItem(img3Link, "Taro soft serve ice cream", "Purple Dragon","Taro vanilla soft swerve ice cream from Japan", "$4.99");
    
    const specialSectionP = document.createElement("p");
    specialSectionP.textContent = "Enjoy these new flavors never seen before!";
    
    const specialBtnWrapper = document.createElement("div");
    specialBtnWrapper.classList.add("btn-wrapper");
    
    const specialSectionbtn = document.createElement("button");
    specialSectionbtn.type = "button";
    specialSectionbtn.classList.add("special-btn");
    specialSectionbtn.textContent = "View Full Menu";
    specialBtnWrapper.appendChild(specialSectionbtn);  
    /*********************************************************/

    // WHY US SECTION
    const wuSectionh2 = document.createElement("h2");
    wuSectionh2.textContent = "Why Our Ice Cream?";

    const wuSection = document.createElement("section");
    wuSection.id = "why-us-section";

    const aboutContainer1 = document.createElement("div");
    aboutContainer1.classList.add("about-container");

    const aboutContainer2 = document.createElement("div");
    aboutContainer2.classList.add("about-container");

    const acText1 = document.createElement("div");
    acText1.classList.add("ac-text");

    const acText2 = document.createElement("div");
    acText2.classList.add("ac-text");

    const acTextH31 = document.createElement("h3");
    acTextH31.textContent = "Large Serving Size";

    const acTextH32 = document.createElement("h3");
    acTextH32.textContent = "Natural Flavors";

    const acTextP1 = document.createElement("p");
    acTextP1.textContent = "We do not hold back on our ice cream sizes!";

    const acTextP2 = document.createElement("p");
    acTextP2.textContent = "No fake ingredients are used in our shops. Everything is real!";


    const acImg1 = document.createElement("img");
    acImg1.src = acImg1Link;
    acImg1.alt = "large Ice Cream servings."

    const acImg2 = document.createElement("img");
    acImg2.src = acImg2Link;
    acImg2.alt = "Person preparing ice cream.";


    acText1.appendChild(acTextH31);
    acText1.appendChild(acTextP1);

    acText2.appendChild(acTextH32);
    acText2.appendChild(acTextP2);

    aboutContainer1.appendChild(acText1);
    aboutContainer1.appendChild(acImg1);

    aboutContainer2.appendChild(acImg2);
    aboutContainer2.appendChild(acText2);

    const wuBtnWrapper = document.createElement("div");
    wuBtnWrapper.id = "why-us-btn-wrapper";
    wuBtnWrapper.classList.add("btn-wrapper");
    
    const wuButton = document.createElement("button");
    wuButton.type = "button";
    wuButton.classList.add("special-btn");
    wuButton.classList.add("why-us-btn");
    wuButton.textContent = "Learn more";

    wuBtnWrapper.appendChild(wuButton);

    
    /**************************************************/

    /********************************************************/

    SpecialContainer.appendChild(iceCreamItem1.init());
    SpecialContainer.appendChild(iceCreamItem2.init());
    SpecialContainer.appendChild(iceCreamItem3.init());

    
    main.appendChild(h2Main);
    main.appendChild(SpecialSection);
    main.appendChild(wuSectionh2);
    main.appendChild(wuSection);
    main.appendChild(wuBtnWrapper);
    
    SpecialSection.appendChild(SpecialContainer);
    SpecialSection.appendChild(specialSectionP);
    SpecialSection.appendChild(specialBtnWrapper);

    wuSection.appendChild(aboutContainer1);
    wuSection.appendChild(aboutContainer2);
    


    return [divHero,main];
}

export {InitHomePage};