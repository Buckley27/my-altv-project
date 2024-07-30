import * as alt from 'alt-client';

alt.on('playerDamage', (attacker, weaponHash, boneIndex, damage) => {
    alt.log(`Отправка события на сервер: playerDamage, урон: ${damage}`);
    alt.emitServer('playerDamage', damage);
});