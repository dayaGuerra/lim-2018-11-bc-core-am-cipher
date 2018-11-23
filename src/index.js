const caja1 = document.getElementById('caja1');
const espacios = document.getElementById('espacios');
//const btnCopy = document.getElementById('copy');
const botonUno = document.getElementById('btn-cifrar');
const botonDos = document.getElementById('btn-descifrar');
const mostrarResultado= document.getElementById('contenido2');
const codigo= document.getElementById('contenido3');
/*btnCopy.addEventListener("click", function(elemento){
//  event.preventDefault();
elemento = mostrarResultado.value;
  elemento.select();
  document.execCommand("copy");
  });
*/


botonUno.addEventListener("click",function(event){
  event.preventDefault();
const valorCajaUno = caja1.value.toUpperCase();
const valorEspacios = parseInt(espacios.value);
const resultado = cipher.cifrado(valorEspacios, valorCajaUno);
mostrarResultado.innerHTML= resultado;
codigo.innerHTML="<br> El codigo para descifrar es: " + valorEspacios;
});

botonDos.addEventListener("click", function(event){
event.preventDefault();
const valorCajaUno = caja1.value.toUpperCase();
const valorEspacios = parseInt(espacios.value);
const resultado = cipher.descifrado(valorEspacios, valorCajaUno);
mostrarResultado.innerHTML=resultado;
});
