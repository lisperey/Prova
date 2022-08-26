

let inputLadoA = document.querySelector('#ladoA');
let inputLadoB = document.querySelector('#ladoB');
let inputLadoC = document.querySelector('#ladoC');
let resultado = document.querySelector("#resultado");


function verificarTriangulo() {

    let ladoA = inputLadoA.value;
    let ladoB = inputLadoB.value;
    let ladoC = inputLadoC.value;
    let resultadoTriagulo;

    if (ladoA == ladoB && ladoA == ladoC) {
        resultadoTriagulo =  resultado.innerHTML = "O triângulo é: Equilátero.";
        return  resultadoTriagulo
    }
    else if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        resultadoTriagulo = resultado.innerHTML = "O triângulo é: Isósceles.";
        return resultadoTriagulo;

    }
    else {
        resultadoTriagulo =  resultado.innerHTML = "O triângulo é: Escaleno.";
        return  resultadoTriagulo;


    }

}

