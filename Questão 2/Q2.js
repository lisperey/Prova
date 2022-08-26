let aValor = document.querySelector('#a');
let bValor = document.querySelector('#b');
let cValor = document.querySelector('#c');
let resultado = document.querySelector("#resultado");

function bhaskara(a, b, c){
    
    let resultadoCalc;

    b = (-b);
    
    delta = ((b**2) - (4*a*c));
    
    
    raizDelta = Math.sqrt(delta); 
   
    if(0 > delta){

        resultadoCalc = resultado.innerHTML = "Delta é negativo.";
        return resultadoCalc;
    }
    else{
        
        let x = [((b + raizDelta)/(2*a)), ((b - raizDelta)/(2*a))];
       
        resultadoCalc = resultado.innerHTML = `Os valores de x são ${x[0]} e ${x[1]}`;
        return resultadoCalc;
        
    }

}



