document.addEventListener("DOMContentLoaded", () => {
  const scrollToTopBtn = document.getElementById("scrollToTopBtn");
  const scrollThreshold = 300;

  // Mostrar u ocultar el botón según el scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  // Smooth scroll al hacer click
  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Lógica carrito
let contador = 0;

document.addEventListener("DOMContentLoaded", () => {
  const badge = document.getElementById("contadorCarrito");
  const botonAgregar = document.getElementById("btnAgregarCarrito");
  const mensaje = document.getElementById("mensajeCarrito");

  if (botonAgregar) {
    botonAgregar.addEventListener("click", () => {
      contador++;

      if (badge) {
        badge.textContent = contador;
      }

      if (mensaje) {
        mensaje.classList.remove("d-none");
        mensaje.className = "alert alert-success mt-3";
        mensaje.textContent =
          "Producto agregado al carrito correctamente.";
      }
    });
  }
});

// Lógica finalizar compra
document.addEventListener("DOMContentLoaded", () => {
  const botonFinalizar = document.getElementById("btnFinalizarCompra");
  const mensajeCompra = document.getElementById("mensajeCompra");

  if (botonFinalizar && mensajeCompra) {
    botonFinalizar.addEventListener("click", () => {
      mensajeCompra.classList.remove("d-none");
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const btnFinalizar = document.getElementById("btnFinalizarCompra");
  const mensajeCompra = document.getElementById("mensajeCompra");

  if (btnFinalizar && mensajeCompra) {
    btnFinalizar.addEventListener("click", () => {
      mensajeCompra.classList.remove("d-none");
    });
  }
});
