function validacionUsuario(){
    var username = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    if ( username == "ejemplo@gmail.com" && password == "123456"){
        console.log ("Iniciando sesión…");
        //window.location = "success.html"; 
        return false;
    }else{
        console.log("Email y/o contraseña incorrectos");
        alert("Email y/o contraseña incorrectos");
    }
}