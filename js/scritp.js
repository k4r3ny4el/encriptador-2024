const textArea = document.querySelector('.area__texto');
const mensaje = document.querySelector('.mensaje');
const muneco = document.querySelector('.muneco')
const tituloMensaje = document.getElementById("titulo__Mensaje");
const parrafo = document.getElementById("parrafo");


/* crear una matriz donde se encontrar todas las llaves, arreglo de arreglo:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/ 

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage= "none";
    muneco = muneco.remove(); 
   
}

function encriptar(stringEncriptada) {
    let codigoMatriz = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a", "ai"], ["u", "utaf"]];
    stringEncriptada = stringEncriptada.toLowerCase(); 
    parrafo.textContent = " ";
    tituloMensaje.textContent = "Texto encriptado con exito";
    
    
    for(let i = 0; i < codigoMatriz.length; i++){

        if(stringEncriptada.includes(codigoMatriz[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(codigoMatriz[i][0], codigoMatriz[i][1]);
        }
        
    }
    return stringEncriptada;
}


function btnDesencriptar() {
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";

}


function desencriptar(stringDesencriptada) {
    let codigoMatriz = [["e", "enter"], ["o", "ober"], ["i", "imes"], ["a", "ai"], ["u", "utaf"]];
    stringDesencriptada = stringDesencriptada.toLowerCase(); 
    
    for(let i = 0; i < codigoMatriz.length; i++){

        if(stringDesencriptada.includes(codigoMatriz[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(codigoMatriz[i][1], codigoMatriz[i][0]);

        }
    }
    return stringDesencriptada;
}

function copiar(){
    var contenido = document.querySelector('.mensaje');
    contenido.select();
    document.execCommand("copy");
    contenido.value = "";
    tituloMensaje.textContent = " ";
    
}