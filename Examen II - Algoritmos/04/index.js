document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const tipoDePaquete = document.getElementById("tipoDePaquete").value;
    const distancia = document.getElementById("distancia").value;

    switch (tipoDePaquete) {
      case "documento":
        tarifaFija = 5;
        cargoPorkm = 1;
        break;
      case "pequeño":
        tarifaFija = 8;
        cargoPorkm = 0.5;
        break;
      case "mediano":
        tarifaFija = 12;
        cargoPorkm = 0.45;
        break;
      case "grande":
        tarifaFija = 20;
        cargoPorkm = 0.6;
        break;
      case "otro":
        tarifaFija = 25;
        cargoPorkm = 0.6;
        break;
      default:
        alert("Default");
    }

    let costo = tarifaFija + cargoPorkm * distancia;

    alert(
      `El tipo de paquete es ${tipoDePaquete} y la distancia recorridad es ${distancia} y el costo total es igual a ${costo}`
    );
  });
});
