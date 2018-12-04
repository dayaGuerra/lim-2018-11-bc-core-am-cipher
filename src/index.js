const inputText = document.getElementById('input_text');
const offset = document.getElementById('offset');
const btnEncode = document.getElementById('btn_encode');
const btnDecode = document.getElementById('btn_decode');
const outputText = document.getElementById('output_text');
const btnCleanForm = document.getElementById('btn_clean_form');
const btnCopy = document.getElementById('btn-copy');
const formCipher = document.getElementById('form_cipher');

btnEncode.addEventListener('click',function(event){
event.preventDefault();
const valueInputText = inputText.value;
const valueOffset = parseInt(offset.value);
const result = cipher.encode(valueOffset, valueInputText);
outputText.innerHTML=  result;
});

btnDecode.addEventListener('click',function(event){
event.preventDefault();
const valueInputText = inputText.value;
const valueOffset = parseInt(offset.value);
const result = cipher.decode(valueOffset, valueInputText);
outputText.innerHTML= result;
})

btnCleanForm.addEventListener('click', ()=>{
  formCipher.reset();
  outputText.innerHTML = "";
 
});

btnCopy.addEventListener('click', ()=>{
outputText.select();
document.execCommand('copy');

});
