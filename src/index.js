const inputText = document.getElementById('inputText');
const offset = document.getElementById('offset');
//const btnCopy = document.getElementById('copy');
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');
const outputText= document.getElementById('outputText');
const reference= document.getElementById('reference');
/*btnCopy.addEventListener("click", function(elemento){
//  event.preventDefault();
elemento = mostrarResultado.value;
  elemento.select();
  document.execCommand("copy");
  });
*/


btnEncode.addEventListener("click",function(event){
  event.preventDefault();
const valueInputText = inputText.value;
const valueOffset = parseInt(offset.value);
const result = cipher.encode(valueOffset, valueInputText);
outputText.innerHTML= result;
reference.innerHTML="<br> El codigo para descifrar es: " + valueOffset;
});


btnDecode.addEventListener("click",function(event){
  event.preventDefault();
const valueInputText = inputText.value;
const valueOffset = parseInt(offset.value);
const result = cipher.decode(valueOffset, valueInputText);
outputText.innerHTML= result;
reference.innerHTML="<br> El codigo cifrado fue: " + valueOffset;
});
