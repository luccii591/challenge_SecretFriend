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


function sortearAmigo() {
  if (listaDeAmigos.length === 0) {
    alert("No hay amigos en la lista para sortear.");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
  const amigoSorteado = listaDeAmigos[indiceAleatorio];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `<li> El amigo secreto es: <strong>${amigoSorteado}</strong></li>`;
}
