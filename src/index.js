const caja1 = document.getElementById('caja1');
const espacios = document.getElementById('espacios');
//const btnCopy = document.getElementById('copy');
const botonUno = document.getElementById('btn-cifrar');
const botonDos = document.getElementById('btn-descifrar');
const mostrarResultado= document.getElementById('contenido2');

/*btnCopy.addEventListener("click", function(elemento){
//  event.preventDefault();
elemento = mostrarResultado.value;
  elemento.select();
  document.execCommand("copy");
  });
*/

botonDos.addEventListener("click", function(event){
event.preventDefault();
const valorCajaUno = caja1.value.toUpperCase();
const valorEspacios = parseInt(espacios.value);
const resultado = cipher.descifrado(valorEspacios, valorCajaUno);
mostrarResultado.innerHTML=resultado;
});

botonUno.addEventListener("click",function(event){
  event.preventDefault();
const valorCajaUno = caja1.value.toUpperCase();
const valorEspacios = parseInt(espacios.value);
const resultado = cipher.cifrado(valorEspacios, valorCajaUno);
mostrarResultado.innerHTML=resultado;
});
