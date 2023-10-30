let numeroAzar = (Math.floor(Math.random() * 100) + 1);
// console.log(numeroAzar) //Para ir viendo el comportamiento del programa
let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let intento = document.getElementById('intento');
let intentos = 0;
var reset = document.getElementById('reset')
var intentosRestantes = 5;
intento.textContent = intentosRestantes;

function chequearResultado() {

    let numeroIngresado = parseInt(numeroEntrada.value);
    // console.log(numeroIngresado) //mostrando en consola los numeros ingresados
   

    if (isNaN(numeroIngresado) || numeroIngresado < 1 || numeroIngresado > 100 ) {
        mensaje.textContent = 'Por favor, ingresa un numero entre 1 y 100';
        mensaje.style.color = 'black';
        return;
    }
    if (numeroIngresado === numeroAzar) {
        mensaje.textContent = 'Felicitaciones!!!! Has Acertado';
        mensaje.style.color = 'green';
        numeroEntrada.disabled = true;
        comprobar.disabled = true;
        comprobar.style.background = 'gray';
        reset.style.display = "block";
        
    } else if (numeroIngresado < numeroAzar) {
        mensaje.textContent = 'El número es mayor. Intenta de nuevo.';
        mensaje.style.color = 'red';
        intentosRestantes--; // Reduce el número de intentos restantes

    } else {
        mensaje.textContent = 'El número es menor. Intenta de nuevo.';
        mensaje.style.color = 'red';
        intentosRestantes--; // Reduce el número de intentos restantes
    }
    
    intento.textContent = intentosRestantes;

    if (intentosRestantes === 0 && numeroEntrada != numeroAzar) {
        mensaje.textContent = "¡Has agotado tus 5 intentos! El número era " + numeroAzar + ".";
        comprobar.disabled = true;      // Deshabilita el botón después de agotar los intentos
        comprobar.style.background = 'gray';
        reset.style.display = "block";
    }
}

function reseteo() { //vuelve a reinicializar las variables y aspecto del juego
    intentosRestantes = 5;
    intento.textContent = intentosRestantes;
    numeroAzar = Math.floor(Math.random() * 100) + 1;
    comprobar.disabled = false; // Habilita el botón nuevamente
    mensaje.textContent = "";
    numeroEntrada.value = ""; // Limpia el campo de entrada
    numeroEntrada.disabled = false;
    reset.style.display = "none";
    comprobar.style.background = "#4CAF50"
    comprobar.disabled = false;
}

// function reseteo() {
//     location.reload(true)
// }