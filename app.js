let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados=[];
let numeroMaximo=10;

console.log(numeroSecreto)

function asignarTextoElemento(elemento, texto){
    let elementoHTLML = document.querySelector(elemento);
    elementoHTLML.innerHTML = texto;
    return;
}


function verificarIntento(){
    let numeroDeUsurario= parseInt(document.getElementById('valorUsuario').value);
    console.log(intentos)

if (numeroDeUsurario==numeroSecreto){
    asignarTextoElemento('p', `Acertaste el número en ${intentos} ${(intentos ===1) ? 'vez': 'veces' } `);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else{
    //El usuario no acerto 
    if (numeroDeUsurario> numeroSecreto){
        asignarTextoElemento('p', 'El número secreto es menor');
    } else{
        asignarTextoElemento('p', 'El número secreto es mayor');
    }
    intentos++
    limpiarCaja() 
}
return;
}


function limpiarCaja(){
    let valorCaja=document.querySelector('#valorUsuario');
    valorCaja.value='';
}


function generarNumeroSecreto() {
    let numeroGenerado=Math.floor(Math.random()*numeroMaximo+1);

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //si ya sorteamos todos los números 
    if (listaNumerosSorteados.length ==numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        //si número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroSecreto();
        } else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }


}


function conficionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo} `);
    numeroSecreto= generarNumeroSecreto();
    intentos=1;
}


function reiniciarJuego(){
    //limpiar caja 
    limpiarCaja();

    //indicar mensaje de intervalo de números
    //generar número aleatorio
    //inicializar número de intentos
    conficionesIniciales();

    //deshabilitar boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');

}


conficionesIniciales();