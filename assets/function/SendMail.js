//https://smtpjs.com/

$('#BtnSendMail').on('click', function (ev) {
    ev.preventDefault();
    user_name = $('#TxtMailName').val();
    email = $('#TxtMailEmail').val();
    subject = $('#TxtMailSubject').val();
    message = $('#TxtMailMessage').val();

    if (!ValidateFields()) {
        return false;
    }
    
    SendMailSMTP(user_name, email, subject, message);

});

//Valida los campos de contactenos
function ValidateFields(ev) {

    if ($('#TxtMailName').val() == "") {
        $('#myModal').modal("show");
        $('#PmodalAttention').html("Debe ingresar el campo nombre");
        //ev.stopPropagation();
        return false;
    }

    if ($('#TxtMailEmail').val() == "") {


        $('#myModal').modal("show");
        $('#PmodalAttention').html("Debe ingresar el campo Email");
        //ev.stopPropagation();


        return false;
    }
    else {
        emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        if (!emailRegex.test($('#TxtMailEmail').val())) {
            $('#myModal').modal("show");
            $('#PmodalAttention').html("Email no valido");
            return false;
        }
    }
    if ($('#TxtMailSubject').val() == "") {
        $('#myModal').modal("show");
        $('#PmodalAttention').html("Debe ingresar el campo asunto");
        //ev.stopPropagation();
        return false;
    }

    if ($('#TxtMailMessage').val() == "") {
        $('#myModal').modal("show");
        $('#PmodalAttention').html("Debe ingresar el campo mensaje");
        //ev.stopPropagation();
        return false;
    }

    return true;
}

//Envia el mail a traves de la plataforma smtpjs
function SendMailSMTP(name, email, subject, message) {
    body = "Nombre:" + name + " Email:" + email + " Mensaje " + message;
    subject = "Conctacto desde el potafolio GITHub. Asunto: " + subject;
    console.log("hola");
    Email.send("luisamayenyff@hotmail.com",
                "luisamayenyff@hotmail.com",
    subject,
    body,
    "luisamayenyff@gmail.com",
    "luisamayenyff@gmail.com",
    
    function done(message) {
                                location.href = '#contact';
                                $('#myModal').modal("show");
                                $('#PmodalAttention').html("Su Información fue enviada correctamente a Luisa Fernandez Florez, Pronto tendra respuesta");
                                ClearControls();
                                        }
    );
};

function ClearControls() {
    $('#TxtMailName').val('');
    $('#TxtMailEmail').val('');
    $('#TxtMailSubject').val('');
    $('#TxtMailMessage').val('');
}
