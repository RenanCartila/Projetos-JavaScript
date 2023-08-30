let result = document.querySelector('#result');
let input = document.querySelector('#input');

function add(){
    if(!input.value) return;
    createTask(input.value);
};

function createTask(input){
    const li = createLi();
    li.innerHTML = input;
    createBtn(li);
    result.appendChild(li);
    eraseDisplay();
    saveTask();
};

function createLi(){
    const li = document.createElement('li');
    return li;
};

function createBtn(li){
    li.innerText += ' ';
    const btn = document.createElement('button');
    btn.setAttribute('class', 'erase');
    btn.setAttribute('title', 'Apagar Tarefa');
    btn.innerText = 'Apagar';
    li.appendChild(btn);
};

function eraseDisplay(){
    input.value = '';
    input.focus();
};

document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('erase')){
        el.parentElement.remove();
    };
});

document.addEventListener('keypress', function(e) {
    if(e.keypress === 13){
        if(!input.value) return;
        createTask(input.value);        
    }
});

function saveTask(){
    const allLi = document.querySelectorAll('li');
    const liArray = [];

    for(let task of allLi){
        let taskText = task.innerText;
        taskText = taskText.replace('Apagar', '');
        liArray.push(taskText);
    }
    const taskJson = JSON.stringify(liArray);
    localStorage.setItem('tarefas', taskJson);
}

function addSaveTask(){
    const task = localStorage.getItem('tarefas');
    const taskArray = JSON.parse(task);

    for(let t of taskArray){
        createTask(t);
    }
}

addSaveTask();