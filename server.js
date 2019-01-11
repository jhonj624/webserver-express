const express = require('express');
const app = express()

const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 8081;

/* un midleware es una instruccion / callback que se ejecuta siempre, no importa la instrucción
que la persona pida */

app.use(express.static(__dirname + '/public'))

// Express HBS Engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


// se comenta el sigte bloque para no tener algun inconveniente
app.get('/', function(req, res) {
    //res.send('Hello World')
    res.render('home', {
        nombre: 'jhon jairo',
    });
});
app.get('/about', function(req, res) {
    //res.send('Hello World')
    res.render('about');
})

// 
app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
})