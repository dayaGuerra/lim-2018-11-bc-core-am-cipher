window.cipher = {

cifrado: (offset, string) => {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
      arr.push(String.fromCharCode((string.charCodeAt(i)-65+offset)%26+65));
    }
    if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122){
      arr.push(String.fromCharCode((string.charCodeAt(i)-97+offset)%26+97));
    }

    else if (string.charCodeAt(i) < 65) {
      arr.push(string[i])
    }

  }
  return arr.join('');
},

descifrado: (offset, string) => {
  let arr = [];
  for (let i = 0; i < string.length; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90){
      arr.push(String.fromCharCode((string.charCodeAt(i)-90-offset)%26+90));
    }
    else if (string.charCodeAt(i) < 65) {
      arr.push(string[i])
    }

  }
  return arr.join('');
}

};
