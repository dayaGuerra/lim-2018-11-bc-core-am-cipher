const inputText = document.getElementById('inputText');
const offset = document.getElementById('offset');
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');
const outputText = document.getElementById('outputText');
const btnRefresh = document.getElementById('btn-refresh');
const reference = document.getElementById('reference');
const placeHolderOutput = document.getElementById('placeHolderOutput');
//const btnCopy = document.getElementById('copy');
/*btnCopy.addEventListener("click", function(elemento){
//  event.preventDefault();
elemento = mostrarResultado.value;
  elemento.select();
  document.execCommand("copy");
  });
*/

btnEncode.addEventListener('click',function(event){
  event.preventDefault();
const valueInputText = inputText.value;
const valueOffset = parseInt(offset.value);
const result = cipher.encode(valueOffset, valueInputText);
outputText.innerHTML= result;

reference.innerHTML='El codigo para Descifrar es: ' + valueOffset;
});

btnDecode.addEventListener('click',function(event){
  event.preventDefault();
const valueInputText = inputText.value;
const valueOffset = parseInt(offset.value);
const result = cipher.decode(valueOffset, valueInputText);
outputText.innerHTML= result;

reference.innerHTML='El codigo para Cifrado fue: ' + valueOffset;
})

btnRefresh.addEventListener('click',function(event){
  event.preventDefault();
window.location.href = 'index.html'
});


