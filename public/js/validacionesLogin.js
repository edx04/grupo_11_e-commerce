window.addEventListener('load', function() {

    let formulario = document.querySelector("form");

    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
  
    email.addEventListener("blur", function(){
        if (email.value == ""){
            console.log("Debes de ingresar un email")
        }else if (!validarEmail(email.value)){
            console.log("Debes de ingresar un email valido")
        }  
    });

    password.addEventListener("blur", function(){
        if (password.value == ""){
            console.log("Debes de ingresar una contraseña");
        }
    });
  });

  function validarEmail(correo) {
    let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (re.exec(correo)){
        return true;
    } else {
        return false;
    }
  }