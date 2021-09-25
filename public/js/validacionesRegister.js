window.addEventListener('load', function() {

    let formulario = document.querySelector("form");

    let nombre = document.querySelector("#nombre");
    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let passwordConfirm = document.querySelector("#passwordConfirm");
    let image = document.querySelector("#image");
    
    nombre.addEventListener("blur",function(){
        if (nombre.value === ""){
            console.log("Debes ingresar tu nombre");
        }else if (!isAlpha(nombre.value)){
            console.log("Tu nombre no puede tener caracteres numericos");
        }else if (!(nombre.value.length >= 3 && nombre.value.length <= 50)){
            console.log("Debes ingresar minimo 3 caracteres y maximo 50")
    }});

    email.addEventListener("blur",function(){
        if (email.value === ""){
            console.log("Debes ingresar un email");
        }else if (!validarEmail(email.value)){
            console.log("Debes de ingresar un email valido")
        }
    });

    password.addEventListener("blur",function(){
        if (password.value === ""){
            console.log("Debes de ingresar una contraseña");
        }else if(password.value.length <= 8){
            console.log("La contraseña debe de tener minimo 8 caracteres ")
        }
    });

    passwordConfirm.addEventListener("blur",function(){
        if (passwordConfirm.value === ""){
            console.log("Debes de confirmar tu contraseña");
        }else if (!(passwordConfirm.value === password.value)){
            console.log("Las contraseñas ingresadas no coinciden");
        }
    });

    image.addEventListener("change", function(){
       if (!(imagenValida(image.value))){
            console.log("Debes ingresar una imagen en formato JPG, JPEG, PNG o GIF");
       }
    });
    
});

function isAlpha(str){
    return  /^[a-zA-Z]*$/.test(str);
};

function validarEmail(correo) {
    let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    return re.exec(correo);
};

function imagenValida(imagen){
    let formatos = /(.jpg|.jpeg|.png|.gif)$/i;
    return formatos.exec(imagen);
}