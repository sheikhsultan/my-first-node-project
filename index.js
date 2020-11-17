const express = require('express');


const app = express();

// function rootCall(req, res){
//     res.send('Thank you very much')
// }
// app.get('/', rootCall);

// const rootCall = (req, res) =>  res.send('Thank you very much')

app.get('/', (req, res) => {
    res.send("I know how to open Node...YAY");
});

app.listen(4200, () => console.log('Listenting to port 4200'));