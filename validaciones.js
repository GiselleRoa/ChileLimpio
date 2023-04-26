// JORDAN
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