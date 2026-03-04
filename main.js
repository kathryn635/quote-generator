import './src/style.css';

const quotes = [
    { text: 'Живи так, как будто умрёшь завтра. Учись так, как будто проживёшь вечно.', author: 'Махатма Ганди' },
    { text: 'Вставая утром, спроси себя: «Что я должен сделать?» Вечером, прежде чем заснуть: «Что я сделал?»', author: 'Пифагор' },
    { text: 'Тот, кто не сталкивается с трудностями, никогда не познает силы.', author: 'Рэй Брэдбери' },
    { text: 'Секрет успеха в том, чтобы начать.', author: 'Марк Твен' },
    { text: 'Путь в тысячу ли начинается с первого шага.', author: 'Лао-цзы' },
    { text: 'Лучшее время посадить дерево было 20 лет назад. Следующее лучшее время — сегодня.', author: 'Китайская пословица' },
    { text: 'В глубине зимы я наконец узнал, что внутри меня скрыто непобедимое лето.', author: 'Альбер Камю' },
    { text: 'То, что мы думаем, определяет то, кем мы становимся.', author: 'Будда' },
    { text: 'Нет ничего невозможного. Сам слова говорят: «Я возможно»!', author: 'Уинстон Черчилль' },
    { text: 'Жизнь — как езда на велосипеде. Чтобы сохранить равновесие, ты должен двигаться.', author: 'Альберт Эйнштейн' }
];

let lastQuoteIndex = -1;

function getRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);
    lastQuoteIndex = randomIndex;
    return quotes[randomIndex];
}

function render() {
    const app = document.getElementById('app');
    const quote = getRandomQuote();
    
    app.innerHTML = `
        <div class="app">
            <div class="quote-container">
                <div class="quote-text">${quote.text}</div>
                <div class="quote-author">— ${quote.author}</div>
            </div>
            <button id="newQuoteBtn" class="btn-new-quote">Новая цитата</button>
        </div>
    `;
    
    // Обработчик кнопки
    document.getElementById('newQuoteBtn').addEventListener('click', render);
}

// Инициализация
render();
