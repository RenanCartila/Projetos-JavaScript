import './assets/css/style.css'

const decimal = document.querySelector('.decimal');
const hexadecimal = document.querySelector('.hexadecimal');
const binario = document.querySelector('.binario');
const octal = document.querySelector('.octal');

document.addEventListener('click', e => {
    const el = e.target;
    if(el.classList.contains('converter')){
        const campos = verificarCampos();
        if(campos.length > 1){
            window.alert('Preencha somente um campo');
            return;
        };
        if(campos.length == 0){
            window.alert('Preencha um campo');
            return;
        };
        const valorInput = verificarInput();
        if(valorInput.length != 4){
            window.alert('O valor inserido não é compatível.')
            return;
        };
        converter();
        return;
    };
    if(el.classList.contains('limpar')){
        limpar();
        return;
    };
});

function verificarCampos(){
    const campos = [];
    if(decimal.value != ''){
        campos.push(1);
    };
    if(hexadecimal.value != ''){
        campos.push(1);
    };
    if(binario.value != ''){
        campos.push(1);
    };
    if(octal.value != ''){
        campos.push(1);
    };
    return campos;
};

function limpar(){
    decimal.value = '';
    hexadecimal.value = '';
    binario.value = '';
    octal.value = '';
};

function converter(){
    if(decimal.value != ''){
        hexadecimal.value = Number(decimal.value).toString(16);
        binario.value = Number(decimal.value).toString(2);
        octal.value = Number(decimal.value).toString(8);
        return;
    };
    if(hexadecimal.value != ''){
        decimal.value = parseInt(hexadecimal.value, 16);
        binario.value = Number(decimal.value).toString(2);
        octal.value = Number(decimal.value).toString(8);
        return;
    };
    if(binario.value != ''){
        decimal.value = parseInt(binario.value, 2);
        hexadecimal.value = Number(decimal.value).toString(16);
        octal.value = Number(decimal.value).toString(8);
        return;
    };
    if(octal.value != ''){
        decimal.value = parseInt(octal.value, 8);
        hexadecimal.value = Number(decimal.value).toString(16);
        binario.value = Number(decimal.value).toString(2);
        return;
    };
};

function verificarInput(){
    const expressaoBinario = /^[0-1]+$/;
    const expressaoDecimal = /^-?\d+(\.\d+)?$/;
    const expressaoOctal = /^[0-7]+$/;
    const expressaoHexadecimal = /^[0-9A-Fa-f]+$/;
    const valorInput = [];
    if(expressaoBinario.test(binario.value) || binario.value === ''){
        valorInput.push(1);
    };
    if(expressaoDecimal.test(decimal.value) || decimal.value === ''){
        valorInput.push(1);
    };
    if(expressaoHexadecimal.test(hexadecimal.value) || hexadecimal.value === ''){
        valorInput.push(1);
    };
    if(expressaoOctal.test(octal.value) || octal.value === ''){
        valorInput.push(1);
    };
    return valorInput;
};
