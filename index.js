const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
var crypto = require('crypto');

var algorithm = 'aes256';
var inputEncoding = 'utf8';
var outputEncoding = 'hex';
var ivlength = 16  // AES blocksize

var key = 'ciw7p02f70000ysjon7gztjn7c2x7GfJ'; // key must be 32 bytes for aes256


function encrypt(text){
  var iv = crypto.randomBytes(ivlength);
  console.log(`initial vector: ${iv.toString(outputEncoding)}`);
    console.log('Ciphering "%s" with key "%s" using %s', text, key, algorithm);

    var cipher = crypto.createCipheriv(algorithm, key, iv);
    var ciphered = cipher.update(text, inputEncoding, outputEncoding);
    ciphered += cipher.final(outputEncoding);
    //var ciphertext = iv.toString(outputEncoding) + ':' + ciphered

    //console.log(`Encrypted text: ${ciphered}`);
    return ciphered;
}

function decrypt(){
    //let iv = crypto.randomBytes(ivlength);
    let iv = '524cc6bfdfa3e8b525962d563a83c75a';
    var iv_for_ciphertext = Buffer.from(iv, outputEncoding);
    let text = 'd6b8550cbeaf28fcf020ddd442d7648d';
    var decipher = crypto.createDecipheriv(algorithm, key, iv_for_ciphertext);
    var deciphered = decipher.update(text, outputEncoding, inputEncoding);
    deciphered += decipher.final(inputEncoding);

    //console.log(`Decrypted text: ${deciphered}`);
    return deciphered;
}


readline.question('Input desired action (1 - encrypt, 2 - decrypt): ', action => {
  //Encrypt
    if(action == 1){
      readline.question('Input text: ',(text)=>{
        let encrypted_text = encrypt(text);
        console.table([{text,encrypted: encrypted_text}]);
        readline.close();
      })
    }
    //Decrypt
    if(action == 2){
      readline.question('Text to match(enter 123): ',(text)=>{
        let decrypted_text = decrypt();
        console.table(`Decrypted text: ${decrypted_text}`);
        if(text==decrypted_text) console.log('Decrypted text matched');
        readline.close();
      })
    }
  });
