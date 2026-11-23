
let coloriRGB = [];

function elabora() {
  // Pulisce errori precedenti
  document.getElementById("error").innerHTML = "";


  let numero = parseInt(document.getElementById("inNumber").value);

  // Controlla che sia un numero valido 
  if (isNaN(numero) || numero < 0 || numero > 255) {
    document.getElementById("error").innerHTML = "Errore: inserisci un numero intero da 0 a 255.";
    return;
  }

  
  coloriRGB.push(numero);


  document.getElementById("outText").innerHTML = "Numero inserito: " + numero;
 
  
  //controlla che ci siano almeno 3 numeri
  if (coloriRGB.length < 3) {
  document.getElementById("outText").innerHTML = "non ci sono abbastanza numeri";
  document.getElementById("inNumber").value = "";
  return;
}



  console.log("I tre numeri sono: " + coloriRGB[0] + ", " + coloriRGB[1] + ", " + coloriRGB[2]);

  // Crea il colore RGB e mostra il testo colorato nel paragrafo
  let codiceRGB = "rgb(" + coloriRGB[0] + ", " + coloriRGB[1] + ", " + coloriRGB[2] + ")";
  document.getElementById("outText").innerHTML = document.getElementById("inText").value;
  document.getElementById("outText").style.color = codiceRGB;

  // Svuota l'array e la casella di testo
  coloriRGB = [];
  document.getElementById("inNumber").value = "";
}

function cancella() {
  coloriRGB = [];
  document.getElementById("inNumber").value = "";
  document.getElementById("inText").value = "";
  document.getElementById("outText").innerHTML = "Output";
  document.getElementById("error").innerHTML = "Errori";

}