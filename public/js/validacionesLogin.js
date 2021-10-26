window.addEventListener('load', function() {  

    let form = document.querySelector("#formulario");
    let button = document.querySelector("#submit");

    let email = document.querySelector("#email");
    let password = document.querySelector("#password");
    let errorEmail = document.querySelector("#errorEmail");
    let errorPassword = document.querySelector("#errorPassword");
    let errorPasswordejs = document.querySelector("#errorPasswordejs");

    

    let erroresEmail = true;
    email.focus();

    email.addEventListener("blur", function(){
        if (email.value === ""){
            errorEmail.innerText= "Debes de ingresar un email";
            erroresEmail = true;
        }else if (!validarEmail(email.value)){
            errorEmail.innerText= "Debes de ingresar un email valido";
            erroresEmail = true;
        }else{
            erroresEmail = false;
            errorEmail.innerText= ""
        }
    });

    let erroresPassword = true;

    function valdiacionesPassword(){
        if (password.value === ""){
            errorPassword.innerText= "Debes de ingresar tu contraseña";
            erroresPassword = true;
            errorPasswordejs.innerText = ""
        }else{
            erroresPassword = false;
            errorPassword.innerText= "";
        }
    }

    password.addEventListener("focus", valdiacionesPassword);

    password.addEventListener("blur", valdiacionesPassword);

    password.addEventListener("keydown", function(){
        errorPassword.innerText= "";
    })

    button.addEventListener("click", function(e){
        e.preventDefault();
        if (erroresEmail || erroresPassword){
            if(erroresEmail){
                email.focus();
            }else{
                password.focus();
            }
        }else{
            HTMLFormElement.prototype.submit.call(form)
        }
    })

  });

function validarEmail(correo) {
    let re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if (re.exec(correo)){
        return true;
    } else {
        return false;
    }

}