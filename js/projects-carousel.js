const projects = [
  {
    img: "./src/logo.png",
    title: "MeepleMeet",
    subtitle: "Progettazione applicazione social",
    link: "#meeeplemeet"
  },
  {
    img: "./src/Frame 4.png",
    title: "Home Garden",
    subtitle: "Web design e web developer",
    link: "#web-design-list"
  },
  {
    img: "./src/CollottaMockup.png",
    title: "Tenuta Collotta",
    subtitle: "Social media strategist",
    link: "#social-media-list"
  }
];


const indicatorsContainer = document.getElementById("carousel-indicators");
const carouselInner = document.getElementById("carousel-inner");
projects.forEach((project, index) => {

  indicatorsContainer.innerHTML += `
    <button
      type="button"
      data-bs-target="#carouselExampleCaptions"
      data-bs-slide-to="${index}"
      class="${index === 0 ? "active" : ""}"
      aria-current="${index === 0 ? "true" : "false"}"
      aria-label="Slide ${index + 1}">
    </button>
  `;


  carouselInner.innerHTML += `
    <div class="carousel-item ${index === 0 ? "active" : ""}">

    <a href="progetti.html${project.link}">
      <div class="row align-items-center justify-content-center">
        <div class="col-lg-1 ml-lg-2 d-md-none"></div>

        <div class="col-lg-4 col-md-5 text-center mb-3">
          <img
            src="${project.img}"
            class="mb-3 rounded"
            alt="Anteprima ${project.title}"
            width="100%">
        </div>

        <div class="d-none d-lg-block d-md-block col-lg-5 col-md-5">
          <h2 class="text-clight font-basic text-decoration-none">${project.title}</h2>
          <p class="text-decoration-none text-clight">${project.subtitle}</p>
        </div>
      </div>

      <!-- TITOLO MOBILE -->
      <h2
        class="border border-0 rounded
               d-lg-none d-md-none d-sm-block
               text-clight text-center p-2 font-basic text-decoration-none">
        ${project.title}
      </h2>

    </div>
  </a>
  `;
});
