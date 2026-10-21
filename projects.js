const projects = [
  {
    title: "Budget Tracker",
    type: "Finance web app",
    text: "A simple budget tracker app that allows users to track their expenses and income.",
    image: "assets/img/budegtweb.png",
    codeImage: "assets/img/budgetcode.png",
  },
  {
    title: "Sheffield City Centre",
    type: "Student guide website",
    text: "A website that provides information about the city centre of Sheffield, including attractions, restaurants, and events for international students.",
    image: "assets/img/sheffphoto.png",
    codeImage: "assets/img/sheffcode.png",
  },
  {
    title: "My Portfolio",
    type: "Personal website",
    text: "A personal portfolio website that showcases my skills, projects, and experience as a web developer.",
    image: "assets/img/portpage.png",
    codeImage: "assets/img/portcode.png",
  },
  {
    title: "AMBN",
    type: "Movies and series website",
    text: "A website that provides information about movies, actors and series.",
    image: "assets/img/ambn.png",
    codeImage: "assets/img/ambncode.png",
  },{
    title: "SHUBER APP",
    type: "Taxi app",
    text: "A taxi app that allows users to book rides, track their drivers, and pay for their trips.",
    image: "assets/img/huberapp.png",
    codeImage: "assets/img/hubercode.png",
  },{
    title: "Encyclopedia StarLords",
    type: "Reference windowapp",
    text: "A comprehensive encyclopedia for the StarLords universe, featuring characters, planets, and lore.",
    image: "assets/img/wikiphoto.png",
    codeImage: "assets/img/wikicode.png",
  }
];

const grid = document.getElementById("project-grid");

projects.forEach(function (project) {
  const card = document.createElement("div");
  card.className = "flip-card";
  card.tabIndex = 0;

  card.innerHTML = `
    <div class="flip-inner">
      <div class="flip-front">
        <img src="${project.image}" alt="${project.title}" class="flip-image">
        <div class="flip-body">
          <h3 class="project-title">${project.title}</h3>
          <p class="project-type">${project.type}</p>
        </div>
      </div>
      <div class="flip-back">
        <img src="${project.codeImage || project.image}" alt="${project.title} code" class="flip-image">
        <div class="flip-body">
          <p class="project-text">${project.text}</p>
        </div>
      </div>
    </div>
  `;

  card.addEventListener("click", function () {
    card.classList.toggle("flipped");
  });

  card.addEventListener("keydown", function (e) {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      card.classList.toggle("flipped");
    }
  });

  grid.appendChild(card);
});