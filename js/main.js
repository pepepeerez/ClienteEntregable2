const cardContainer = document.querySelector('#cardContainer')

// 1) Eliminar el primer elemento hijo desde el padre.
cardContainer.removeChild(cardContainer.firstElementChild);

// 2) Eliminar, desde el propio elemento, el elemento cuya clase es "cards redClass".
const cardRedClass = cardContainer.querySelector('.cards.redClass');
if(cardRedClass){
    cardContainer.removeChild(cardRedClass);
}

// 3) Crear un elemento h1 con vuestro nombre.
const nombreH1 = document.createElement('h1');
nombreH1.textContent = "Pepe";

// 4) Crear un elemento enlace con texto "Vedruna" y cuyo href sea la pagina del vedruna.
const enlaceVedruna = document.createElement('a');
enlaceVedruna.href = "https://vedrunasevilla.org/";
enlaceVedruna.textContent = "Vedruna";

// 5) Crear un elemento boton cuyo id sea "botonJoker" y su texto sea "boton".
const botonJoker = document.createElement("button");
botonJoker.id = "botonJoker";
botonJoker.textContent = "boton";

// 6) Crear un elemento div cuya clase sea "cards greenClass".
const greenClass = document.createElement("div");
greenClass.className = "cards greenClass";

// 7) Añadir al elemento div creado anteriormente los h1, enlace y boton creados anteriormente.
greenClass.appendChild(nombreH1);
greenClass.appendChild(enlaceVedruna);
greenClass.appendChild(botonJoker);

// 8) Añadir a cardContainer el div del apartado anterior.
cardContainer.appendChild(greenClass);
