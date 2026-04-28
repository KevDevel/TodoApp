const ADD_TODO = document.querySelector('.fab-container');

const DIALOG = document.querySelector('#myDialog');
const BAR = document.querySelector('.bar');
const ANS_THEME = document.querySelector('#userAnswer');
const TAG = document.querySelector('#todo-tags');
const MARKER = document.querySelector('#marker');
const COLOR_OPTS = document.querySelectorAll('.color-opt');
const CANCEL_BTN = document.getElementById('btn-cancel');
const ACEPT_BTN = document.getElementById('btn-acept');

const LISTS_WRAPPER = document.querySelector('.lists-wrapper');

let selectedColor = '#f5f5f5';

ADD_TODO.addEventListener('click', () => {
    DIALOG.showModal();
});

COLOR_OPTS.forEach(btn => {
    btn.addEventListener('click', () => {
        COLOR_OPTS.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedColor = btn.dataset.color;
        BAR.style.backgroundColor = selectedColor;
    });
});

let dataCards = [];
let counter = 0;

ACEPT_BTN.addEventListener('click', () => {
    let id = counter++;
    const newCard = {
        defaultTitle: ANS_THEME.value || 'To-Do App',
        tag: TAG.value,
        marker: MARKER.value
    };

    LISTS_WRAPPER.insertAdjacentHTML('beforeend', `
        <article class="todo-card" data-id="${id}" style="background-color: ${selectedColor};">
            <header class="todo-card__header">
                <h2 class="todo-card__title">${newCard.defaultTitle}</h2>
                <span class="todo-card__tag">${newCard.tag}</span>
            </header>
            <section class="todo-card__preview">
                <ul class="todo-card__preview-list">
                    <!-- aquí solo las primeras 3 tareas, solo lectura -->
                </ul>
                <!-- o contenido como notas -->
            </section>
        </article>
    `);
    
    dataCards.push(newCard);
    DIALOG.close();
});

CANCEL_BTN.addEventListener ('click', () => {
    DIALOG.close();
});




