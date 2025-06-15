document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    function limpiarTexto(texto) {
      return texto
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "") // Quita tildes
        .replace(/\s+/g, ""); // Quita espacios
    }

    const nombre = limpiarTexto(
      document.getElementById("nombreProducto").value
    );
    const categoria = limpiarTexto(document.getElementById("categoria").value);
    const precio = parseFloat(document.getElementById("precio").value);
    const dia = limpiarTexto(document.getElementById("dia").value);

    let precioFinal = precio;

    if (precio > 1000 && categoria === "electronica" && dia === "viernes") {
      precioFinal = precio * 0.85; // Aplica 15% de descuento
      alert(
        `¡Descuento aplicado! El precio final de ${nombre} es $${precioFinal.toFixed(
          2
        )}`
      );
    } else {
      alert(`El precio de ${nombre} es $${precioFinal.toFixed(2)}`);
    }
  });
});











