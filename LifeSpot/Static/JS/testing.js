//// Получим коллекцию всех элементов страницы
//let elements = document.getElementsByTagName('*');

//// Выведем результат в уведомление
//alert(`Количество элементов на странице:  ${elements.length}`);


/*
* Обработчик клика
*
* */
const saveInput = function () {
    // Вытащим значение текстового поля (как у нас уже делается при фильтрации)
    let currentInput = document.getElementsByTagName('input')[0].value.toLowerCase();

    // Покажем окно с прошлым и новым значением
    alert('Последний ввод: ' + this.lastInput /* равноценно window.lastInput, так как мы работаем в контексте браузера */
        + '\n' + 'Текущий ввод: ' + currentInput);

    // Сохраним новое значение в контекст
    this.lastInput = currentInput;
}