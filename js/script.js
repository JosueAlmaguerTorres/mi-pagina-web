document.getElementById("miBoton").addEventListener("click", function() {
    alert("¡Botón clickeado!");
});
function mostrarModal(id) {
    document.getElementById('modal-' + id).style.display = 'flex';
  }
  
  function cerrarModal(id) {
    document.getElementById('modal-' + id).style.display = 'none';
  }