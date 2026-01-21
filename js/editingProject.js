const editingStetegyItem = [
  {
    title: "Alkee",
    description: "Alkee è un brand di birra analcolica per il quale è stato realizzato uno spot pubblicitario destinato alla diffusione sui social media. Dopo un&#39;analisi della filosofia e delle caratteristiche del prodotto, il concept dello spot è stato sviluppato adottando un&#39;atmosfera da documentario-thriller. L&#39;obiettivo era mostrare il prodotto come qualcosa di ricercato, raro e molto prezioso, oggetto di desiderio di due esploratori che dopo una lunga ricerca e conflitti, riescono a trovare all&#39;interno di un bar abbandonato. Il video è stato interamente realizzato dal gruppo, dalla scrittura alla fase di ripresa fino al montaggio finale. Il mio ruolo ha incluso la regia, l&#39;operatore di macchina e il montaggio video, permettendomi di seguire l&#39;intero processo creativo e garantire una visione coerente del risultato finale.",
    extra: "Progetto realizzato durante il master indigital communication design - In collaborazione con Lorenzo Osella, Sara Potenza, Valentina Raschia",
    copertina: "./src/Editing.png",
    desktop: "border-box",
    link: "https://drive.google.com/file/d/1Si61b9WJ_CylO2V4wcbZB2wtEhTLzoNb/view?usp=sharing"
  },
  {
    title: "Emotional Patchwork",
    description: "Per corso di Regia video della facoltà di Discipline delle Arti, della Musica e dello Spettacolo, io e la mia collega abbiamo realizzato un video incentrato sul tema delle emozioni e sul modo in cui esse vengono espresse attraverso l&#39;abbigliamento. Una rivisitazione in chiave moderna di questo concetto ha portato alla rappresentazione di diverse emozioni, ciascuna associata a una specifica palette cromatica e a uno stile di vestiario definito. Nel video le emozioni emergono gradualmente, seguendo il crescendo di una musica ritmata che tende ad accelerare nel tempo, accompagnando la crescita emotiva fino al raggiungimento di un apice. Da qui le emozioni convergono, si amplificano ed esplodono, diventando incontrollabili. All&#39;interno del progetto mi sono occupata della co-sceneggiatura, della regia, della gestione della camera e del montaggio video.",
    extra: "Progetto realizzato durante l&#39;università per il corso di Regia Video - In collaborazione con Aurora Currà",
    copertina: "src/EmotionPatchwork.png",
    desktop: "bg-menu text-clight",
    link: "https://drive.google.com/file/d/1dcMOLU9v8ncxmemmm78YnxO4FE72r0-4/view?usp=sharing"
  }
];

const regiaBox = document.getElementById("editing-list");

function renderEditingStrategy(items) {
  regiaBox.innerHTML = items.map((item) => `   
    <div class="row align-items-center mt-4 border-box rounded-4 p-4 mb-5">
      <h2>${item.title}</h2> 
      <a href="${item.link}" aria-label="Visita il file video su google drive" class="col-12 col-lg-6 copertina-video">
        <button class="border-0 play text-center"><img src="./src/play.png" alt="bottone play" class="play rounded-circle p-2"></button>
        <img src=${item.copertina} alt="copertina ${item.title}" width="100%">
      </a>
      <p class="col-12 col-lg-6 p-4 text-center text-lg-left">${item.description} 
        <br>
        <br>
        <span class="fst-italic text-lg-left">${item.extra ? `${item.extra}` : ""}</span>
      </p>
    </div>
    
`).join("");
}

// Renderizza
renderEditingStrategy(editingStetegyItem);
