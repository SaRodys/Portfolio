class MeepleMeet extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
            <div class="border-box rounded-4 m-lg-5 m-2 p-4 mt-5 mt-lg-0">
                <h2>L'idea</h2>
                <div class="row mt-4 align-items-center">
                    <div class="col-lg-3 col-md-3 rounded-4">
                        <img src="./src/logo.png" alt="logo MeepleMeet" width="100%" class="rounded-4">
                    </div>
                    <p class="col-lg-9 col-md-9 mt-lg-0 mt-3 text-center text-lg-left">MeepleMeet nasce con l’esigenza di riunire in un’unica piattaforma bar, locali e 
                        appassionati di giochi da tavolo, per rendere immediata la ricerca di luoghi che organizzano eventi 
                        tematici e mettono a disposizione degli utenti la possibilità di giocare.</p>
                </div>
            </div>
            <div class="border-box rounded-4 m-lg-5 m-2 p-4 mt-5 mt-lg-0">
                <h2>L'indagine</h2>
                <div class="row mt-4 align-items-center">
                    <p class="col-lg-5 col-md-5 text-center text-lg-left">Prima di procedere con lo sviluppo e il pensiero di MeepleMeet, 
                            realizzato un sondaggio, per capire se ci potesse essere un effettivo interesse 
                            nell’applicazione e quali feature includere. Da qui abbiamo quindi ricavato diverse 
                            informazioni che ci hanno condotto allo sviluppo di funzionalità specifiche per bar, 
                            utenti e per permettere maggiore socializzazione tramite minigiochi.
                    </p>
                    <div class="col-lg-3 col-md-3 rounded-4">
                        <img src="./src/meeplemeetQuestionario.jpeg" alt="invito al questionario" width="100%" height="100%" class="rounded-4">
                    </div>
                    <div class="col-lg-4 col-md-4 rounded-4 mt-lg-0 mt-3">
                        <img src="./src/grafico.png" alt="grafico risposte al questionario" width="100%" class="rounded-4 ">
                    </div>
                </div>
            </div>
            <div class="border-box rounded-4 m-lg-5 m-2 p-4 mt-5 mt-lg-0">
                    <h2>Le funzionalità</h2>
                    <div class="row mt-lg-4 m-lg-5 m-1 align-items-start ">
                        <div class="col-lg-4 col-md-4 text-center mt-5 mt-lg-0">
                            <p>Mappa dei localcol-md-4 i con giochi da tavolo</p>
                            <img src="./src/Mappa.png" alt="mappa locali con giochi da tavolo" width="90%">
                        </div>
                        <div class="col-lg-4 col-md-4 text-center mt-5 mt-lg-0">
                            <p>Locandine ed eventi pubblicizzabili dai locali</p>
                            <img src="./src/Eventi.png" alt="locandina prossimo evento" width="90%">                        
                        </div>
                        <div class="col-lg-4 col-md-4 text-center mt-5 mt-lg-0">
                            <p>Calendario con eventi e prenotazioni</p>
                            <img src="./src/calendario.png" alt="calendario con gli eventi del mese" width="90%">                        
                        </div>
                        <div class="col-lg-4 col-md-4 text-center mt-lg-5 mt-5">
                            <p>Foto e video pubblicabili dagli utenti</p>
                            <img src="./src/post.png" alt="post pubblicato da un utente" width="90%">
                        </div>
                        <div class="col-lg-4 col-md-4 text-center mt-lg-5 mt-5">
                            <p>Badge e sfide periodiche legate ai post</p>
                            <img src="./src/Badge.png" alt="sfida per vincere un badge" width="90%">                        
                        </div>
                        <div class="col-lg-4 col-md-4 text-center mt-lg-5 mt-5">
                            <p>Minigiochi per conoscere nuovi profili</p>
                            <img src="./src/MATCH.png" alt="minigioco per sfidare un altro utente" width="90%">                        
                        </div>
                    </div>
                </div>
            </div>
    `;
  }
}

customElements.define("meeple-meet", MeepleMeet);
