// JORDAN
var nombre;
var apellido_paterno;
var apellido_materno;

nombre = $("input_nombre").val();
apellido_paterno = $("input_apellido_paterno").val();
apellido_materno = $("input_apellido_materno").val();

function validar_nombre(){
    if(nombre.lenght() >= 3 && nombre.lenght() <= 20){
        return true
    }else{
        return false
    }
}

function validar_ap_paterno(){
    if(apellido_paterno.lenght() >= 3 && apellido_paterno.lenght() <= 20){
        return true
    }else{
        return false
    }
}

function validar_ap_materno(){
    if(apellido_materno.lenght() >= 3 && apellido.lenght() <= 20){
        return true
    }else{
        return false
    }
}

function crear_carta(){
    if(validar_nombre()=true){
        if(validar_ap_paterno()=true){
            if(validar_ap_materno()=true){
                alert("Nombre: " + nombre + " " + apellido_paterno + " " + apellido_paterno)
            }else{
                alert("Apellido materno ingresado debe contener un minimo de 3 y un maximo de 20 caracteres")
            }
        }else{
            alert("Apellido paterno ingresado debe contener un minimo de 3 y un maximo de 20 caracteres")
        }
    }else{
        alert("Nombre ingresado debe contener un minimo de 3 y un maximo de 20")
    }
}


//BENJA

function rut() {
    var rut=parseInt(document.getElementById("input_rut").value)
    if (rut.lenght()<8 && rut.lenght()>11){
        return true
    }else{
        return false
    }

    
}
function edad() {
    var edad=parseInt(document.getElementById("input_edad").value)
    if (edad<=18 && edad>=35){
        return true
    }else{
        return false
    }

}

function celular() {
    var celular=parseInt(document.getElementById("input_celular").value)

    if (celular.lenght()<8 && celular.lenght()>12){
        return true
    }else{
        return false
    }   
}
