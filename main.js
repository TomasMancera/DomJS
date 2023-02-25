let boton = document.querySelector(".boton");
let nameInput = document.getElementById("name_input");
let password = document.querySelector("#password");

boton.addEventListener("click",()=>{
    function login(){
        if(nameInput.value != "" && password.value != ""){
            window.location = "calc.html";
            
        }else{
            alert("Debes rellenar los campos");
            window.location = "";
        }
    }
    login();
    

});

