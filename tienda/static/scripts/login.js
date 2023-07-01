
$(document).ready(function() {
    $('form').submit(function(e) {
      e.preventDefault();
      var username = $('input[type="text"]').val();
      var password = $('input[type="password"]').val();
      if(username == '') {
        alert('Por favor ingrese su usuario');
        return false;
      }
      if(password == '') {
        alert('Por favor ingrese su contraseña');
        return false;
      }
      // Si llega a este punto, todo está validado
      alert('La información ha sido validada y se ha enviado');
    });
  });