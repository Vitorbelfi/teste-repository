document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click", exibenome );

function showcolor()
{
    document.body.style.backgroundColor = "red";
}

function exibenome()
{
    let usuario = document.getElementById("nome").value;
    document.getElementById("mensagem").innerHTML = "Meu nome é:" + usuario;
    document.getElementById("nome").value="";
}
document.querySelector( 'button' )
.addEventListener( 'click', handleClick, false );

function handleClick() {
var number1 = document.querySelector( '[data-js="number1"]').value;
var number2 = document.querySelector( '[data-js="number2"]').value;

document.querySelector( '[data-js="result"]' ).innerHTML = sum( number1, number2 );
}

function sum( number1, number2 ) {
return number1 + number2;
}

