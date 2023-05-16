//PROMISE

const cartas = document.querySelectorAll(".card");

/*
He puesto el querySelectorAll porque de otras maneras me daba error 
*/

let coincidencias = 0;
let cartauno, cartados;
let descactivar = false;

//se ejecuta cuando se hace click en una carta del juego
function voltearLaCarta({ currentTarget: cartaclicada }) {
  /*El evento target representa el elemento real en el que se hizo clic,
   mientras que el evento currentTarget representa el elemento en el que se adjuntó el controlador del evento 
  */
  if (cartauno !== cartaclicada && !descactivar) {
    /*
      Esta condición verifica si la carta seleccionada no es igual a la cartauno
      y si las cartas no están desactivadas. (Esto garantiza que solo 
      se pueda seleccionar una nueva carta si no se ha desactivado el mazo
       y si no se está seleccionando la misma carta nuevamente)
      */
       cartaclicada.classList.add("flip");
    //Agrega la clase CSS "flip" a la carta seleccionada. tiene estilos asociados para voltear visualmente la carta.
//al ejecutar cartaclicada.classList.add("flip") se aplica una transformación visual a cartaclicada para mostrar su cara frontal. Esto se realiza añadiendo la clase CSS "flip" al elemento.
    if (!cartauno) {
      return (cartauno = cartaclicada);
    }
    /*
        Verifica si cartauno es null o sin definir. Si es así, 
        asigna la cartaclicada a cartauno y luego devulve la función. 
        Esto significa que la carta seleccionada se guarda como la primera carta (cartauno) 
        y se espera a que se seleccione otra carta.
        */
    cartados = cartaclicada;
    descactivar = true;

    let cartaunoImg = null;
    let cartadosImg = null;

    if (cartauno.querySelector(".vistaFrontal")) {
      cartaunoImg = cartauno.querySelector(".vistaFrontal").src;
    }

    if (cartados.querySelector(".vistaTrasera")) {
      cartadosImg = cartados.querySelector(".vistaTrasera").src;
    }

    //esto creo que lo hice proque sino me daba error diciendome que estba en null entonces me aseguro de que no esten en null

    coincidenciasdelascartas(cartaunoImg, cartadosImg);
    /*
    Llama a la función coincidenciasdelascartas() pasando las rutas de las imágenes de las dos cartas seleccionadas. 
    Esta función se encarga de verificar si hay una coincidencia entre las cartas.
    */
  }
}

function coincidenciasdelascartas(img1, img2) {
  if (img1 === img2) {
    coincidencias++;
    if (coincidencias == 8) {
      setTimeout(() => {
        return cambiarcartas();
        //Después de un segundo , si se han emparejado todas las cartas llama a ese método para mezclarlas
      }, 1000);
    }
    cartauno.removeEventListener("click", voltearLaCarta);
    cartados.removeEventListener("click", voltearLaCarta);
    cartauno = cartados = "";
    // esas tres lineas , quitan los eventos para que no se activen de nuevo y ponen las cadenas vacias
    return (descactivar = false);
  }
  //se ponen de nuevo las cosas , para que se puedan volver a seleccionar y que tengan efectos
  setTimeout(() => {
    cartauno.classList.add("shake");
    cartados.classList.add("shake");
  }, 400);
  setTimeout(() => {
    cartauno.classList.remove("shake", "flip");
    cartados.classList.remove("shake", "flip");
    cartauno = cartados = "";
    descactivar = false;
  }, 1200);
}

cambiarcartas();
function cambiarcartas() {
  coincidencias = 0;
  descactivar = false;
  cartauno = cartados = "";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  /*
  mezcla aleatoriamente los elementos del array . 
  gracias a función de comparación que devuelve un número positivo o negativo de manera aleatoria. 
  por ello los elementos del array tienen en un orden aleatorio.
  */
  cartas.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.querySelector(".vistaTrasera");
    imgTag.src = `images/img-${arr[i]}.png`;
    card.addEventListener("click", voltearLaCarta);
  });
  //este código se encarga de poner las cartas igual que antes, asignar imágenes a las cartas y agregar un controlador de eventos para voltear las cartas al hacer clic en ellas.
}

//intento del cronometro
const cronometro = document.getElementById("timer");
let cronometroDuracion = 0;

// Función para actualizar el temporizador
function updateTimer() {
  const minutos = Math.floor(cronometroDuracion / 60)
    .toString()
    .padStart(2, "0");
  const segundos = (cronometroDuracion % 60).toString().padStart(2, "0");
  cronometro.textContent = `${minutos}:${segundos}`;
  cronometroDuracion++;
}

// Inicia el temporizador con un intervalo de 1 segundo
const iniciocrono = setInterval(updateTimer, 1000);

// fin intento del cronometro

let parejasEncontradas = 0;
const numeroTotalParejas = 8;
let timerDuration = 0;

//  encontrar parejas de cartas

// Cuando el jugador encuentra una pareja de cartas
parejasEncontradas++;

// Verificar si el juego ha finalizado
if (parejasEncontradas === numeroTotalParejas) {
  // El jugador ha encontrado todas las parejas
  // mostrar un mensaje de victoria o algo así
  clearInterval(intervalId); // Detener el temporizador
}
