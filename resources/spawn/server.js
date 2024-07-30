import * as alt from 'alt-server';

const playerSpawns = new Map(); // Карта для хранения точек спавна игроков

// Обработчик команды /setspawn
alt.onClient('setSpawn', (player) => {
    const { x, y, z } = player.pos;
    playerSpawns.set(player.id, { x, y, z });
    player.send(`Точка спавна установлена на (${x}, ${y}, ${z})`);
});

// Обработчик события смерти игрока
alt.on('playerDeath', (player) => {
    const spawn = playerSpawns.get(player.id);
    if (spawn) {
        player.spawn(spawn.x, spawn.y, spawn.z);
        player.send(`Вы были возрождены на точке спавна (${spawn.x}, ${spawn.y}, ${spawn.z})`);
    } else {
        player.send('Точка спавна не установлена. Используйте /setspawn для установки точки спавна.');
    }
});

// Обработчик команды /setspawn
alt.on('playerConnect', (player) => {
    player.send('Добро пожаловать! Используйте /setspawn для установки точки спавна.');
    player.on('chatMessage', (message) => {
        if (message === '/setspawn') {
            alt.emitClient(player, 'setSpawn');
        }
    });
});
