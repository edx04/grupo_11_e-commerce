window.addEventListener('load', function () {

    let form = document.querySelector("form");
    let button = document.querySelector("#registrar");
    let buttonlogin = document.querySelector("#login");

    let nombre = document.querySelector("#nombre");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let passwordConfirm = document.querySelector("#passwordConfirm");
    let image = document.querySelector("#image");

    let errorNombre = document.querySelector("#errorNombre");
    let errorEmail = document.querySelector("#errorEmail");
    let errorPassword = document.querySelector("#errorPasssword");
    let errorPasswordConfirm = document.querySelector("#errorPassswordConfirm");
    let errorImagen = document.querySelector("#errorImagen");


    let erroresNombre = true;

    function validacionesNombre () {
        if (nombre.value === "") {
            errorNombre.innerText = "Debes ingresar tu nombre";
            erroresNombre = true;
        } else if (!isAlpha(nombre.value)) {
            errorNombre.innerText = "Tu nombre no puede tener caracteres numericos";
            erroresNombre = true;
        } else if (!(nombre.value.length >= 3 && nombre.value.length <= 50)) {
            errorNombre.innerText = "Debes ingresar minimo 3 caracteres y maximo 50";
            erroresNombre = true;
        } else {
            errorNombre.innerText = ""
            erroresNombre = false;
        }
    }

    nombre.addEventListener("blur", validacionesNombre);

    nombre.addEventListener("keydown", function(){
        errorNombre.innerText= "";
    });

    let erroresEmail = true;

    function validacionesEmail() {
        if (email.value === "") {
            errorEmail.innerText = "Debes ingresar un email";
            erroresEmail = true;
        } else if (!validarEmail(email.value)) {
            errorEmail.innerText = "Debes de ingresar un email valido";
            erroresEmail = true;
        } else {
            errorEmail.innerText = ""
            erroresEmail = false;
        }
    }

    email.addEventListener("keydown", function(){
        errorEmail.innerText= "";
    });

    email.addEventListener("blur",validacionesEmail);
    email.addEventListener("focus",validacionesEmail);

    let erroresPassword = true;

    function valdiacionesPassword() {
        if (password.value === "") {
            errorPassword.innerText = "Debes de ingresar una contraseña";
            erroresPassword = true;
        } else if (password.value.length < 8) {
            errorPasssword.innerText = "La contraseña debe de tener minimo 8 caracteres ";
            erroresPassword = true;
        } else {
            errorPassword.innerText = "";
            erroresPassword = false;
        }
    }

    password.addEventListener("keydown", function(){
        errorPassword.innerText= "";
    });

    password.addEventListener("blur", valdiacionesPassword);
    password.addEventListener("focus", valdiacionesPassword);


    let erroresPasswordConfirm = true; 

    function validacionesPassowrdConfirm() {
        if (passwordConfirm.value === "") {
            errorPasswordConfirm.innerText = "Debes de confirmar tu contraseña";
            erroresPasswordConfirm = true;
        } else if (!(passwordConfirm.value === password.value)) {
            errorPasswordConfirm.innerText = "Las contraseñas ingresadas no coinciden";
            erroresPasswordConfirm = true;
        } else {
            errorPasswordConfirm.innerText = "";
            erroresPasswordConfirm = false;
        }
    }

    passwordConfirm.addEventListener("keydown", function(){
        errorPasswordConfirm.innerText= "";
    });

    passwordConfirm.addEventListener("blur", validacionesPassowrdConfirm);
    passwordConfirm.addEventListener("focus", validacionesPassowrdConfirm);

    let erroresImage = false;

    image.addEventListener("change", function () {
        if (!(imagenValida(image.value))) {
            errorImagen.innerText = "Debes ingresar una imagen en formato JPG, JPEG, PNG o GIF";
            errorImagen.style.color = "#ff0000";
            erroresImage = true
        }else{
            errorImagen.innerText = "Imagen cargada correctamente"
            errorImagen.style.color = "black";
            erroresImage = false;
        }
    });

    button.addEventListener("click", function(e){
        e.preventDefault();
        if(erroresNombre || erroresEmail || erroresPassword || erroresPasswordConfirm || erroresImage){
            console.log("Errores")
            if (erroresNombre){
                nombre.focus();
            }
            if(erroresEmail){
                email.focus();
            }
            if(erroresPassword){
                password.focus();
            }
            if(erroresPasswordConfirm){
                passwordConfirm.focus();
            }
        }else{
            console.log("sin errores")
            HTMLFormElement.prototype.submit.call(form)
        }
    });


});

function isAlpha(str) {
    return /^[a-zA-Z]*$/.test(str);
};

function validarEmail(correo) {
    let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return re.exec(correo);
};

function imagenValida(imagen) {
    let formatos = /(.jpg|.jpeg|.png|.gif)$/i;
    return formatos.exec(imagen);
}