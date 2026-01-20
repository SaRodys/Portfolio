const socialItems = [
  {
    title: "Tenuta Collotta",
    description: "Per l’azienda agricola Tenuta Collotta ho gestito e realizzato le grafiche social per circa 3 anni. Il cliente richiedeva la realizzazione di grafiche che mostrassero i prodotti venduti, attraverso ricette, consigli o informazioni sulla loro composizione e produzione. Non richiedeva una sponsorizzazione tramite meta business suite, ma solamente la stesura e il rispetto di un piano editoriale coerente e funzionale.",
    extra: "Frequenza di pubblicazione: 1 volta a settimana (alternando post, reel e caroselli)",
    extra2: "Social utilizzati: Facebook e Instagram",
    imgDesktop: "src/CollottaMockup.png",
    imgMobile: "src/CollottaMockupB.png",
    alt: "anteprima pagina Instagram Tenuta Collotta",
    classes: { mobile: "border-box", desktop: "border-box" }
  },
  {
    title: "Dracarys",
    description: "Per il progetto di Introduzione al social media management, io e il mio gruppo abbiamo dovuto ideare un’attività per cui realizzare un piano social. La nostra idea si basava su un pub che mette a disposizione dei propri clienti dei giochi da tavolo, organizzando periodicamente tornei ed eventi a tema. Partendo dall’analisi dei competitor e la definizione di un identità aziendale, abbiamo definito i contenuti, le rubriche e gli argomenti per i post, con cui abbiamo realizzato e gestito un piano editoriale coerente e completo. Le date di pubblicazione sono state definite in base agli eventi organizzati all'interno del locale, concentrate principalmente nei weekend.",
    info: "Progetto realizzato durante il master in digital communication design - In collaborazione con Lorenzo Osella, Sara  Potenza, Valentina Raschia",
    extra: "Frequenza di pubblicazione: 3 volte a settimana + Story quotidiane (alternando post, reel e caroselli)",
    extra2: "Social utilizzati: Facebook, Instagram e Tiktok",
    imgDesktop: "src/DracarysMockup.png",
    imgMobile: "src/DracarysMobile.png",
    alt: "anteprima gestione pagina Instagram Dracarys",
    classes: { mobile: "bg-menu text-clight", desktop: "bg-menu text-clight change-img" }
  },
  {
    title: "Ryanair",
    description: "Per il progetto di Strumenti e metodi di interazione nei Social media, abbiamo dovuto analizzare nel profondo il caso studio di un’azienda a scelta. Io e la mia collega abbiamo deciso di prendere come riferimento in caso Ryanair, attirate dalla sua gestione ironica e coinvolgente dei social. Abbiamo analizzato come prima cosa le performance del sito web, attraverso statistiche quali i refferral link e le visite medie mensili. Successivamente abbiamo valutato l’engagement rate, il numero di follower e le performance medie confrontandole con i competitor presenti sul mercato, quali Wizzair e  EasyJet.",
    info: "Progetto realizzato durante il master in digital communication design - In collaborazione con Valentina Raschia",
    imgDesktop: "src/Ryanair.png",
    imgMobile: "src/RyanairB.png",
    alt: "slide illustrative dell'analisi social di Ryanair",
    classes: { mobile: "border-box", desktop: "border-box" }
  },
  {
    title: "L'Alveare che dice Sì",
    description: "Durante il percorso di tirocinio svolto presso L’Alveare che dice Sì, ho avuto l’opportunità di collaborare alla gestione dei profili social dell’azienda. Dopo una prima fase dedicata alla progettazione e realizzazione delle grafiche, mi sono occupata della stesura del piano editoriale, strutturando i contenuti in modo da integrare la dimensione umana del progetto con informazioni e attività di sensibilizzazione sui temi della sostenibilità, centrali per l’identità dell’azienda. Alla produzione di caroselli e post si è affiancata la realizzazione di video e interviste, successivamente montati e adattati ai diversi formati delle piattaforme social.",
    info: "Progetto realizzato durante il tiocinio per il master in digital communication design",
    extra: "Frequenza di pubblicazione: 3 volte a settimana (alternando post, reel e caroselli)",
    extra2: "Social utilizzati: Facebook e Instagram",
    imgDesktop: "src/AlveareMockup.png",
    imgMobile: "src/AlveareMockupB.png",
    alt: "anteprima pagina Instagram de L'Alveare che Dice Sì",
    classes: { mobile: "bg-menu text-clight", desktop: "bg-menu text-clight change-img" }
  },
  {
    title: "Area Italia",
    description: "Area Italia si occupa dell’installazione di sistemi di antifurto e vigilanza per ponteggi. La strategia di comunicazione social è stata progettata per un pubblico adulto, potenzialmente interessato alle tematiche della sicurezza, affrontate in modo accessibile e informativo, senza ricorrere a testi eccessivamente tecnici o poco chiari. Il piano editoriale prevede un’alternanza di fotografie degli impianti installati, curiosità legate al mondo della sicurezza e post dal tono ironico, in dialogo con il materiale di comunicazione offline dell’azienda, che richiamano la figura degli anziani come osservatori attenti e “controllori” dei cantieri.",
    extra: "Frequenza di pubblicazione: 3 volte a settimana + Story quotidiane (alternando post, reel e caroselli)",
    extra2: "Social utilizzati: Facebook e Instagram",
    imgDesktop: "src/AreaItaliaMockup.png",
    imgMobile: "src/AreaItaliaMockupB.png",
    alt: "anteprima gestione pagina Instagram Area Italia",
    classes: { mobile: "border-box", desktop: "border-box" }
  },
];

