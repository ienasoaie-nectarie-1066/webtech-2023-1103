import crypto from 'crypto-js'

const enc = crypto.AES.encrypt('data to encrypt', 'secret key')
console.log(enc.toString())