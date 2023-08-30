import './assets/css/style.css';
let res = document.querySelector('.res');
let botaoCriado = false;
const btn = document.querySelector('#btn');

document.addEventListener('click', e =>{
    const el = e.target;
    if(el.classList.contains('marcado')){
        el.classList.remove('marcado');
        return;
    };
    if(el.classList.contains('checkbox')){
        el.classList.add('marcado');
        return;
    };
    if(el.classList.contains('button')){
        geraSenha();
        return;
    };
    if(el.classList.contains('copiar')){
        copiar();
    }
});

function numeroAleatorio(number){
    const num = Math.floor(Math.random() * number);
    return num;
};

function letraAleatoria(){
    let alfabeto = 'abcdefghijklmnopqrstuvwxyz';
    const indice = numeroAleatorio(alfabeto.length);
    const letra = alfabeto.charAt(indice);
    return letra;
};

function simboloAleatorio(){
    let simbolo = ["@", "#", "$", "%", "&", "*", "!", "?", "+", "-", "=", "~", "^", "_", "<", ">", "/", "|"];
    const indice = numeroAleatorio(simbolo.length);
    return simbolo[indice];
};

function geraMarcados(){
    const marcados = document.querySelectorAll('.marcado');
    if(marcados.length === 0) return window.alert('É necessário marcar algum item');
    return marcados;
};

function geraQuantidade(){
    const quantidade = document.querySelector('#quantidade');
    if(quantidade.value < 6 || quantidade.value > 40 ) return window.alert('Coloque uma quantidade entre 6 e 40');
    return quantidade;
};
function criaBtn(texto){
    if(!botaoCriado){
        let botao = document.createElement('button');
        botao.innerHTML = texto;
        botao.classList.add('copiar')
        botaoCriado = true;
        return botao;
    }
    return false;
};

function geraSenha(){
    const marcados = geraMarcados();
    const quantidade = geraQuantidade();
    let arraySenha = [];

    for(let i = 0 ; i < quantidade.value ; i++){
        const numAleatorio = numeroAleatorio(marcados.length);
        const caracter = marcados[numAleatorio];
        if(caracter.classList.contains('numero')){
            arraySenha.push(numeroAleatorio(10));
        };
        if(caracter.classList.contains('letrasMa')){
            arraySenha.push(letraAleatoria().toUpperCase());
        };
        if(caracter.classList.contains('letrasMi')){
            arraySenha.push(letraAleatoria());
        };
        if(caracter.classList.contains('simbolos')){
            arraySenha.push(simboloAleatorio());
        };
    };
        const botao = criaBtn('Copiar senha');
        if(!botao) {
            return res.innerHTML = arraySenha.join(''); 
        }
        btn.appendChild(botao);
        return res.innerHTML = arraySenha.join(''); 
};

function copiar(){
    let textoTemp = document.createElement('textarea');
    textoTemp.value = res.innerText;
    document.body.appendChild(textoTemp);
    textoTemp.select();
    document.execCommand('copy');
    document.body.removeChild(textoTemp);
    return;    
};