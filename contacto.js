// Obtener el formulario y los campos de entrada
const formulario = document.getElementById('formulario-contacto');
const motivoSelect = document.getElementById('motivo');
const pedidoInput=document.getElementById('pedido');
const nombreInput = document.getElementById('nombre');
const apellidosInput = document.getElementById('apellidos');
const telefonoInput = document.getElementById('telefono');
const emailInput = document.getElementById('email');
const mensajeInput = document.getElementById('mensaje');

// Función de validación de correo electrónico
function validarEmail(email) {
  const expresion = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return expresion.test(email);
}

// Función de validación de número de pedido
function validarPedido(pedido) {
  const expresion = /^[0-9\s\-]+$/;
  return expresion.test(pedido);
}

function validarTelefono(telefono) {
  //const expresion = /^\d{7}$/;
  const ertelef = /^(?:(?:\+?[0-9]{2,4})?[ ]?[6789][0-9 ]{8,13})$/;
  return ertelef.test(telefono);
}

window.onload = function(){

// Validar el formulario y enviar el correo electrónico
formulario.addEventListener('submit', (evento) => {
  evento.preventDefault(); // Prevenir el envío del formulario

  // Validar los campos de entrada
  if (nombreInput.value.trim() === '') {
    alert('Por favor, introduce tu nombre.');
    nombreInput.focus();
    return false;
  }

  if (apellidosInput.value.trim() === '') {
    alert('Por favor, introduce tus apellidos.');
    apellidosInput.focus();
    return false;
  }


  if (emailInput.value.trim() === '') {
    alert('Por favor, introduce tu correo electrónico.');
    emailInput.focus();
    return false;
  }

  if (!validarEmail(emailInput.value.trim())) {
    alert('Por favor, introduce un correo electrónico válido.');
    emailInput.focus();
    return false;
  }


  if (telefonoInput.value.trim() === '') {
    alert('Por favor, introduce tu teléfono.');
    telefonoInput.focus();
    return false;
  }

  if (!validarTelefono(telefonoInput.value.trim())) {
    alert('Por favor, introduce un teléfono válido.');
    telefonoInput.focus();
    return false;
  }

  if (mensajeInput.value.trim() === '') {
    alert('Por favor, introduce tu mensaje.');
    mensajeInput.focus();
    return false;
  }

if (motivoSelect.value=='')
{
  alert('Por favor, introduce un motivo.');
  motivoSelect.focus();
  return false;
}

if (motivoSelect.value==='tercero'&&pedidoInput.value.trim()=='')
{
  alert('Por favor, introduzca un Número de pedido.');
   pedidoInput.focus();
   return false;
}


if (!validarPedido(pedidoInput.value.trim())) {
  alert('Por favor, introduce un número de pedido válido.');
  pedidoInput.focus();
  return false;
}
    
//this.SubmitEvent();

 

});

};

