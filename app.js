  // Detectar clic en "Inici"
  document.getElementById("inicio").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que navegue inmediatamente
    console.log("Has hecho clic en Inici");
    // Aquí puedes hacer cualquier acción antes de redirigir, por ejemplo:
    // alert("Iràs a Inici");
    window.location.href = "index.html"; // Redirige manualmente
  });

  // Detectar clic en "Models"
  document.getElementById("models").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Has hecho clic en Models");
    window.location.href = "models.html";
  });

  // Detectar clic en "Recursos"
  document.getElementById("resources").addEventListener("click", function(event) {
    event.preventDefault();
    console.log("Has hecho clic en Recursos");
    window.location.href = "recurso.html";
  });

  document.addEventListener("DOMContentLoaded", () => {
    const taula = document.getElementById("taulaComparativa");
    const boto = document.getElementById("toggleTaula");

    // Ocultar la tabla al inicio
    taula.style.display = "none";

    // Añadir listener al botón
    boto.addEventListener("click", () => {
      if (taula.style.display === "none") {
        taula.style.display = "table";
        boto.textContent = "Amagar taula";
      } else {
        taula.style.display = "none";
        boto.textContent = "Mostrar taula";
      }
    });
  });