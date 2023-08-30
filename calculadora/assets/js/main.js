function Calcular(){
    this.input = document.querySelector('#input');
    this.clear = document.querySelector('.btn-clear');
    this.erase = document.querySelector('.btn-del');
    this.equal = document.querySelector('.btn-eq')

    this.inicia = function(){
        this.cliqueBotoes();
        this.btnEnter();
    };

    this.cliqueBotoes = function(){
        document.addEventListener('click', e =>{
            const el = e.target;
            if(el.classList.contains('btn-num')){
                this.btnToDisplay(el.innerText);
            }
            if(el.classList.contains('btn-clear')){
                this.clearDisplay();
            }
            if(el.classList.contains('btn-del')){
                this.eraseDisplay();
            }
            if(el.classList.contains('btn-eq')){
                this.result();
            }
            this.input.focus();
        })
    };

    this.btnToDisplay = function(input){
        this.input.value += input;
    };

    this.clearDisplay = function(){
        this.input.value = '';
    };

    this.eraseDisplay = function(){
        this.input.value = this.input.value.slice(0, -1);
    };

    this.result = function(){
        let result = this.input.value;
        result = eval(result)
        try {
            if(!result) return alert('Calcúlo inválido')
            this.input.value = result
        } catch (error) {
            alert('Cálculo Inválido')
        }
    };

    this.btnEnter = function(){
        this.input.addEventListener('keypress', e => {
            if(e.keyCode === 13){
                this.result();
            }
        })
    };
}

const calcular = new Calcular();
calcular.inicia();