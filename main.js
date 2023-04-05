document.addEventListener("click" , showcolor);

document.getElementById("botao").addEventListener("click", exibenome );

document.getElementById("btn-soma").addEventListener("click", somarvalores );

document.getElementById("btn-dividir").addEventListener("click", dividirvalores );

document.getElementById("btn-multiplicar").addEventListener("click", multiplicarvalores );

document.getElementById("btn-subtrair").addEventListener("click", subtrairvalores );

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
function dividirvalores()
{
    let numero4 = document.getElementById("num4").value;
    let numero5 = document.getElementById("num5").value;
    let numero6 = parseFloat(numero4) / parseFloat(numero5)
    document.getElementById("resultado2").innerHTML = " = " + numero6;
}
function multiplicarvalores()
{
    let numero7 = document.getElementById("num7").value;
    let numero8 = document.getElementById("num8").value;
    let numero9 = parseFloat(numero7) * parseFloat(numero8)
    document.getElementById("resultado3").innerHTML = " = " + numero9;
}
function subtrairvalores()
{
    let numero10 = document.getElementById("num10").value;
    let numero11 = document.getElementById("num11").value;
    let numero12 = parseFloat(numero10) - parseFloat(numero11)
    document.getElementById("resultado4").innerHTML = " = " + numero12;
}

  
    

