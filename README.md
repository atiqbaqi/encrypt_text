# ENCRYPT PLAIN TEXT

This is an example of symmetric ecryption using nodejs crypto module. Symmetric encryption means the plain text is encrypted using same key. A random initial vector in 
short IV also used to increase security by introducing additional cryptographic variance. The initialization vector need not be secret. An IV prevents a sequence of plaintext 
that's identical to a previous plaintext sequence from producing the same ciphertext. If an attacker can view the same encrypted data multiple times, they get clues to 
decrypt and interpret the original values.
If you want to decrypt the text you will have to store the IV along with the encrypted text.

1. Run project - npm run start
