class validarFormulario{
    constructor(){
        console.log("inialize formulario");
    }
    validar(){
        var name =  document.getElementById("txtNombre").value;
        var lastName = document.getElementById("txtPaterno").value;
        var secondLastName = document.getElementById("txtMaterno").value;
        var edad = document.getElementById("txtEdad").value;
        if (name == "" || lastName == "" || secondLastName == "" || edad == "")
        {
            alert("No deje campos vacíos");
            return false;
        }
        else
        {
            alert("Correcto");
            return true;
        }
        
    }
    
}
function validar(Name, LastName, SecondLastName, Edad){
    var name =  Name;
    var lastName = LastName;
    var secondLastName = SecondLastName;
    var edad = Edad;
    if (name == "" || lastName == "" || secondLastName == "" || edad == "")
    {
        //alert("No deje campos vacíos");
        return false;
    }
    else
    {
        //alert("Correcto");
        return true;
    }
    
}