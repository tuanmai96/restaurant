function createHome() {
    const home = document.createElement("div");
    home.classList.add("home");
  
    const chefImage = document.createElement("img");
    chefImage.src = "images/chef.png";
    chefImage.alt = "Chef";
  
    home.appendChild(createParagraph("Best noodles in town"));
    home.appendChild(createParagraph("Open since 2020"));
    home.appendChild(chefImage);
    home.appendChild(createParagraph("3 Michelin stars since 2020"));
  
    return home;
  }
  
  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }
  
  function loadHome() {
    const main = document.getElementById("main");
    main.textContent = "";
    main.appendChild(createHome());
  }
  
  export default loadHome;