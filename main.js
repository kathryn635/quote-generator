import './src/style.css';

const quotes = [
    { text: 'Единственный способ сделать великую работу — любить то, что ты делаешь.', author: 'Стив Джобс' },
    { text: 'Будущее принадлежит тем, кто верит в красоту своих мечтаний.', author: 'Элеонора Рузвельт' },
    { text: 'Успех — это не окончательный приговор, неудача — не смертный.', author: 'Уинстон Черчилль' },
    { text: 'Жизнь — это то, что происходит с тобой, пока ты строишь планы.', author: 'Джон Леннон' },
    { text: 'Два самых важных дня в твоей жизни — день, когда ты родился, и день, когда понял зачем.', author: 'Марк Твен' },
    { text: 'Если вы хотите быть успешным, вам нужно ударить по цели трижды чаще, чем вас бьют.', author: 'Генри Форд' },
    { text: 'Качество — это не акт, это привычка.', author: 'Аристотель' },
    { text: 'Лучший способ предсказать будущее — изобрести его.', author: 'Алан Кей' },
    { text: 'Не бойтесь совершенства, вы его никогда не достигнете.', author: 'Сальвадор Дали' },
    { text: 'Простота — это высшая степень изощренности.', author: 'Леонардо да Винчи' }
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
