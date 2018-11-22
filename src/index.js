const caja1 = document.getElementById('caja1');
const espacios = document.getElementById('espacios');
const botonUno = document.getElementById('btn-cifrar');
const botonDos = document.getElementById('btn-descifrar');
const mostrarResultado= document.getElementById('contenido2');

botonUno.addEventListener("click",function(event){
  event.preventDefault();
const valorCajaUno = caja1.value.toUpperCase();
const valorEspacios = parseInt(espacios.value);
const resultado = cifrado(valorEspacios, valorCajaUno);
mostrarResultado.innerHTML=resultado;
});

botonDos.addEventListener("click", function(event){
  event.preventDefault();
const valorCajaUno = caja1.value.toUpperCase();
const valorEspacios = parseInt(espacios.value);
const resultado = descifrado(valorEspacios, valorCajaUno);
mostrarResultado.innerHTML=resultado;
});

/*botonUno.addEventListener("click",function(event){
  event.preventDefault();
const valorCajaUno = caja1.value.toUpperCase();
const valorEspacios = parseInt(espacios.value);
const resultado = cifrado(valorEspacios, valorCajaUno);
mostrarResultado.innerHTML=resultado;
});*/
