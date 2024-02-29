function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente
  
    // Obtener los valores de los campos del formulario
    var nombre = document.querySelector('.contact_form input[name="nombre"]').value;
    var email = document.querySelector('.contact_form input[name="email"]').value;
    var proyecto = document.querySelector('.contact_form input[name="proyecto"]').value;
    var mensaje = document.querySelector('.contact_form textarea[name="mensaje"]').value;
  
    // Expresiones regulares para validar los campos
    var regexNombre = /^[a-zA-Z\s]+$/;
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    // Validar el campo de nombre
    if (!regexNombre.test(nombre)) {
      alert('Por favor, ingresa un nombre válido.');
      return;
    }
  
    // Validar el campo de email
    if (!regexEmail.test(email)) {
      alert('Por favor, ingresa un email válido.');
      return;
    }
  
    // Restablecer el formulario
    document.querySelector('.contact_form').reset();
  
    // Mostrar una alerta de envío exitoso
    mostrarAlerta('Formulario enviado correctamente.');
  }
  
  function mostrarAlerta(mensaje) {
    alert(mensaje);
  }