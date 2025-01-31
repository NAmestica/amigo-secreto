// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let listaAmigos = [];
const Maximo = 5;
let intentos = 0;
function mostrarLista(){
    if(intentos>=1){
        document.getElementById("listaAmigos").innerHTML = "";
    }
    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.textContent = listaAmigos[i];
        document.getElementById("listaAmigos").appendChild(li);
    }
    intentos ++;

}


function asignarElemento(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    
    if(elemento == "#listaAmigos"){

        mostrarLista();

    }else{
        elementoHtml.innerHTML = texto;
        console.log(texto);

    }
    return;
}
function sortearAmigo(){
    if (listaAmigos.length == 0){
        asignarElemento("#resultado",`El amigo secreto sortedo es: ${listaAmigos} agregar nombres por favor`);
    }else{
    let numeroGenerado = Math.floor(Math.random() * (listaAmigos.length));
    console.log(numeroGenerado);
    asignarElemento("#resultado",`El amigo secreto sortedo es: ${listaAmigos[numeroGenerado]}`);
    asignarElemento("#listaAmigos","");
    }

}

function agregarAmigo(){
    let amigo = document.getElementById("amigo").value;
    console.log(amigo);
    if (amigo.indexOf(" ") > -1 || amigo == ''){
        alert("Por favor, ingrese un nombre válido");
        asignarElemento("#resultado","");

    }
    else if(listaAmigos.length == Maximo){
        asignarElemento("#resultado","No puedes agregar más amigos");
        asignarElemento("#resultado","");
        sortearAmigo();
    }else{
        if(listaAmigos.includes(amigo)){
            asignarElemento("#resultado","Este amigo ya está en la lista, vuelve a intentarlo");
        }else{
            listaAmigos.push(amigo);
            console.log(listaAmigos);
            asignarElemento("#listaAmigos",listaAmigos);
            asignarElemento("#resultado","");


        }
    }
    limpiarCaja();


    
}
function limpiarCaja(){
    let valorCaja = document.querySelector('#amigo');
    valorCaja.value = '';
}



//condicionesIniciales();