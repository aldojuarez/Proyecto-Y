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
var oldValue = "";

$(".boton").click(function()
{
    var valorButton = $(this).val();
    valorGlobal+=valorButton;
    actualizarDisplay(valorGlobal);
})

$("#suma").click(function()
{
    console.log(oldValue);
    elegirOperacion("+");
})

$("#resta").click(function()
{
    console.log(oldValue);
    elegirOperacion("-");
})

$("#divicion").click(function()
{
    console.log(oldValue);
    elegirOperacion("/");
})

$("#multiplicar").click(function()
{
    console.log(oldValue);
    elegirOperacion("*");
})

function elegirOperacion(value)
{
    if (oldValue == "")
    {
        operacion = value;
        num1 = valorGlobal;
        valorGlobal="";
    }
    else
    {
        operacion = value
        num1 = oldValue;
        valorGlobal="";
    }
}

$("#limpia").click(function()
{
    $("#visualizar").val("");
    valorGlobal="";
    oldValue="";
    cleanVar();
})

$("#realizar").click(function()
{
    switch (operacion)
    {
        case '+':
            num2 = valorGlobal;
            oldValue = suma(num1,num2)
            actualizarDisplay(oldValue);
            cleanVar();            
            break;
         case '-':
            num2 = valorGlobal;
            oldValue = resta(num1,num2);
            actualizarDisplay(oldValue);
            cleanVar();
            break;
        case '/':
            num2 = valorGlobal;
            oldValue = divicion(num1,num2);
            actualizarDisplay(oldValue);
            cleanVar();
            break;
        case '*':
            num2 = valorGlobal;
            oldValue = multiplicacion(num1,num2);
            actualizarDisplay(oldValue);
            cleanVar();
            break;
    }
})

function suma(valor1,valor2)
{
    return parseInt(valor1)+parseInt(valor2);
}
function resta(valor1,valor2)
{
    return parseInt(valor1)-parseInt(valor2);
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

function cleanVar()
{
    num1="";
    num2="";
    operacion="";
    valorGlobal = "";
}

    