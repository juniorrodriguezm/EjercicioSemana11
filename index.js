const express = require('express');
const app = express();

app.listen(5100, () => console.log('Example app listening on port 5100!'));



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
<h1> ${lectura} </h1>
</div>

</body>
</html>

`)
});