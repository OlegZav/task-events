/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
    let delElement = document.createElement('button');
    delElement.textContent = 'Удали меня';
    document.body.append(delElement);
    delElement.addEventListener('click', () =>
        document.body.removeChild(delElement),
    );
}

/*
2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
   Функция выводит этот массив в виде маркированного списка внутри тега body.
   При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
    let elem = document.createElement('ul');
    document.body.append(elem);
    for (let i in arr) {
        let elem_li = document.createElement('li');
        elem_li.textContent = arr[i];
        elem_li.addEventListener('mouseover', () =>
            elem_li.setAttribute('title', arr[i]),
        );
        elem.append(elem_li);
    }
}

/*
3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

   <a href="https://tensor.ru/">tensor</a>

   При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
   При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
    let elem = document.createElement('a');
    elem.href = 'https://tensor.ru/';
    elem.textContent = 'tensor';
    elem.addEventListener(
        'click',
        () => (elem.textContent = elem.textContent + ' ' + elem.href),
    );
    document.body.append(elem);
}

/*
4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

   <ul>
      <li>Пункт</li>
   </ul>
   <button>Добавить пункт</button>

   При клике по элементу li ему в конец текста добавляется восклицательный знак.
   При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
   Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
    let elem_ul = document.createElement('ul');
    document.body.append(elem_ul);
    newElemLi(elem_ul);
    let elem_button = document.createElement('button');
    elem_button.textContent = 'Добавить пункт';
    document.body.append(elem_button);
    elem_button.addEventListener('click', () => {
        newElemLi(elem_ul);
    });
}

function newElemLi(elem_ul) {
    let elem_li = document.createElement('li');
    elem_ul.append(elem_li);
    elem_li.textContent = 'Пункт';
    elem_li.addEventListener(
        'click',
        () => (elem_li.textContent = elem_li.textContent.concat('!')),
    );
}
