const alt = require('alt-server');
const fs = require('fs');
const toml = require('toml');

const config = toml.parse(fs.readFileSync('./server.toml', 'utf-8'));

// Настройка сервера
alt.log(`Запуск сервера: ${config.server.name}`);
alt.log(`Порт: ${config.server.port}`);
alt.log(`Максимальное количество игроков: ${config.server.players}`);

// Обработчик подключения игрока
alt.on('playerConnect', (player) => {
    alt.log(`Игрок ${player.name} подключился к серверу`);
});

// Другие обработчики и логика сервера