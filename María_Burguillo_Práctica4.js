
const cartas = document.getElementsByClassName("card");

let coincidencias =0;
var ncartas = 0;
var idcartas = [];

for (let i = 1; i <= 12; i++) {
  document.getElementById(i).addEventListener("click", function () {
    //aqui se le pasa function() anonima para que se ejjecute la funcion que quiero cad vez q haga clic 
    darlalavuelta(i);
  });
}
/*
El bucle for :
Establece un evento para saber cuando clickean para cada elemento del documento con ID del 1 al 12.
Cuando se hace clic en un elemento, se llama a la función darlalavuelta() con el ID del elemento como argumento.
 */


for (let i = 0; i < cartas.length; i++) {
  //agrega eventos del raton a cada carta
  cartas[i].addEventListener("mouseover", function(event) {
    //se le pasa function(event) para que se ejecute cada vez que e raton pase por encima
    // Resalta la carta cuando el ratón pasa sobre ella
    event.target.style.border = "2px solid #EFEF66";
    //el eventtarget es la carta en la q esta exactamente
  });

  cartas[i].addEventListener("mouseout", function(event) {
    // Lo quita
    event.target.style.border = "none";
  });
}


function darlalavuelta(id) {
  /*
  Comprueba el número de cartas volteadas (ncartas). 
  Si ya hay 2 cartas volteadas se procede a verificar si coinciden llamando, a la función coincidenciasdelascartas. 
  Luego se reinicia el array idcartas y el contador ncartas se establece en 0.
 Si no hay 2 cartas volteadas, se verifica el valor del id pasado como argumento.
  */console.log(ncartas)
  if (ncartas == 2) {
    coincidenciasdelascartas(idcartas[0], idcartas[1]);
    arraynuevo = [];
    idcartas = arraynuevo;
    //Se hace para poder vaciar el array  y recoger los nuevos ids
    ncartas = 0;
  } else {
    if (id == 1 || id == 8) {
      document.getElementById(
        id
      ).innerHTML = `<img src="/fotos/arandanos.jpg" alt="arandano"/>`;
      idcartas.push(id);
      //lo pongo en un array para luego pasarlo al metodo de abajo , es decir , que tenga los dos ids el array
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
    } else if (id == 9 || id == 10) {
      document.getElementById(
        id
      ).innerHTML = `<img src="/fotos/maguitos.jpg" alt="mango"/>`;
      idcartas.push(id);
      console.log(id)
      ncartas++;
    }else if (id == 11 || id == 12) {
      document.getElementById(
        id
      ).innerHTML = `<img src="/fotos/pomelo.jpg" alt="platano"/>`;
      idcartas.push(id);
      console.log(id)
      ncartas++;
    }
  }
}

function coincidenciasdelascartas(id1, id2) {



  
 
  if ((id1 == 1 && id2 == 8)||(id1 == 8 && id2 == 1)) {
    //Si son iguales los ids l¡significa que se ha encontrado una coincidencia entre las cartas
    coincidencias++;
  } else  if ((id1 == 2 && id2 == 7)||(id1 == 7 && id2 == 2)) {
    //Si son iguales los ids l¡significa que se ha encontrado una coincidencia entre las cartas
    coincidencias++;
  } else   if ((id1 == 3 && id2 == 6)||(id1 == 6 && id2 == 3)) {
    //Si son iguales los ids l¡significa que se ha encontrado una coincidencia entre las cartas
    coincidencias++;
  } else  if ((id1 == 4 && id2 == 5)||(id1 == 5 && id2 == 4)) {
    //Si son iguales los ids l¡significa que se ha encontrado una coincidencia entre las cartas
    coincidencias++;
  }else  if ((id1 == 9 && id2 == 10)||(id1 == 10 && id2 == 9)) {
    //Si son iguales los ids l¡significa que se ha encontrado una coincidencia entre las cartas
    coincidencias++;
  } else  if ((id1 == 11 && id2 == 12)||(id1 == 12 && id2 == 11)) {
    //Si son iguales los ids l¡significa que se ha encontrado una coincidencia entre las cartas
    coincidencias++;
  }  
  else{
    //Se dan la vuelta de nuevo
    document.getElementById(
      id1
    ).innerHTML = `<img src="/fotos/frutasdos.jpg" />`;
    document.getElementById(
      id2
    ).innerHTML = `<img src="/fotos/frutasdos.jpg" />`;
  }
}

const cronometro = document.getElementById("timer");
let cronometroDuracion = 0;

// Función para actualizar el temporizador
function updateTimer() {
  const minutos = Math.floor(cronometroDuracion / 60)
    .toString()
    .padStart(2, "0");
    //si la cadena tiene menos de dos cracteres se añade un 0 al pricipio para que todos tengan dos digitos
  const segundos = (cronometroDuracion % 60).toString().padStart(2, "0");
  cronometro.textContent = `${minutos}:${segundos}`;
  cronometroDuracion++;

  /*
  Calcula los minutos y segundos transcurridos dividiendo cronometroDuracion entre 60 y redondeando hacia abajo cn Math.floor(). 
  Convierte el resultado en una cadena de texto utilizando .toString().
  */
console.log("las coincidencias son "+coincidencias);
  if (coincidencias== numeroTotalParejas) {
    clearInterval(iniciocrono);
    alert("¡Has ganado!");
  
    calcularPuntuacion(tiempoTranscurrido)
    .then((puntuacion) => {
      
      pponerpuntuacion.innerHTML = `Tu puntuación es: ${puntuacion}`;
    })
    .catch((error) => {
      
      console.error('Error al calcular la puntuación:', error);
    });
    //aqui es donde tendria q estar
    // Detener el temporizador
    //tendria que estar iniciciocrono ya u es lo que tiene el setinterval y es lo que quiero deten
    // no tendria qu eestar intervalId sino inciocrono ya que intervalid no esta en ninguun sitio
  }
}
// llama al metodo cada 1 segundo
 iniciocrono = setInterval(updateTimer, 1000);


const numeroTotalParejas = 6;
let timerDuration = 0;
parejasEncontradas++;

// Verificar si el juego ha finalizado


function calcularPuntuacion(tiempo) {
  return new Promise((resolve, reject) => {
    // Realizar los cálculos para determinar la puntuación en base al tiempo
    const puntuacion = tiempo < 60 ? 100 : 100 - Math.floor((tiempo - 60) / 10);
    /*
    Verifico si el tiempo es menor a 60. Si es así, la puntuación es 100
    Sino se resta una cantidad proporcional al tiempo que excede los 60 segundos.
    */
    // Simula un retraso de 1 segundo antes de resolver la promesa
    setTimeout(() => {
      resolve(puntuacion);
    }, 1000);
  });
}

// Obtener el tiempo transcurrido en segundos
const tiempoTranscurrido = cronometroDuracion;
const pponerpuntuacion = document.getElementById("puntuacion");// aqui cogeriamos el div pero estoy teniendo muchos problemas para poder ponerlo ecima de todo y centrado

//he visto que no esta bn y que tendria q meterlo en un metodo y llamarlo cuando se cumpla la condicion de ganar


