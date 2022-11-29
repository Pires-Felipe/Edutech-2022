let xBolinha = 300;
let yBolinha = 200;
let diametro = 15;
let xVelocidade = 6;
let yVelocidade = 6;
let raio = diametro / 2;
let xRaquete = 5;
let yRaquete = 150;
let raqueteLargura = 10;
let raqueteAltura = 90;

function setup() {
   createCanvas(600, 400);
}

function draw() {
   background(0);
   mostraBolinha();
   movimentaBolinha();
   colisaoBolinha();
   raquete();
   moveRaquete();
   coliderRaquete();
}


function mostraBolinha () {
   circle(xBolinha, yBolinha, diametro);
}

function colisaoBolinha () {
   if (xBolinha + raio > width || xBolinha - raio < 0) {
      xVelocidade *= -1;
   }
   
   if (yBolinha + raio > height || yBolinha - raio < 0) {
      yVelocidade *= -1;
   }
}

function movimentaBolinha() {
   xBolinha += xVelocidade;
   yBolinha += yVelocidade;
}

function raquete () {
   rect(xRaquete, yRaquete, raqueteLargura, raqueteAltura);
}

function moveRaquete () {
   if(keyIsDown(UP_ARROW)) {
      yRaquete -= 10;
}

   if(keyIsDown(DOWN_ARROW)) {
      yRaquete += 10;
}
}

function coliderRaquete () {
   if(xBolinha - raio < xRaquete + raqueteLargura && yBolinha - raio < yRaquete + raqueteAltura && yBolinha + raio > yRaquete) {
      xBolinha *= -1;
   }
}



/* 

let = variáveis 
+=  = Valor próprio mais algo
*=  = Valor próprio vezes algo
|| = "ou"
if = "se"
&& = "e"
keyIsDown = teclas seta presionada
UP_ARROW = tecla acima 
DOWN_ARROW = tecla baixo 
*/ 