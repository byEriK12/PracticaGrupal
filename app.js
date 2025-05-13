  
  // Detectar clic en "Inici"
  document.getElementById("inicio").addEventListener("click", function(event) {
    event.preventDefault(); // Evita que navegue inmediatamente
    // Aquí puedes hacer cualquier acción antes de redirigir, por ejemplo:
    // alert("Iràs a Inici");
    alert("Aniràs a la pàgina d'inici (index.html)");
    window.location.href = "index.html"; // Redirige manualmente
    
  });

  // Detectar clic en "Models"
  document.getElementById("models").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Aniràs a la pàgina de models (models.html)");
    window.location.href = "models.html";
  });

  // Detectar clic en "Recursos"
  document.getElementById("resources").addEventListener("click", function(event) {
    event.preventDefault();
    alert("Aniràs a la pàgina de recursos (recurso.html)");
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
        alert("Has amagado la tabla")
      } else {
        taula.style.display = "none";
        boto.textContent = "Mostrar taula";
        alert("Has mostrat la tabla")
      }
    });
  });