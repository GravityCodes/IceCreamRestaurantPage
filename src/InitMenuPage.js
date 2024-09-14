import itemImg1 from "./img/Purple Dragon.png";
import itemImg2 from "./img/sakura.png";
import itemImg3 from "./img/Vatella.png";
import itemImg4 from "./img/matcha.png";
import itemImg5 from "./img/chocolate.png";
import itemImg6 from "./img/MainSoftServeIceCream.png";

class ConeMenuItem {
    constructor(imgLink, alt, name,price) {
        this.imgLink = imgLink;
        this.name = name;
        this.price = price;
        this.alt = alt;
    }
    init () {
        const menuItem = document.createElement("div");
        menuItem.classList.add("menu-item");

        const imgWrapper = document.createElement("div");
        imgWrapper.classList.add("menu-item-img");
        const img = document.createElement("img");
        img.src = this.imgLink;
        img.alt = this.alt;
        imgWrapper.appendChild(img);

        const menuItemInfo = document.createElement("div");
        menuItemInfo.classList.add("menu-item-info");

        const name = document.createElement("p");
        name.classList.add("item-name");
        name.textContent = this.name;

        const price = document.createElement("p");
        price.classList.add("item-price");
        price.textContent = this.price;

        menuItemInfo.appendChild(name);
        menuItemInfo.appendChild(price);

        menuItem.appendChild(imgWrapper);
        menuItem.appendChild(menuItemInfo);

        return menuItem;
    }
}


function InitMenuPage () {
    const main = document.createElement("main");

    const menuSection = document.createElement("section");
    menuSection.id = "cone-menu";

    const menuTitle = document.createElement("h2");
    menuTitle.textContent = "Menu";

    const coneMenu = document.createElement("div");
    coneMenu.id = "cone-menu";




    menuSection.appendChild(menuTitle)
    main.appendChild(menuSection);

    return main;
}

export {InitMenuPage};