const alt = require('alt-server');

alt.on('playerConnect', (player) => {
    alt.log(`Игрок ${player.name} подключился к серверу`);
});

alt.on('playerDisconnect', (player, reason) => {
    alt.log(`Игрок ${player.name} отключился от сервера. Причина: ${reason}`);
});

alt.on('chatMessage', (player, message) => {
    if (message === '/hello') {
        player.send(`Привет, ${player.name}!`);
    }
});
