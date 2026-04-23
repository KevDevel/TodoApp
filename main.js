const LIST = document.getElementById('list');
const TITLE = document.getElementById('title');
const ADDBTN = document.getElementById('addTodo');
const INPUT = document.getElementById('input');
const SUBMIT = document.getElementById('btn');

const containers = document.querySelectorAll('.container');

const dialog = document.getElementById('myDialog');
const MARKER = document.getElementById('marker');
const ACEPTBTN = document.getElementById('acept');
const theme = document.getElementById('userAnswer');

ADDBTN.addEventListener('click', () => {
    dialog.showModal();
    containers[0].classList.remove('active');
    containers[1].classList.add('active');
});

ACEPTBTN.addEventListener('click', () => {
    const userAnswer = theme.value;
    TITLE.textContent = userAnswer || "To-Do App";
    dialog.close();
});

SUBMIT.addEventListener('click', () => {
    const word = INPUT.value;
    const marker = MARKER.value;
    if (word == '') return;
    LIST.insertAdjacentHTML('beforeend', `
    <li class="list-item">
        <label>
            <input type="checkbox">
            <span>${word}</span>
        </label>
        <span>${marker}</span>
    </li>
    `);
});




