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