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

const que = document.getElementById('select');
const como = document.getElementById('open_why');
const infEncrypted = document.getElementById('inf_encrypted');
const point = document.getElementById('point');
const btnClose1 = document.getElementById('btn_close1');
const btnClose2 = document.getElementById('btn_close2');
que.addEventListener('click', ()=>{
  infEncrypted.style.display = 'block';
   point.style.display = 'none';
   
 })

como.addEventListener('click', ()=>{
  point.style.display = 'block';
  infEncrypted.style.display = 'none';
 })

btnClose1.addEventListener('click', ()=>{
infEncrypted.style.display = 'none';

})

btnClose2.addEventListener('click', ()=>{
point.style.display = 'none';

})