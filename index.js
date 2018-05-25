const express = require('express');
const app = express();
app.use('/css',express.static( 'public/css'));

app.listen(5100, () => console.log('Example app listening on port 5100!'));




var fs = require('fs');
var files = fs.readdirSync('./personas/');
var usuario = 'null';
var lectura;
var css = "css/estilo.css";

console.log(css);

var personita = files.map(function (persona) {
    return '<li><a href="' + persona + '">' + persona + '</a></li>';


});
var usuario = files.map(function (persona) {
    return '/' + persona;


});


app.post('/', (req, res) => {

    fs.writeFile('./personas/' + req.query.nombre, req.query.desc, (err) => {
        if (err) throw err;
        console.log('Guiso Nuevo agregado');
    });

});

app.get('/', (req, res) => res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Lista de Todos XD</title>
<link rel="stylesheet" href="${css}">

</head>
<body>

<div>
<ul>

${personita}

    </ul>



</div>


</body>
</html>

`));


app.get(usuario, (req, res) => {

    var nombre = req.path.split("/");
    lectura = fs.readFileSync('./personas/' + nombre[1]).toString();


    res.send(


        `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Lista de Todos XD</title>
<link rel="stylesheet" href="${css}">

</head>
<body>
<div>
<h1> ${lectura} </h1>
</div>

</body>
</html>

`)
});