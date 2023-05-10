const array = [];
const longitudArray = 16;

while (array.length < longitudArray) {
  const randomNum = Math.floor(Math.random() * 16) + 1;
  //math.floor es para redondear porque sino te da numeros con muchos decimales

  if (!array.includes(randomNum)) {
    array.push(randomNum);

    //Se verifica si el número randomNum no está presente en el array utilizando el método includes()
    //si el numero aleatorio no está en el array la condicion se evalua cono true y lo mete dentro del array
  }
}

//Creo un objeto imagenes que asocia cada número aleatorio con una imagen.
//Utilizo un bucle for para recorrer todos los divs y asignar la imagen correspondiente al fondo del div

const imagenes = {
  1: "arandanos.jpg",
  2: "cocosmejorados.jpg",
  3: "maguitos.jpg",
  4: "manzanas.jpg",
  5: "melocoton.jpg",
  6: "peritas.jpg",
  7: "platanos.jpg",
  8: "uvas.jpg",
};
/*
para que este código funcione correctamente, tengo 16 divs dentro del contenedor 1, 
sino obtengo un error cuando intento seleccionar los divs (ya que la longitud del array es 16)
*/
const divs = document.getElementById("1").children;
/*  [.children]para obtener una lista de todos los elementos hijos dentro del contenedor con el ID "1".
 Esto permitirá acceder a los <div> individuales dentro del contenedor.*/
for (let i = 0; i < divs.length; i++) {
  const imagen = imagenes[array[i]];
  divs[i].style.backgroundImage = `url(${imagen})`;
}
