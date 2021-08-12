const firebase = require('firebase-admin');
const serviceAccountkey = require('./serviceAccountkey.json');

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccountkey),
    databaseURL: 'https://formapi-4a7f6.firebaseio.com',
});

module.exports = firebase;