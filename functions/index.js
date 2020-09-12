const functions = require('firebase-functions');

exports.randomNumber = functions.https.onRequest((request,response)=>{
    const number = Math.round(Math.random()*100);
    console.log(number);
    response.send(number.toString());
});

exports.toTheDojo = functions.https.onRequest((request,response)=>{

    response.redirect('https://worstcoders.in/');
});
