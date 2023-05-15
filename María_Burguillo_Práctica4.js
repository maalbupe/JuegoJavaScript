//PROMISE

const cartas = document.getElementById("card");

let coincidencias = 0;
let cartauno, cartados;
let descactivar = false;

//se ejecuta cuando se hace click en una carta del juego
function flipCard({ target: clickedCard }) {
  if (cartauno !== clickedCard && !descactivar) {
    /*
      Esta condición verifica si la carta seleccionada no es igual a la cartauno
      y si las cartas no están desactivadas. (Esto garantiza que solo 
      se pueda seleccionar una nueva carta si no se ha desactivado el mazo
       y si no se está seleccionando la misma carta nuevamente)
      */
    clickedCard.classList.add("flip");
    //Agrega la clase CSS "flip" a la carta seleccionada. tiene estilos asociados para voltear visualmente la carta.

    if (!cartauno) {
      return (cartauno = clickedCard);
    }
    /*
        Verifica si cartauno es null o sin definir. Si es así, 
        asigna la clickedCard a cartauno y luego devulve la función. 
        Esto significa que la carta seleccionada se guarda como la primera carta (cartauno) 
        y se espera a que se seleccione otra carta.
        */
    cartados = clickedCard;
    descactivar = true;
    let cartaunoImg = cartauno.getElementById("vistaFrontal").src,
      cartadosImg = cartados.getElementById("vistaTrasera").src;
      coincidenciasdelascartas(cartaunoImg, cartadosImg);
    /*
    Llama a la función matchCards() pasando las rutas de las imágenes de las dos cartas seleccionadas. 
    Esta función se encarga de verificar si hay una coincidencia entre las cartas.
    */
  }
}

function coincidenciasdelascartas(img1, img2) {
  if (img1 === img2) {
    coincidencias++;
    if (coincidencias == 8) {
      setTimeout(() => {
        return shuffleCard();
        //Después de un segundo , si se han emparejado todas las cartas llama a ese método para mezclarlas
      }, 1000);
    }
    cartauno.removeEventListener("click", flipCard);
    cartados.removeEventListener("click", flipCard);
    cartauno = cartados = "";
    // esas tres lineas , quitan los eventos para que no se activen de nuevo y ponen las cadenas vacias
    return (descactivar = false);
  }
//se ponen de nuevo las cosas , para que se puedan volver a seleccionar y que tengas efectos
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

function shuffleCard() {
  coincidencias = 0;
  descactivar = false;
  carcartaunodOne = cartados = "";
  let arr = [1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5, 6, 7, 8];
  arr.sort(() => (Math.random() > 0.5 ? 1 : -1));
  /*
  mezcla aleatoriamente los elementos del array . 
  gracias a función de comparación que devuelve un número positivo o negativo de manera aleatoria. 
  por ello los elementos del array tienen en un orden aleatorio.
  */
  cartas.forEach((card, i) => {
    card.classList.remove("flip");
    let imgTag = card.getElementById("vistaTrasera");
    imgTag.src = `images/img-${arr[i]}.png`;
    card.addEventListener("click", flipCard);
  });
}

shuffleCard();

cartas.forEach((card) => {
  card.addEventListener("click", flipCard);
});

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
