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
