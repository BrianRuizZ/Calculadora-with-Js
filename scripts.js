let pantalla = document.querySelector('.pantalla');

document.addEventListener('keydown', (e)=> {
    if (/\d/.test(e.key) || e.key == "x" || e.key == "-" || e.key == "+") {
        pantalla.value = pantalla.value + e.key
    }
    if (e.key == "Backspace") {
        borrar()
    }
})

function clearAll() {
    pantalla.value = '';
}

function borrar() {
    pantalla.value = pantalla.value.slice(0, -1)
}

function agregarOperador(operador) {
    let ultimoCaracter = pantalla.value.slice(-1)
    if (ultimoCaracter != operador) {
        pantalla.value = pantalla.value + operador;
    }
}

function agregarNumero(numero) {
    pantalla.value = pantalla.value + numero;
}

function equal() {
    try {
        pantalla.value = math.evaluate(pantalla.value);
    }
    catch(e) {
        console.error(e);
        alert("Error al buscar math.js, si aun deseas ver como funciona descarga el codigo que esta en https://github.com/BrianRuizZ/Calculadora-with-Js")
    }
}

