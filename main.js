document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click", exibenome );

document.getElementById("btn-soma").addEventListener("click", somarvalores );

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
function somarvalores()
{
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let numero3 = parseFloat(numero1) + parseFloat(numero2)
    document.getElementById("resultado1").innerHTML = " = " + numero3;
}

  
    

