

// - Crea un botón con la etiqueta <button> en tu página HTML y añade un evento de click que muestre en la consola el texto que tenga botón al hacer click.
 

//  llamamos e identificamos el botón en javascript
 const buttonElement = document.getElementById('button');

// creamos la función externamente
const printClick = ()=> {
    console.log('Has hecho click');

}
// crear el evento, por eso printClick no tiene parentesis.
buttonElement.addEventListener('click', printClick)


// EJERCICIO 2 // - Crea un h1 con el texto "Soy un título ", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"


// identificamos el h1
const titleElement = document.getElementById('title')


// creamos la funcion cuando el ratón pase por encima el texto cambie
const changeH1 = () => {
    titleElement.textContent = "20& U3 717U10";
}

// Crear la función para volver a aparecer el texto del html.
const returnH1 = () =>{
    titleElement.textContent = "Soy un titulo";
}

// creamos los eventos de raton al h1
titleElement.addEventListener('mouseenter', changeH1 );
titleElement.addEventListener('mouseleave', returnH1 );



// EJERCICIO 3 // Crea un p con el texto "esperando entrada de teclado..." al pulsar cualquier tecla deberá poner "has pulsado la tecla tal" y al soltarla el <p> volverá a tener el texto "esperando entrada de teclado...". Como reto extra puedes intentar añadir si se ha usado una combinación de teclas con alt, shift o control

const textElement = document.getElementById('text');


const pulseKey = (event) =>{
    textElement.textContent = `Has pulsado la tecla "${event.key}"`

}

const pulseKeyEnd = () =>{
    textElement.textContent = "Esperando entrada de teclado....";
}

document.addEventListener('keydown', pulseKey);
document.addEventListener('keyup', pulseKeyEnd);

// - Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.

// creo el array
const array = ["Andamio","jardinero","soliloquio","tambor","Azerbayan"];
let cont = 0;

const changeName = document.getElementById('tittle2');
const previous = document.getElementById('previous');
const next = document.getElementById('next');

const nextWord = (array) => {
    changeName.textContent = `${array[cont]}`;
    cont++;
    if(cont===array.length){
        cont=0;
    }
}

const previousWord = () => {
    cont--;
    if (cont <0){
        cont = array.length -1;
    }

    changeName.textContent = array[cont];

}

next.addEventListener('click', ()=>nextWord(array));
previous.addEventListener('click', ()=>previousWord(array));