let colors = ["#FF0800", "#FF7900", "#DFFF00", "#6F00FF", "#FB607F", "#FF00FF"];

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(0.5)
}

function draw() {
  background("black");
//per allineare all'interno del canva
//divido l'ampiezza del canva per 20
  let xStart = windowWidth/20;
  let yStart = windowWidth/20;
//fill #0000 --> per la trasparenza
  fill("#0000");
//ciclo for 
  for(let i = 0; i < 20; i++){
    for(let j = 0; j < 10; j++){
    stroke(random(colors));
    //richiama la funzione dell'ellisse
    //divido su righe e colonne, sempre dividendo il canva per un numero
    drawellipse(yStart + windowWidth/10 * i, xStart + windowWidth/10 * j);
    }
  }
}

//gli ellissi sono distribuiti su linee e colonne
function drawellipse(line, column) {  
//ciclo for per generare diversi ellissi
//il centro rimane lo stesso
//cambiano in modo random width e height
  for(let i=0; i<3; i++) {
//rendo responsive anche lo stroke
    strokeWeight(windowWidth/500)
//column per le x e line per le y
//le coordinate x e y seguono i parametri di inizio di column e line
//i valori random in weight e hight per generare ellissi differenti
//rendo responsive gli ellissi, dividendo widht e height per un determinato numero
stroke(random(colors));
    ellipse(column, line, random(windowWidth/40, windowWidth/15), random(windowWidth/40, windowWidth/15))
    }
}