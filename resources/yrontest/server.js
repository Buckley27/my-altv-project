import * as alt from 'alt-server';
import * as chat from 'chat'; // Убедитесь, что этот импорт корректен и ресурс чата работает

alt.on('playerConnect', (player) => {
    alt.log(`${player.name} подключился к серверу.`);
    chat.send(player, `ЕБОЙ НАХУЙ ВЫ, ${player.name}!`);
});

alt.on('playerDisconnect', (player) => {
    alt.log(`${player.name} отключился от сервера.`);
});

alt.onClient('playerDamage', (player, damage) => {
    alt.log(`Получено событие playerDamage от ${player.name}, урон: ${damage}`);
    chat.send(player, `Вы получили ${damage} урона.`);
});