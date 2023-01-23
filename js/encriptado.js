var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var muneco = document.querySelector(".logo-muneco");
var h3 = document.querySelector(".ningun-mensaje");
var parrafo = document.querySelector(".ingresa-texto");
var resultado = document.querySelector(".resultado-texto");
var botonCopiar = document.querySelector(".btn-copiar");

botonEncriptar.onclick = encriptar;
botonDesencriptar.onclick = desencriptar;
botonCopiar.onclick = copy;

function encriptar(){
    ocultalFuente();
    var area = recuperarTexto();
    resultado.textContent = encriptarTexto(area);   
}
function desencriptar(){
    ocultalFuente();
    var area = recuperarTexto();
    resultado.textContent = desencriptarTexto(area);
}
function recuperarTexto(){
    var area = document.querySelector(".area"); 
    return area.value;
}
 //funcion ocultar para resultado//
function ocultalFuente(){
    muneco.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
// desenciptar//
function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
   }
   return textoFinal;

}
 //encriptar//
function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }

   }
   return textoFinal;
}
 // copiar contenido resultado//
function copy(){
    const text = document.querySelector(".copy") .value;
    navigator.clipboard.writeText(text);
}
// solo letras minusculas//
function  SoloLetras(e)
{
key = e.keyCode || e.which;
tecla = String.fromCharCode(key).toString();
letras = "abcdefghijklmnopqrstuvwxyz";
//funcion de espacio //
especiales = [32];
tecla_especial = false
for(var i in especiales) {
if(key == especiales[i]){
 tecla_especial = true;
 break;
}
}
if(letras.indexOf(tecla) == -1 && !tecla_especial)
{
 alert("Ingresar solo letras munusculas sin acentos");
 return false;
}
}
