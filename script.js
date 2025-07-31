// Вешаем обработчик на кнопку "Хак"
const hackButton = document.getElementById('hackButton');
const hackOutput = document.getElementById('hackOutput');

hackButton.addEventListener('click', () => {
    // Массив "хакерских" фраз
    const hackPhrases = [
        "ИНИЦИИРОВАНА УТИЛИЗАЦИЯ...",
        "ДОСТУП К СЕКРЕТНЫМ ПРОТОКОЛАМ ОТКРЫТ!",
        "0xDEADBEEF: ОБНАРУЖЕНА АНОМАЛИЯ!",
        "ПЕРЕХВАТ ПАКЕТОВ... УСПЕШЕН!",
        "СИСТЕМНЫЙ АДМИНИСТРАТОР СПИТ. ДЕЙСТВУЕМ.",
        "БЭКАП УНИЧТОЖЕН. ШУТКА! (НАДЕЮСЬ...)",
        "WARNING: CRITICAL HACK IN PROGRESS!",
        "ПОЛУЧЕН ДОСТУП ROOT.",
        "ШИФРОВАНИЕ ОТМЕНЕНО. ДАННЫЕ УТЕКАЮТ.",
        "ЗДЕСЬ БЫЛ КИБЕРПЕС!"
    ];

    // Выбираем случайную фразу
    const randomPhrase = hackPhrases[Math.floor(Math.random() * hackPhrases.length)];

    // Выводим её с эффектом "печати" (опционально, можно просто вывести)
    hackOutput.textContent = randomPhrase;
    // Для эффекта печати (раскомментировать и добавить CSS для #hackOutput если надо):
    // hackOutput.textContent = "";
    // let i = 0;
    // const typing = setInterval(() => {
    //     if (i < randomPhrase.length) {
    //         hackOutput.textContent += randomPhrase.charAt(i);
    //         i++;
    //     } else {
    //         clearInterval(typing);
    //     }
    // }, 50);
});
