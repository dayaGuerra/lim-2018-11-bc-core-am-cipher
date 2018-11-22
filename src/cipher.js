window.cipher = {

cifrado: (offset, text) => {
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90){
      arr.push(String.fromCharCode((text.charCodeAt(i)-65+offset)%26+65));
    }
    else if (text.charCodeAt(i) < 65) {
      arr.push(text[i])
    }

  }
  return arr.join('');
},

descifrado: (offset, text) => {
  let arr = [];
  for (let i = 0; i < text.length; i++) {
    if (text.charCodeAt(i) >= 65 && text.charCodeAt(i) <= 90){
      arr.push(String.fromCharCode((text.charCodeAt(i)-90-offset)%26+90));
    }
    else if (text.charCodeAt(i) < 65) {
      arr.push(text[i])
    }

  }
  return arr.join('');
}

};
