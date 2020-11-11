// En este ejercicio deberéis realizar algunos cambios sobre las dos listas incluidas en "index.html".
// En la primera lista tendréis que hacer lo siguiente:
//    * Añadid la clase "element-n" a cada "span" de la lista, siendo "n" el número del lugar que ocupa en la lista (por ejemplo el segundo "span" de la lista tendría la clase "element-2"). Para ello, haced uso de los selectores de nodo (parentNode, nextSibling, firstChild...) partiendo del "span" con la clase "selected" siempre.
//    * Tras añadir las clases, haced uso de "querySelectorAll" para obtener solo los elementos "li" con valor par (teniendo en cuenta que el primer elmento es el 1) y, a continuación, eliminadlos.

//En la segunda lista, que en principio está vacía, deberéis hacer esto:
//    * Tenéis que generar dentro de esta lista, nodo a nodo, la misma estructura que ha quedado en la primera lista en la que realizastéis los cambios. Tiene que quedar igual, con la misma jerarquía y con las mismas clases, pero con la diferencia de que en vez de elementos "span" deben ser botones. Para replicar los elementos de la primera lista no hace falta que la recorráis, podéis simplemente generar cada elemento "a mano" una detrás de otro (aunque si usáis la lista de referencia para hacer algún tipo de bucle, mejor)
//    * Después de generar esta segunda lista, añadid el atributo disabled al último botón.
// Suerte!

window.addEventListener("load", onLoad);

function onLoad() {
  // tercer span de la lista
  var puntoPartida = document.getElementsByClassName("selected")[0];

  //segundo span
  puntoPartida.parentNode.previousElementSibling.firstChild.classList.add(
    "element-2"
  );
  //cuarto span
  puntoPartida.parentNode.nextElementSibling.firstChild.classList.add(
    "element-4"
  );

  // ul padre de la lista
  var ulPadre = puntoPartida.parentNode.parentNode;

  // primer span
  ulPadre.firstElementChild.firstChild.classList.add("element-1");
  // primer span
  ulPadre.lastElementChild.firstChild.classList.add("element-5");

  //Borro los li que estan en los lugares pares
  var todosLi = document.querySelectorAll("li");

  for (i = 0; i < todosLi.length; i++) {
    if (i % 2 != 0) {
      ulPadre.removeChild(todosLi[i]);
    }
  }

  var ulPadre2 = document.getElementById("list2");
  var limite = ulPadre.children.length;

  for (i = 0; i < limite; i++) {
    let lis = document.createElement("li");
    let boton = document.createElement("button");
    boton.type = "button";
    boton.innerText = ulPadre.children[i].firstChild.firstChild.nodeValue;

    lis.appendChild(boton);
    ulPadre2.appendChild(lis);
  }

  document.getElementsByTagName("button")[0].classList.add("element-1");
  document.getElementsByTagName("button")[1].classList.add("element-3");
  document.getElementsByTagName("button")[2].classList.add("element-5");

  document.getElementsByTagName("button")[2].disabled = true;
}
