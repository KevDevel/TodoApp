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
    counter++;
    const newCard = {
        id: counter,
        color: selectedColor,
        defaultTitle: ANS_THEME.value || 'To-Do App',
        tag: TAG.value,
        todoList: [],
        marker: MARKER.value
    };

    const titleColor = (selectedColor) => {
        if (selectedColor === '#f5f5f5') return '#424245';
        else if (selectedColor === '#ffd6d6') return '#5c2b2b';
        else if (selectedColor === '#d6e8ff') return '#213547';
        else if (selectedColor === '#d6ffd8') return '#1e3a1f';
        else if (selectedColor === '#fff4d6') return '#52431d';
        else if (selectedColor === '#f0d6ff') return '#3b2a4d';
        else return 'inherit';
    }

    LISTS_WRAPPER.insertAdjacentHTML('beforeend', `
        <article class="todo-card" data-id="${newCard.id}" style="background-color: ${newCard.color};">
            <header class="todo-card__header">
                <h2 class="todo-card__title" style="color: ${titleColor(newCard.color)};">${newCard.defaultTitle}</h2>
                <span class="todo-card__tag">${newCard.tag}</span>
            </header>
            <section class="todo-card__preview">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis deleniti ea explicabo consectetur modi necessitatibus quibusdam exercitationem autem praesentium illum, voluptatibus animi debitis dolorem repudiandae. Minima illo eveniet exercitationem aperiam?</p>
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




