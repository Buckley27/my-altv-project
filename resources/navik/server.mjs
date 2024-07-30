import * as alt from 'alt-server';

alt.on('playerConnect', (player) => {
    // Устанавливаем навыки игрока при подключении
    alt.emitClient(player, 'setPlayerSkillsToMax');
});
