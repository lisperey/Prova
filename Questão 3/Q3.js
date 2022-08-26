var media = 40;
var nota = document.querySelector('#nota');

var resultado = document.querySelector("#resultado");

function verificarNota(){
    let notaAluno = Number(nota.value);
    let notaMaisDois = notaAluno + 2;
    let notaMaisUm = notaAluno + 1;
    
    
    let verificar;

    if(notaAluno < media){
        if(notaAluno < 38){
            verificar = resultado.innerHTML = `Sua nota foi ${notaAluno}. \nInfelizmente você foi reprovado.`
            return verificar
        }
        else if(notaAluno >= 38){
            verificar = resultado.innerHTML = `Sua nota foi arredondada para ${media}. \nAprovado!`;
            return verificar
            
    
        }
    
    }
    else{
        if(notaAluno % 5 == 0){
            verificar = resultado.innerHTML = `Sua nota foi ${notaAluno}. \nAprovado!`;
            return verificar
            
    
        }
        
        else if(notaMaisDois % 5 == 0){
            verificar = resultado.innerHTML = `Sua nota foi arredondada para ${notaAluno+2}. \nAprovado!`;
            return verificar
            
    
        }
        else if(notaMaisUm % 5 == 0){
            verificar = resultado.innerHTML = `Sua nota foi arredondada para ${notaAluno+1}. \nAprovado!`;
            return verificar
            
    
        }
        else{
            verificar = resultado.innerHTML = `Sua nota foi ${notaAluno}. \nAprovado!`;
            return verificar
    
        }
    }

}

