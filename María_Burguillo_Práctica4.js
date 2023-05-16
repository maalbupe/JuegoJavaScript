//PROMISE

//PROMISE

const cartas = document.getElementsByClassName("card");
//He puesto el querySelectorAll porque de otras maneras me daba error
let coincidencias = 0;
var ncartas = 1;
var idcartas = [];

for (let i = 1; i <= 12; i++) {
  document.getElementById(i).addEventListener("click", function () {
    laquesedelavuelta(i);
  });
}


function laquesedelavuelta(id) {
  console.log(idcartas)
  if (ncartas == 2) {
    
    coincidenciasdelascartas(idcartas[0], idcartas[1]);
    arraynuevo = [];
    idcartas = arraynuevo;
    ncartas = 0;
  } else {
    if (id == 1 || id == 8) {
      document.getElementById(
        id
      ).innerHTML = `<img src="/fotos/arandanos.jpg" alt="arandano"/>`;
      idcartas.push(id);
      console.log(id)
      ncartas++;
    } else if (id == 2 || id == 7) {
      document.getElementById(id).innerHTML = `<img src="/fotos/fresa.jpg" alt="freesa"/>`;
      idcartas.push(id);
      console.log(id)
      ncartas++;
    } else if (id == 3 || id == 6) {
      document.getElementById(id).innerHTML = `<img src="/fotos/naranja.jpg" alt="naranja"/>`;
      idcartas.push(id);
      console.log(id)
      ncartas++;
    } else if (id == 4 || id == 5) {
      document.getElementById(
        id
      ).innerHTML = `<img src="/fotos/platanos.jpg" alt="platano"/>`;
      idcartas.push(id);
      console.log(id)
      ncartas++;
    }
  }
}

function coincidenciasdelascartas(id1, id2) {
 
  if (id1 == 1 && id2 == 8) {
    coincidencias++;
    if (coincidencias == 8) {
      setTimeout(() => {
        return cambiarcartas();
        //Después de un segundo , si se han emparejado todas las cartas llama a ese método para mezclarlas
      }, 1000);
    }
  } else {
    document.getElementById(
      id1
    ).innerHTML = `<img src="/fotos/frutasdos.jpg" />`;
    document.getElementById(
      id2
    ).innerHTML = `<img src="/fotos/frutasdos.jpg" />`;
  }
}



////////////////////////////////////////////////
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
