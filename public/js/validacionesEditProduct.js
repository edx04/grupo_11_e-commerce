window.addEventListener('load',function(){
    let formulario=document.querySelector("form");
    let nombre=document.querySelector("#nombre");
    let descripcion=document.querySelector("#descripcion");
    let precio=document.querySelector("#precio");
    let foto = document.querySelector("#foto");
    //let checkboxes = document.querySelectorAll('input[type=checkbox]');


    nombre.addEventListener("blur",function(){
        if(nombre.value==""){
            nombre.placeholder="Debes ingresar un nombre";
        }
        else if(nombre.value.length<3){
            nombre.value="";
            nombre.placeholder="Debes ingresar un nombre con más de 2 caracteres";
        }
    });

    descripcion.addEventListener("blur",function(){
        if(descripcion.value===""){
            descripcion.placeholder="Debes ingresar una descripción del producto";
        }
        else if(nombre.value.length<3){
            descripcion.placeholder="Debes ingresar una descripción del producto";
        }
    });

    precio.addEventListener("blur",function(){
        if(precio.value<=0){
            precio.value="";
            precio.placeholder="Debes ingresar un precio mayor a 0";
        }
    });

    image.addEventListener("change", function(){
        if (!(imagenValida(image.value))){
             console.log("Debes ingresar una imagen en formato JPG, JPEG, PNG o GIF");
        }
     });

    /*if(checkboxes.length == 0) {
        alert("Debes seleccionar al menos un color");
    }*/
    
});

function imagenValida(imagen){
    let formatos = /(.jpg|.jpeg|.png|.gif)$/i;
    return formatos.exec(imagen);
}