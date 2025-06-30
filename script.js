// Получаем доступ к изображению с указанным классом
const charles = document.querySelector('.swinging-and-falling');

// Ждем завершение первой фазы раскачивания (например, 2 секунды)
setTimeout(() => {
    // Применяем класс падения
    charles.classList.add('fall-down');
}, 2000);
