

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

    const nombreMascota = limpiarTexto(
      document.getElementById("nombreMascota").value
    );
    const tipoMascota = limpiarTexto(
      document.getElementById("tipoMascota").value
    );
    const planSalud = limpiarTexto(
      document.getElementById("planDeSalud").value
    );

    let costoTotal;

    // Costo base <- 50
    if (planSalud === "si") {
      costoTotal = 50 * 0.6 + 5;
      alert(
        `El nombre de la mascota es ${nombreMascota}, su tipo es ${tipoMascota} y el monto es ${costoTotal.toFixed(2)}`
      );
    } else {
      alert(
        `El nombre de la mascota es ${nombreMascota}, su tipo es ${tipoMascota} y el monto es 62`
      );
    }
  });
});
