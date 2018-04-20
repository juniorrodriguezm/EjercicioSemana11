const express = require('express');
const app = express();

app.listen(5000, () => console.log('Example app listening on port 5000!'));



var fs = require('fs');
var files = fs.readdirSync('./personas/');
var usuario = 'null';
var lectura;

var personita = files.map(function (persona) {
    return '<li><a href="' + persona + '">' + persona + '</a></li>';


});
var usuario = files.map(function (persona) {
    return '/' + persona;


});

var contenido = files.map(function (persona) {
    lectura = fs.readFileSync('./personas/' + persona).toString();
   return lectura;


});



app.get('/', (req, res) => res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Lista de Todos XD</title>

<style>

h1{
font-family: 'Trebuchet MS';
font-size: 100px;
margin:0px;
}

a{
font-family: 'Trebuchet MS';
font-size: 50px;
margin:0px;
text-decoration: none;

}

a:hover{
    color:green;
    
    }

ul{
    list-style: none;
}
p{
font-family: 'Trebuchet MS';
font-size: 50px;
margin:0px;
}


div{
width:40%;
padding:50px;
background-color: beige;
border: solid red 5px;
border-radius:10px;

}
</style>

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


app.get(usuario, (req, res) => res.send(`
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Lista de Todos XD</title>

<style>

h1{
font-family: 'Trebuchet MS';
font-size: 100px;
margin:0px;
}


div{
width:40%;
padding:50px;
background-color: beige;
border: solid red 5px;
border-radius:10px;

}
</style>

</head>
<body>
<div>
<h1> ${contenido} </h1>
</div>

</body>
</html>

`));