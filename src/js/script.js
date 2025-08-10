// Здесь будет логика получения данных с API
// Для теста я сделал фейковые данные — потом подставим реальные

function updateStats() {
    // Тут будет реальный запрос к API пула или майнера
    // fetch('URL_ТВОЕГО_API')
    //   .then(response => response.json())
    //   .then(data => { ... })

    // Фейковые данные для примера
    document.getElementById('hashrate').innerText = '68 TH/s';
    document.getElementById('temperature').innerText = '65°C';
    document.getElementById('status').innerText = 'Онлайн';
    document.getElementById('income').innerText = '0.00042 BTC';
}

// Обновляем каждые 60 секунд
updateStats();
setInterval(updateStats, 60000);
const burger = document.getElementById("burger-menu");
const navMenu = document.getElementById("nav-menu");

burger.addEventListener("click", () => {
    navMenu.classList.toggle("show");
});

// Закрытие меню при клике на ссылку
document.querySelectorAll("#nav-menu a").forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("show");
    });
});