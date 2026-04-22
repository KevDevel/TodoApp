const LIST = document.getElementById('list');
const TITLE = document.getElementById('title');
const ADDBTN = document.getElementById('addTodo');
const INPUT = document.getElementById('input');
const SUBMIT = document.getElementById('btn');

const containers = document.querySelectorAll('.container');


ADDBTN.addEventListener('click', () => {
    containers[0].classList.remove('active');
    containers[1].classList.add('active');

    const theme = prompt('What is the theme?');
    TITLE.textContent = theme || "To-Do App";
});

SUBMIT.addEventListener('click', () => {
    const inputValue = INPUT.value;
    const word = inputValue;
    LIST.innerHTML += `
    <li class="list-item">
        <label>
            <input type="checkbox">
            <span>${word}</span>
        </label>
    <li>
    `;
});




