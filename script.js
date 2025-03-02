document.addEventListener("DOMContentLoaded", () => {
    // Navbar Toggle
    const menuToggle = document.querySelector(".menu-toggle")
    const nav = document.querySelector(".nav-links")
    const navLinks = document.querySelectorAll(".nav-links li")
  
    menuToggle.addEventListener("click", () => {
      // Toggle Nav
      nav.classList.toggle("active")
  
      // Animate Links
      navLinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ""
        } else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
        }
      })
  
      // Menu Toggle Animation
      menuToggle.classList.toggle("toggle")
    })
  
    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault()
  
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        })
      })
    })
  
    // Form Submission
    const form = document.getElementById("contactForm")
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault()
        // Aquí puedes agregar la lógica para enviar el formulario
        alert("Mensaje enviado correctamente")
        form.reset()
      })
    }
  
    // Animación al hacer scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll")
  
      elements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top
        const elementBottom = element.getBoundingClientRect().bottom
  
        if (elementTop < window.innerHeight && elementBottom > 0) {
          element.classList.add("animate")
        }
      })
    }
  
    window.addEventListener("scroll", animateOnScroll)
    animateOnScroll() // Llamar la función una vez para animar los elementos visibles al cargar la página
  })
  
  // Animación para el menú hamburguesa
  function toggleMenu() {
    const menuToggle = document.querySelector(".menu-toggle")
    const nav = document.querySelector(".nav-links")
    menuToggle.classList.toggle("toggle")
    nav.classList.toggle("active")
  }
  
  // Enviar formulario a WhatsApp
  document.getElementById("contactForm").addEventListener("submit", (event) => {
    event.preventDefault() // Prevenir el envío normal del formulario
  
    // Obtener los valores de los campos del formulario
    const nombre = document.getElementById("nombre").value
    const email = document.getElementById("email").value
    const telefono = document.getElementById("telefono").value
    const mensaje = document.getElementById("mensaje").value
  
    // Crear el mensaje que se enviará a través de WhatsApp
    const mensajeWhatsapp = `*Nombre:* ${nombre}%0A*Email:* ${email}%0A*Teléfono:* ${telefono}%0A*Mensaje:* ${mensaje}`
  
    // Número de teléfono de destino en WhatsApp
    const numeroWhatsapp = "994802470"
  
    // Crear la URL para redirigir al usuario a WhatsApp con los parámetros
    const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${mensajeWhatsapp}`
  
    // Abrir una nueva ventana o pestaña
    const nuevaVentana = window.open("", "_blank") // Abrimos una nueva pestaña en blanco
  
    // Agregar contenido a la nueva ventana (puedes personalizar lo que desees mostrar)
    nuevaVentana.document.write("<h2>Gracias por contactarnos</h2>")
    nuevaVentana.document.write("<p>Estamos redirigiéndote a WhatsApp con toda la información que enviaste.</p>")
  
    // Redirigir a WhatsApp después de 3 segundos (puedes ajustar el tiempo)
    setTimeout(() => {
      nuevaVentana.location.href = urlWhatsapp
    }, 3000) // Redirige después de 3 segundos
  })
  
  // Manejo dinámico de la clase 'active' en los enlaces del menú
  const navLinks = document.querySelectorAll(".nav-links a")
  
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      navLinks.forEach((link) => link.classList.remove("active")) // Elimina la clase 'active' de todos los enlaces
      this.classList.add("active") // Añade la clase 'active' al enlace clickeado
  
      // Cierra el menú hamburguesa al hacer clic en un enlace (en dispositivos móviles)
      const nav = document.querySelector(".nav-links")
      const menuToggle = document.querySelector(".menu-toggle")
      nav.classList.remove("active")
      menuToggle.classList.remove("toggle")
    })
  })
  

  // Seleccionar elementos
const menuToggle = document.querySelector('.menu-toggle');


// Escuchar el clic en el botón hamburguesa
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Muestra/oculta las opciones del menú
    menuToggle.classList.toggle('open'); // Cambia la animación del icono hamburguesa
});

  