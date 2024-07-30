import * as alt from 'alt-client';
import * as native from 'natives';

function setPlayerSkillsToMax() {
    const player = alt.Player.local;

    // Прокачиваем все навыки до 100%
    const skills = [
        'MP0_STAMINA', // Выносливость
        'MP0_STRENGTH', // Сила
        'MP0_LUNG_CAPACITY', // Объем легких
        'MP0_WHEELIE_ABILITY', // Вождение
        'MP0_FLYING_ABILITY', // Полеты
        'MP0_SHOOTING_ABILITY', // Стрельба
        'MP0_STEALTH_ABILITY' // Скрытность
    ];

    skills.forEach(skill => {
        const hash = native.getHashKey(skill);
        const success = native.statSetInt(hash, 100, true);
        if (success) {
            alt.log(`Навык ${skill} успешно установлен на 100.`);
        } else {
            alt.log(`Не удалось установить навык ${skill}.`);
        }
    });

    alt.log('Все навыки игрока прокачаны до 100%.');
}

// Событие при подключении игрока
alt.on('connectionComplete', () => {
    setPlayerSkillsToMax();
});
