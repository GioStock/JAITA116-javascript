function Canzone(titolo, artista, durata, genere) {
    this.titolo = titolo;
    this.artista = artista;
    this.durata = durata;
    this.genere = genere;

    this.ottieniInfo = function() {
        let info = `Titolo: ${this.titolo}. Artista: ${this.artista}. Durata: ${this.durata}. Genere: ${this.genere}`;
        return info;
    };

    this.riproduci = function() {
        let riproduzione = `Stai riproducendo ${this.titolo}`;
        return riproduzione;
    }
}

let miaPlaylist = [
    new Canzone("Souk eye", "Gorillaz", "4,30", "Rock"),
    new Canzone("Maremoto", "Iside", "2,30", "Indie"),
    new Canzone("Chandelier", "Sia", "3,00", "Pop"),
    new Canzone("Jessica", "Allman Brothers", "12,00", "Southern Rock")
];

let elPlaylist = document.getElementById('playlist');

console.log(miaPlaylist[0].ottieniInfo());

function stampaCanzoni() {
     elPlaylist.innerHTML = "";
    miaPlaylist.forEach(canzone => {
        elPlaylist.innerHTML += `<div class="box-canzone">
                                    <p>Titolo: ${canzone.titolo}</p>
                                    <p>Artista: ${canzone.artista}</p>
                                    <p>Durata: ${canzone.durata}</p>
                                    <p>Genere: ${canzone.genere}</p>
                                </div>`;
    })
}

stampaCanzoni();

/* 
    Far inserire all'utente una nuova canzone attraverso un form e visualizza la playlist aggiornata.
*/

let bottone = document
  .getElementById("bottone")
  .addEventListener("click", aggiungiCanzone);
function aggiungiCanzone() {
  let titolo = document.getElementById("titolo");
  let artista = document.getElementById("artista");
  let durata = document.getElementById("durata");
  let genere = document.getElementById("genere");

  let canzone = new Canzone(
    titolo.value,
    artista.value,
    Number(durata.value),
    genere.value
  );

  if ((titolo.value, artista.value, durata.value, genere.value) == "") {
    alert("inserire i campi vuoti");
  } else {
    miaPlaylist.push(canzone);
    stampaCanzoni();
  }
  titolo.value = "";
  artista.value = "";
  durata.value = "";
  genere.value = "";
}