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
function somarvalores()
{
    let numero1 = document.getElementById("num1").value;
    let numero2 = document.getElementById("num2").value;
    let numero3 = parseFloat(numero1) + parseFloat(numero2)
    document.getElementById("resultado1").innerHTML = "resultado1" + numero3;
}
function dividirvalores()
{
    let numero1 = document.getElementById("num3").value;
    let numero2 = document.getElementById("num4").value;
    document.getElementById("mensagem").innerHTML = "resultado:" + usuario;
}
function multiplicarvalores()
{
    let numero1 = document.getElementById("num5").value;
    let numero2 = document.getElementById("num6").value;
    document.getElementById("mensagem").innerHTML = "resultado:" + usuario;
}
function subtrairvalores()
{
    let numero1 = document.getElementById("num7").value;
    let numero2 = document.getElementById("num8").value;
    document.getElementById("mensagem").innerHTML = "resultado:" + usuario;
}
  
    

