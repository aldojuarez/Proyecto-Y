function Sumar()
{
    var num1 = document.getElementById('numero1').value;
    var num2 = document.getElementById('numero2').value;
    var sumatoria = parseInt(num1) + parseInt(num2);
    alert(sumatoria);
}

var valorGlobal = "";
var num1;
var num2;
var operacion="";

$(".boton").click(function()
{
    var valorButton = $(this).val();
    valorGlobal+=valorButton;
    actualizarDisplay(valorGlobal);
})

$("#suma").click(function()
{
    operacion = "+";
    num1 = valorGlobal;
    valorGlobal="";
})

$("#divicion").click(function()
{
    operacion = "/";
    num1 = valorGlobal;
    valorGlobal="";
})

$("#multiplicacion").click(function()
{
    operacion = "*";
    num1 = valorGlobal;
    valorGlobal="";
})

$("#realizar").click(function()
{
    switch (operacion)
    {
        case '+':
            num2 = valorGlobal;
            valorGlobal = "";
            actualizarDisplay(suma(num1,num2));
            operacion="";
            break;
        case '/':
            num2 = valorGlobal;
            valorGlobal = "";
            actualizarDisplay(divicion(num1,num2));
            operacion="";
            break;
        case '*':
            num2 = valorGlobal;
            valorGlobal = "";
            actualizarDisplay(multiplicacion(num1,num2));
            operacion="";
            break;
    }
})

function suma(valor1,valor2)
{
    return parseInt(valor1)+parseInt(valor2);
}

function divicion(valor1,valor2)
{
    return parseInt(valor1)/parseInt(valor2);
}

function multiplicacion(valor1,valor2)
{
    return parseInt(valor1)*parseInt(valor2);
}


function actualizarDisplay(value)
{
    $("#visualizar").val(value);
}