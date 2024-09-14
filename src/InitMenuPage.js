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
    main.id = "menu-main";
    
    const menuSection = document.createElement("section");
    menuSection.id = "menu";

    const menuTitle = document.createElement("h2");
    menuTitle.textContent = "Menu";

    const coneMenu = document.createElement("div");
    coneMenu.id = "cone-menu";

    const purpleDragonIc = new ConeMenuItem(itemImg1,"purple dragon ice cream", "Purple Dragon","$4.99");
    const sakuraIc = new ConeMenuItem(itemImg2, "Vatella ice cream", "Sakura", "$2.99");
    const vatellaIc = new ConeMenuItem(itemImg3, "Vatella ice cream", "Vatella", "$4.99");
    const matchaIc = new ConeMenuItem(itemImg4, "matcha ice cream", "Matcha", "$3.99");
    const chocolateIc = new ConeMenuItem(itemImg5, "chocolate ice cream", "Chocolate", "$2.99");
    const vanillaIc = new ConeMenuItem(itemImg6,"Vanilla ice cream", "Vanilla", "$4.99");

    let menuItems = [purpleDragonIc.init(), sakuraIc.init(), vatellaIc.init(), matchaIc.init(), chocolateIc.init(), vanillaIc.init()];

    menuItems.forEach(item => coneMenu.appendChild(item));

    menuSection.appendChild(menuTitle)
    menuSection.appendChild(coneMenu);
    main.appendChild(menuSection);

    return main;
}

export {InitMenuPage};