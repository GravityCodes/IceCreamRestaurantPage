import imgLink from "./img/meadowlarkedit.jpeg";

function InitAboutPage () {
    const section = document.createElement("section");
    section.id = "about-section";
    const title = document.createElement("div");
    title.id = "about-title";

    const p1 = document.createElement("p");
    p1.id = "about-p";
    p1.textContent = "We make ice cream."

    const p2 = document.createElement("p");
    p2.textContent = `We build ice creams completely from scratch using a unique recipe honed and perfected over more than 20 years by our founder.
        Our ice creams have a uniquely smooth texture and buttercream body, with bright flavor and clean finish. We’re here to set new
        standards for ice cream classics and to create our own. At the ice cream shop, you’ll find flavors inspired by our curiosities—art,
        history, pop culture, and beyond—that simply don’t exist anywhere else.`;
    const imgWrapper = document.createElement("div");
    imgWrapper.id = "about-us-img";

    const img = document.createElement("img");
    img.src = imgLink;
    img.alt = ""

    imgWrapper.appendChild(img);

    section.appendChild(title);
    section.appendChild(p1);
    section.appendChild(p2);
    section.appendChild(imgWrapper);

    return section;
}

export {InitAboutPage};