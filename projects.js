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
        <img src="${project.codeImage}" alt="${project.title} code" class="flip-image">
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