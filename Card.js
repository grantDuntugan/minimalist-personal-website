class Card extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });

    // Create card wrapper
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    // Create the image tag
    const img = document.createElement("img");
    img.setAttribute("class", "img-fluid");
    let imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "https://picsum.photos/seed/picsum/200/300";
    }
    img.src = imgUrl;
    card.appendChild(img);

    // Create card body
    const cardBody = document.createElement("div");
    cardBody.setAttribute("class", "card-body");

    // Create card title
    const cardTitle = document.createElement("h4");
    cardTitle.setAttribute("class", "card-title");
    let title;
    if (this.hasAttribute("title")) {
      title = this.getAttribute("title");
    } else {
      title = "Dummy title";
    }
    cardTitle.textContent = title;
    cardBody.appendChild(cardTitle);

    // Create card text
    let cardText = document.createElement("p");
    cardText.setAttribute("class", "card-text");
    let text;
    if (this.hasAttribute("text")) {
      text = this.getAttribute("text");
    } else {
      text = "Dummy text";
    }
    cardText.textContent = text;
    cardBody.appendChild(cardText);

    // Append card body
    card.appendChild(cardBody);

    shadow.appendChild(card);

    // Apply external styles to the shadow DOM
    const linkElem = document.createElement("link");
    linkElem.setAttribute("rel", "stylesheet");
    linkElem.setAttribute("href", "bootstrap-4.3.1-dist/css/bootstrap.min.css");

    // Attach the created element to the shadow DOM
    shadow.appendChild(linkElem);
  }
}

customElements.define("custom-card", Card);
