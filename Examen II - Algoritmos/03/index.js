
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
    const nombreEstudiante = limpiarTexto(
      document.getElementById("nombreEstudiante").value
    );
    const promedioPonderado = limpiarTexto(
      document.getElementById("promedioPonderado").value
    );
    const ingresoFamiliar = limpiarTexto(
      document.getElementById("ingresoFamiliar").value
    );

    if (promedioPonderado >= 18) {
      ingresoFamiliar <= 2000 ? alert("Beca Completa (100 % de la matrícula)") : alert("Beca Parcial del 50 %.");
    } else {
      promedioPonderado >= 16 && ingresoFamiliar <= 1500 ? alert("Beca Parcial del 25 %.") : alert("Beca Parcial del 25 %.");
    }
  });
});





