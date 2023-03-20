const express = require('express');
const app = express();
const Port = 3001;
app.get('/api',(req , res) =>{console.log ('PASO POR ACA'), res.json({mensaje:'¡HOLA MUNDO!'}).status(200)});
app.listen(Port,()=>{console.log('ESTOY ESCUCHANDO EN EL PUERTO', Port)});