const boxSocial = document.getElementById("social-media-list");

function rednerSocial(items) {
  boxSocial.innerHTML = items.map((item, index) => `
  <!-- MOBILE -->
<div class="web-design mt-5 ${item.classes.mobile} rounded-4 pt-4 d-block d-md-none mb-5 mobile-box" data-index="${index}">
  <h2 class="reduce-font mb-3">${item.title}</h2>
  <div class="flip-card rounded-4 p-3 bg-transparent">
    <div class="flip-card-inner">
    <div class="flip-card-front rounded-4">
        <img src="${item.imgMobile}" alt="${item.alt}" width="100%">
      </div>
      <div class="flip-card-back rounded-4 bg-menu p-3">
        <p class="text-clight text-start">${item.description}
        ${item.info ? `<br><br><span class="fst-italic">${item.info}</span>` : ""}
        ${item.extra ? `<br><br><span class="fst-italic">${item.extra}</span>` : ""}
        ${item.extra2 ? `<br><br><span class="fst-italic">${item.extra2}</span>` : ""}</p>
      </div>
    </div>
  </div>
</div>

<!-- DESKTOP -->
<div class="web-design contenitore text-left d-none d-md-block ${item.classes.desktop} rounded-4 pt-4 mb-5 p-4">
  <div class="row align-items-center ${index % 2 !== 0 ? "flex-row-reverse" : ""}">
    
    <div class="col-5 p-4">
      <h2 class="reduce-font mb-4">${item.title}</h2>
      <p>
        ${item.description}
        ${item.info ? `<br><br><span class="fst-italic">${item.info}</span>` : ""}
        ${item.extra ? `<br><br><span class="fst-italic">${item.extra}</span>` : ""}
        ${item.extra2 ? `<br><br><span class="fst-italic">${item.extra2}</span>` : ""}
      </p>
    </div>

    <div class="col-7 m-0">
      <img src="${item.imgDesktop}" alt="${item.alt}" width="100%">
    </div>

  </div>
</div>
<button id="backToTop" title="Torna su" class="p-0 box-shadow rounded-4"><img src="./src/arrowT.png" alt="freccia in su" width="100%" class="rounded-4"></button>

`).join("");

  document.querySelectorAll(".mobile-box").forEach(box => {
    box.addEventListener("click", () => {
      const desc = box.querySelector(".mobile-description");
      // toggle display
      if (desc.style.display === "none") {
        desc.style.display = "block";
      } else {
        desc.style.display = "none";
      }
      box.classList.toggle("expanded");
    });
  });

  document.querySelectorAll(".mobile-box").forEach(box => {
    box.addEventListener("click", () => {
      box.classList.toggle("expanded");
    });
  });


}

// Renderizza
rednerSocial(socialItems);