const boton = document.querySelector("#btn");
const input = document.querySelector("#tarea");
const lista = document.querySelector("#lista");

boton.addEventListener("click", function() {

    const texto = input.value;

    const li = document.createElement("li");

    const textoNodo = document.createTextNode(texto);

    li.appendChild(textoNodo);

    lista.appendChild(li);

});