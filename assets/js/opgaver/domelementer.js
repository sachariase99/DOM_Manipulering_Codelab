/* DOMcelementer */
"use strict"


/* Opgave 1.1
Du skal finde elementet med id="redFigure" og console logge det.
Du skal finde elementet med id="yellowFigure" og console logge det. 
*/

// din kode her
console.log(redFigure, yellowFigure);

redFigure.style.backgroundColor = "blue";
yellowFigure.style.backgroundColor = "blue";
/* opgave 1.2
Du skal ændre baggrundsfarve på de to elementer du har fundet i opgave 1.1
farven på elementerne skal være blå. brug evt. element.style.backgroundColor
*/

// din kode her
redFigure.style.backgroundColor = "blue";
yellowFigure.style.backgroundColor = "blue";

/* opgave 2.1
Du skal oprette følgende HTML elementer i Elementet med id opgaveTwo.
- et h2 med teksten: Opgave 2.1 løsning
- et p med teksten: Jeg har løst opgave 2.1
*/

// din kode her
const opgaveTwo = document.getElementById('opgaveTwo');

const opgaveTwoH2 = document.createElement('h2')
opgaveTwoH2.textContent = 'Opgave 2.1 løsning'

const opgaveP = document.createElement('p')
opgaveP.textContent = 'Jeg har løst opgave 2.1'

opgaveTwo.appendChild(opgaveTwoH2)
opgaveTwo.appendChild(opgaveP)

// opgave 3 liveHTML lists
/* opgave 3.1
Du skal finde alle elementer med klassen purpleFigures og console logge resultatet
*/

// din kode her
const purpleFigures = document.getElementsByClassName('purpleFigures')

console.log(purpleFigures);

/* opgave 3.2
Du skal finde alle elementer med klassen purpleFigures og bruge array.from() til at konvertere listen
til et array hvor du kan bruge map funktionen til at ændre baggrundsfarven til rød.
array.from beskrivelse HER: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/from
*/

// din kode her
const purpleFiguresArray = Array.from(purpleFigures);

purpleFiguresArray.map(element => {
    element.style.backgroundColor = 'red';
});

/* opgave 3.3
Brug din array til at ændre h3 elementets, inden i purpleFigures, tekst til RED. du kan bruge
myElement.children[0].innerHTML til at ændre 1. child elements inner html.
*/

// din kode her
purpleFiguresArray.map(element => {
    const h3Element = element.querySelector('h3');
    if (h3Element) {
        h3Element.textContent = 'RED';
    }
});


/* opgave 4
opret DOM elementer i elementet med id opgaveFour, udfra data objectet myData.
Du skal vælge element tags der giver mening i forbindelse med HTML5 semantisk tagging.
Fyld dine elementers innerHtML eller andre atributter med dine data
*/

const myData = {
    name: 'tiger',
    image: 'assets/img/standard_tiger.jpg',
    description: 'En tiger er et stort, katteagtig rovdyr med orange og sort striber i pelsen og skarpe tænder og kløer.'
};

// din kode her

// Find elementet med id "opgaveFour"
const opgaveFourContainer = document.getElementById('opgaveFour');

// Opret en artikel (semantisk HTML5-tag)
const articleElement = document.createElement('article');

// Opret en overskrift (semantisk HTML5-tag)
const headingElement = document.createElement('h1');
headingElement.textContent = myData.name;

// Opret et billede (semantisk HTML5-tag)
const imageElement = document.createElement('img');
imageElement.src = myData.image;
imageElement.alt = myData.name;

// Opret en beskrivelse (semantisk HTML5-tag)
const paragraphElement = document.createElement('p');
paragraphElement.textContent = myData.description;

// Tilføj de oprettede elementer til "opgaveFour" containeren
articleElement.appendChild(headingElement);
articleElement.appendChild(imageElement);
articleElement.appendChild(paragraphElement);
opgaveFourContainer.appendChild(articleElement);
