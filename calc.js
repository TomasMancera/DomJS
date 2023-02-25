let contenedor = document.querySelector("#container");
let loader = document.querySelector(".loader");
let input = document.getElementById('input');
let calculator = document.querySelector("#calculator");
let displayFibo = document.querySelector("#fibonacci");
let botonFibo = document.querySelector(".boton-fibo");
let displayArea = document.querySelector("#areaCuadrado");
let botonArea = document.querySelector(".boton-area");
let inputBase = document.querySelector(".input-base");
let inputAltura = document.querySelector(".input-altura");
let printArea = document.querySelector("#print-area");
let displayInterval = document.querySelector("#interval");
let inputNumUno = document.querySelector(".input-uno");
let inputNumDos = document.querySelector(".input-dos");
let botonInterval = document.querySelector(".boton-interval")
let displayConverter = document.getElementById("converter");
let inputConverter = document.querySelector(".input-converter");
let botonConverter = document.querySelector(".boton-converter");
let printConverter = document.querySelector("#print-convert");

function getUserName(){
  let nameInput = prompt("Cual es tu nombre?");
  let welcome = "Bienvenido " + nameInput;
  let input = document.getElementById("userName").innerHTML = welcome;

  return input;
}

// Se ejecuta una vez
setTimeout(()=>{
    contenedor.style.background = "white";
    loader.style.display = "none";
},2500);
setTimeout(()=>{
  getUserName();
  alert("Sesion iniciada con exito...");
},2600);
setTimeout(()=>{
    calculator.style.display = "grid";
    displayFibo.style.display = "flex";
    displayArea.style.display = "flex";
    displayInterval.style.display = "flex";
    displayConverter.style.display = "flex";
},2650);


// agregar al input los valores ingresados de la calculadora
function addToInput(value) {
  input.value += value;
}

function clearInput() {
  input.value = '';
}

function calculate() {
  input.value = eval(input.value);
}
// boton para pedir el fibonacci

botonFibo.addEventListener("click",()=>{
  let n = parseInt(prompt("Para que numero quieres conocer el fibonacci"));
  function s(n){
    if(n <= 1){
        return n;
    }
    return s(n - 2) + s(n - 1);
}

alert("El resultado de la sucesion de fibonacci para " + n + " es " + s(n));
  

});

  botonArea.addEventListener("click",()=>{
    function findArea(){
    let resultArea = inputBase.value * inputAltura.value;
    printArea.innerHTML = "El area es igual: " + resultArea;

    }
    findArea()

  })

  botonInterval.addEventListener("click",()=>{
    function findInterval(a,b) {
      var A=parseInt(a);
      var B=parseInt(b);
      if (A <= B) {
        console.log(A);
        return findInterval(A + 1, B);
        
      }
      alert("Intervalo generado en la consola");
      
      
    }
    findInterval(inputNumUno.value,inputNumDos.value);
  });
  botonConverter.addEventListener("click",()=>{
    function findCelsius(fahrenheit){
      let celsius =  (5/9) * (fahrenheit-32);
      printConverter.innerHTML = "Los grados fahrenheit a celsius son: " + celsius;
      inputConverter.value = "";

    }
    findCelsius(inputConverter.value);
    

  });


  


