$(document).ready(function () {
    $('form').submit(function (e) {
        e.preventDefault();
        var email = $('input[type="email"]').val();
        var password1 = $('#pass1 input[type="password"]').val();
        var password2 = $('#pass2 input[type="password"]').val();
        // Expresiones regulares para validar los inputs
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        // Validar el input de email
        if (email == '') {
            $('#email-error').html('Por favor ingrese su correo electrónico');
            return false;
        }
        if (!emailRegex.test(email)) {
            $('#email-error').html('Por favor ingrese un correo electrónico válido');
            return false;
        }
        $('#email-error').html('');
        // Validar el input de contraseña
        if (password1 == '') {
            $('#password1-error').html('Por favor ingrese su contraseña');
            return false;
        }
        if (!passwordRegex.test(password1)) {
            $('#password1-error').html('La contraseña debe contener al menos 8 caracteres, incluyendo una letra minúscula, una letra mayúscula, un número y un carácter especial');
            return false;
        }
        $('#password1-error').html('');
        // Validar el input de confirmación de contraseña
        if (password2 == '') {
            $('#password2-error').html('Por favor confirme su contraseña');
            return false;
        }
        if (password1 != password2) {
            $('#password2-error').html('Las contraseñas no coinciden');
            return false;
        }
        $('#password2-error').html('');
        // Si llega a este punto, todo está validado
        $('#form-message').html('La información ha sido validada y se ha enviado');
        // Aquí se puede enviar el formulario utilizando AJAX
    });
});