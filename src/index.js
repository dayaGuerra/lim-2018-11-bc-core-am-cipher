const inputText = document.getElementById('inputText');
const offset = document.getElementById('offset');
const btnEncode = document.getElementById('btn-encode');
const btnDecode = document.getElementById('btn-decode');
const outputText = document.getElementById('outputText');
const btnRefresh = document.getElementById('btn-refresh');
const btnCopy = document.getElementById('btn-copy');

btnEncode.addEventListener('click',function(event){
   event.preventDefault();
    const valueInputText = inputText.value;
    const valueOffset = parseInt(offset.value);
    const result = cipher.encode(valueOffset, valueInputText);
    const reference='El codigo para Descifrar es: ' + valueOffset;
   
  outputText.innerHTML=  ` ${result}
  ${reference}`;
});

btnDecode.addEventListener('click',function(event){
 event.preventDefault();
  const valueInputText = inputText.value;
  const valueOffset = parseInt(offset.value);
  const result = cipher.decode(valueOffset, valueInputText);
outputText.innerHTML= result;
})

btnRefresh.addEventListener('click',function(event){
event.preventDefault();
  window.location.href = 'index.html'
});

btnCopy.addEventListener('click', ()=>{
  outputText.select();
  document.execCommand('copy'); 
});
