const marketingStrategyItems = [
  {
    title: "Prima Power",
    description: "La richiesta iniziale prevedeva la revisione del sito web, con una riduzione dei contenuti per diminuire la confusione e migliorare l&#39;efficienza comunicativa. Da questo primo intervento è nata l&#39;esigenza di ampliare la strategia di digital marketing, partendo dalla pubblicizzazione del rinnovato sito web. In seguito ad un&#39;analisi preliminare che ha portato all&#39;individuazione delle customer personas e dei loro bisogni, il progetto si è sviluppato attraverso la sponsorizzazione su Google, basata su una ricerca mirata di keywords, headline e descrizioni chiare e ottimizzate per l&#39;algoritmo. La strategia è stata poi estesa ai social media, con la realizzazione di grafiche dedicate per Instagram e Facebook, e infine all&#39;email marketing, utilizzato per promuovere fiere, eventi e sconti.",
    extra: "Progetto realizzato durante il master indigital communication design - In collaborazione con Lorenzo Osella, Sara Potenza, Valentina Raschia",
    imgDesktop: "src/ppstrategy.png",
    imgMobile: "src/ppstrategy2.png",
    alt: "Workflow Prima Power",
    classes: { mobile: "border-box", desktop: "border-box" }
  },
  {
    title: "Obbi",
    description: "Per il lancio di Obbi sul mercato è stata progettata una landing page, accompagnata da una strategia SEO e dalla definizione di keyword ed headlines mirate per la sponsorizzazione tramite Google Ads. L&#39;applicazione, pensata per organizzare attività di gruppo basate su hobby e interessi comuni, nasce con una strategia social già definita, sulla quale è stata costruita l&#39;identità web del progetto.La scelta delle parole chiave si concentra sugli aspetti sociali dell&#39;esperienza e sulla condivisione degli hobby tra persone con passioni affini e una vicinanza territoriale. Particolare attenzione è stata riservata alla progettazione della landing page e alla selezione di titoli e descrizioni che escludessero esplicitamente la componente romantica, distinguendo Obbi dalle app di incontri tradizionali e valorizzandone l&#39;obiettivo di creare connessioni basate su interessi condivisi.",
    extra: "Progetto realizzato durante il master indigital communication design - In collaborazione con Lorenzo Osella, Sara Potenza, Valentina Raschia",
    imgDesktop: "src/Obbi.png",
    imgMobile: "src/Obbi2.png",
    alt: "workflow Obbi",
    classes: { mobile: "bg-menu text-clight", desktop: "bg-menu text-clight change-img" }
  }
];

const box = document.getElementById("marketing-strategy-list");

function renderMarketingStrategy(items) {
  box.innerHTML = items
    .map(
      (item, index) => `
<!-- MOBILE -->
<div class="web-design mt-5 ${item.classes.mobile} rounded-4 pt-4 d-block d-md-none mb-5 mobile-box" data-index="${index}">
  <h2 class="reduce-font mb-3">${item.title}</h2>

  <div class="flip-card rounded-4 p-3 bg-transparent">
    <div class="flip-card-inner">
      
      <div class="flip-card-front rounded-4">
        <img src="${item.imgMobile}" alt="${item.alt}" width="100%">
      </div>

      <div class="flip-card-back rounded-4 bg-menu p-3">
        <p class="text-clight text-start">
          ${item.description}
          ${item.extra ? `<br><br><span class="fst-italic">${item.extra}</span>` : ""}
        </p>
      </div>

    </div>
  </div>
</div>

<!-- DESKTOP -->
<div class="contenitore text-left d-none d-md-block ${item.classes.desktop} rounded-4 pt-4 mb-5">
  <div class="m-0 p-0">
    <img src="${item.imgDesktop}" alt="${item.alt}" width="100%">
  </div>

  <div class="p-lg-5">
    <h2 class="reduce-font mb-4">${item.title}</h2>
    <p>
      ${item.description}
      ${item.extra ? `<br><br><span class="fst-italic">${item.extra}</span>` : ""}
    </p>
  </div>
</div>
`
    )
    .join("");

  // FLIP solo MOBILE
  document.querySelectorAll(".mobile-box").forEach(box => {
    const flipInner = box.querySelector(".flip-card-inner");

    box.addEventListener("click", () => {
      flipInner.classList.toggle("is-flipped");
    });
  });
}

// Render
renderMarketingStrategy(marketingStrategyItems);