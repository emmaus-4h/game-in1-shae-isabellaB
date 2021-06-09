/// @ts-check
/// <reference path=".gitpod/p5.global-mode.d.ts" />
"use strict";

/* Game opdracht
   Informatica - Emmauscollege Rotterdam
   Template voor een game in JavaScript met de p5 library

   Begin met dit template voor je game opdracht,
   voeg er je eigen code aan toe.
 */




/* ********************************************* */
/* globale variabelen die je gebruikt in je game */
/* ********************************************* */

const UITLEG = 0;
const SPELEN = 1;
const GAMEOVER = 2;
var spelStatus = SPELEN;

var spelerX = 500; // x-positie van speler
var spelerY = 300; // y-positie van speler

var buisX1 = 1200;   // x-positie van vijand
var buisY1 = 0;   // y-positie van vijand
var buisX2 = 1200+300;   // x-positie van vijand
var buisY2 = 0;   // y-positie van vijand
var buisX3 = 1200+600;   // x-positie van vijand
var buisY3 = 0;   // y-positie van vijand
var buisX4 = 1200+900;   // x-positie van vijand
var buisY4 = 0;   // y-positie van vijand
var buizenX = [1100,1200,1700,2200];
var buizenY = [20,210,30,90]

var score = 0; // aantal behaalde punten





/* ********************************************* */
/*      functies die je gebruikt in je game      */
/* ********************************************* */


/**
 * Tekent het speelveld
 */
var tekenVeld = function () {
  fill("darkblue");
  rect(20, 20, width - 2 * 20, height - 2 * 20);
  fill("darkgreen");
  ellipse(300,900,950);
  fill(0,200,50);
  ellipse(900,900,950);
  fill(255,255,255)
  ellipse(950,200,200);
  
};


/**
 * Tekent de vijand
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenBuizen = function() {
    // eerste buis
    fill(0,0,0);
    rect(buisX1, buisY1+400, 50, 500);
    rect(buisX1, buisY1+35, 50, 150);
    // tweede buis
    fill(0,0,0);
    rect(buisX2, buisY2+20, 50, 250);
    rect(buisX2, buisY2+515, 50, 200);
    //derde buis
    fill(0, 0, 0);
    rect(buisX3, buisY3+20, 50, 150);
    rect(buisX3, buisY3+450, 50, 300
     );
     //vierde buis
    rect(buisX4, buisY4+20, 50, 300);
    rect(buisX4, buisY4+550, 50, 200);

for(var j=0;j<buizenY.length;j=j+1){
for (var i=0; i<buizenX.length; i=i+1) {
  fill("red")
    rect(buizenX[i], buizenY[j], 50, 300);
    rect(buizenX[i], buizenY[j]+300, 50, 300);
}
}
};



/**
 * Tekent de speler
 * @param {number} x x-coördinaat
 * @param {number} y y-coördinaat
 */
var tekenSpeler = function(x, y) {
  fill("yellow");
  ellipse(spelerX, spelerY, 100, 100);
  fill("white");
  ellipse(spelerX+40, spelerY+10, 40, 40);
  rect(spelerX-75, spelerY, 50, 25);
  strokeWeight(15);
  stroke(0, 0, 0);
  line(40, 80, 50, 80);
  
};


/**
 * Updatet globale variabelen met positie van vijand of tegenspeler
 */
var beweegBuis = function() {
  if(buisX1>-1000){
    buisX1=buisX1-5
  }
    if(buisX2>-1000){
    buisX2=buisX2-5
  }
    if(buisX3>-1000){
    buisX3=buisX3-5
  }
    if(buisX4>-1000){
    buisX4=buisX4-5
  }
  
  for (var i=0; i<buizenX.length; i=i+1) {
    if(buizenX[i]>-1000){
    buizenX[i]=buizenX[i]-5
  }
  }

    
};


/**
 * Updatet globale variabelen met positie van kogel of bal
 */
var beweegKogel = function() {

};


/**
 * Kijkt wat de toetsen/muis etc zijn.
 * Updatet globale variabele spelerX en spelerY
 */
var beweegSpeler = function() {
if(mouseIsPressed&&spelerY>=0){
  spelerY=spelerY-7;
}
else{
  spelerY=spelerY+7;
}
};


/**
 * Zoekt uit of de vijand is geraakt
 * @returns {boolean} true als vijand is geraakt
 */
var checkBuisGeraakt = function() {

  return false;
};


/**
 * Zoekt uit of de speler is geraakt
 * bijvoorbeeld door botsing met vijand
 * @returns {boolean} true als speler is geraakt
 */
var checkSpelerGeraakt = function() {
    
  return false;
};


/**
 * Zoekt uit of het spel is afgelopen
 * @returns {boolean} true als het spel is afgelopen
 */
var checkGameOver = function() {
    
  return false;
};


/**
 * setup
 * de code in deze functie wordt één keer uitgevoerd door
 * de p5 library, zodra het spel geladen is in de browser
 */
function setup() {
  // Maak een canvas (rechthoek) waarin je je speelveld kunt tekenen
  createCanvas(1280, 720);

  // Kleur de achtergrond blauw, zodat je het kunt zien
  background('blue');
}


/**
 * draw
 * de code in deze functie wordt meerdere keren per seconde
 * uitgevoerd door de p5 library, nadat de setup functie klaar is
 */
function draw() {
  switch (spelStatus) {
    case SPELEN:
      beweegBuis();
      beweegSpeler();
      
      if (checkBuisGeraakt()) {
        // punten erbij
        // nieuwe vijand maken
      }
      
      if (checkSpelerGeraakt()) {
        // leven eraf of gezondheid verlagen
        // eventueel: nieuwe speler maken
      }

      tekenVeld();
      tekenBuizen();
      tekenSpeler(spelerX, spelerY);

      if (checkGameOver()) {
        spelStatus = GAMEOVER;
      }
      break;
  }
}
