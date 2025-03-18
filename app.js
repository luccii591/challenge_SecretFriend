// Creamos un arreglo para guardar los amigos
let listaDeAmigos = [];

function agregarAmigo() {
  const input = document.getElementById('amigo');
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, ingresa un nombre válido.");
    return;
  }

  // Agregamos el nombre al arreglo
  listaDeAmigos.push(nombre);

  // Limpiamos el campo
  input.value = "";

  // Volvemos a mostrar la lista actualizada
  mostrarLista();
}


function mostrarLista() {
  const ul = document.getElementById('listaAmigos');
  ul.innerHTML = ""; // Limpia la lista actual

  listaDeAmigos.forEach(function (amigo) {
    const li = document.createElement('li');
    li.textContent = amigo;
    ul.appendChild(li);
  });
}