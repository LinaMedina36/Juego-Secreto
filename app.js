let numeroSecreto = 0;
let intentos = 1;
let listaNumerosSorteados=[];
let numeroMax = 10;
function asignarTextoElemento(elemento,texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}
function verificarIntento(){
    let numeroDeUsuario= parseInt(document.getElementById("valorUsuario").value);
    
   
    if (numeroSecreto===numeroDeUsuario){
        asignarTextoElemento("p",`Acertaste el número en ${intentos} ${intentos==1? "intento" : "intentos"}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
        
    }else {
        //el usuario no acerto el numero
        limpiarCaja();
        if(numeroSecreto<numeroDeUsuario){
            asignarTextoElemento("p","El número secreto es menor");
        }else{
            asignarTextoElemento("p","El número secreto es mayor");
        }
        intentos++;
    }
  
    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMax)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya se sortearon todos los numeros
    if(listaNumerosSorteados.length==numeroMax){
        asignarTextoElemento("p", "Ya se sortearon todos los numeros posibles")
    }else{
        if (listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}


function limpiarCaja(){
    document.querySelector("#valorUsuario").value=" ";
    
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja()
    //empezar de nuevo el juego, reiniciando nuevamente todas las condiciones
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector("#reiniciar").setAttribute("disabled","true");
   
}
function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del número secreto");
    asignarTextoElemento("p",`Ingrese un número del 1 al ${numeroMax}`);
    numeroSecreto = generarNumeroSecreto();
    console.log(numeroSecreto);
    intentos=1;
}
condicionesIniciales();