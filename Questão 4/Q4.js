var numero = document.querySelector('#numero');
var resultado = document.querySelector("#resultado");



function contador(n) {
    let contar;
    var listaNumeros = [];
    for (var i = 1; i <= n; i++) {
        listaNumeros.push(i);

    }
    for (var e = 0; e < listaNumeros.length; e++) {

        if(listaNumeros[e] % 5 == 0 && listaNumeros[e] % 9 == 0) {
            listaNumeros[e] = "LuidyMoura";
        }
        else if ( listaNumeros[e] % 5 == 0) {
            listaNumeros[e] = "Luidy";
        }
        else if (listaNumeros[e] % 9 == 0) {
            listaNumeros[e] = "Moura"
        }

        ;
    }

    contar = resultado.innerHTML = listaNumeros.join(", ");
    return contar; 
}

