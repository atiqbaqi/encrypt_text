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
var iv = crypto.randomBytes(ivlength);

function encrypt(text){
    console.log('Ciphering "%s" with key "%s" using %s', text, key, algorithm);

    var cipher = crypto.createCipheriv(algorithm, key, iv);
    var ciphered = cipher.update(text, inputEncoding, outputEncoding);
    ciphered += cipher.final(outputEncoding);
    //var ciphertext = iv.toString(outputEncoding) + ':' + ciphered

    console.log(ciphered);
    return ciphered;
}

function decrypt(text){
    //var iv_from_ciphertext = Buffer.from(components.shift(), outputEncoding);
    var decipher = crypto.createDecipheriv(algorithm, key, iv);
    var deciphered = decipher.update(text, outputEncoding, inputEncoding);
    deciphered += decipher.final(inputEncoding);

    console.log(deciphered);
}


readline.question('Input string: ', text => {
    //console.log(`Hey there ${text}!`);
    readline.close();
    let ciphered = encrypt(text);
    decrypt(ciphered);
  });
