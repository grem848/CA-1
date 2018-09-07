function getNumber(num)
{
    var inputVar = document.getElementById('input');
    switch (num) {
        case 1:
            inputVar.value += '1';
            break;
        case 2:
            inputVar.value += '2';
            break;
        case 3:
            inputVar.value += '3';
            break;
        case 4:
            inputVar.value += '4';
            break;
        case 5:
            inputVar.value += '5';
            break;
        case 6:
            inputVar.value += '6';
            break;
        case 7:
            inputVar.value += '7';
            break;
        case 8:
            inputVar.value += '8';
            break;
        case 9:
            inputVar.value += '9';
            break;
        case 0:
            inputVar.value += '0';
            break;
    }
}

//get the meth +-/*
function getOperand(operand)
{
    var inputVar = document.getElementById('input');
    switch (operand) {
        case '+':
            inputVar.value += '+';
            break;
        case '-':
            inputVar.value += '-';
            break;
        case 'X':
            inputVar.value += '*';
            break;
        case '/':
            inputVar.value += '/';
            break;
        case '+/-':
            inputVar.value += '-' + inputVar.value;
            break;
    }
}

//clear 
function ClearScreen()
{
    document.getElementById('input').value = "";
    document.getElementById('input').value = "";

}

//backspace funtion
function backspace()
{
    var inputVar = document.getElementById('input');
    var x = inputVar.value;
    if (x.length > 0) {
        x = x.substring(0, x.length - 1); //removes last character in input
        inputVar.value = x;
    }
}

function  compute()
{
    var inputVar = document.getElementById('input');
    answ = Math.floor(+eval(inputVar.value));
    document.getElementById('answer').value = '= ' + answ; 
}

var i = 0;
function brackets()
{
    var inputVar = document.getElementById('input');
    if(i == 0){
        inputVar.value += '(';
        i = 1;
    }else if (i == 1){
        inputVar.value += ')';
        i = 0; 
    } 
}
