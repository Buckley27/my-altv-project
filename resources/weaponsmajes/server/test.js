import * as alt from 'alt-server';
import * as chat from 'chat'; // Импортируем модуль чата

const weapons = [
    { hash: 0xDBBD7280, name: 'weapon_combatmg_mk2', damage: 17 },
    { hash: 0x61012683, name: 'weapon_gusenberg', damage: 11 },
    { hash: 0xCB96392F, name: 'weapon_revolver_mk2', damage: 57 },
    { hash: 0x394F415C, name: 'weapon_assaultrifle_mk2', damage: 14 },
    { hash: 0xBFEFFF6D, name: 'weapon_assaultrifle', damage: 13 },
    { hash: 0x83BF0278, name: 'weapon_carbinerifle', damage: 12 },
    { hash: 0xFAD1F1C9, name: 'weapon_carbinerifle_mk2', damage: 14 },
    { hash: 0xC78D71B4, name: 'weapon_heavyrifle', damage: 17 },
    { hash: 0x3AABBBAA, name: 'weapon_heavyshotgun', damage: 40 },
    { hash: 0xDB1AA450, name: 'weapon_machinepistol', damage: 12 },
    { hash: 0xC472FE2, name: 'weapon_heavysniper', damage: 100 },
    { hash: 0xA914799, name: 'weapon_heavysniper_mk2', damage: 150 },
    { hash: 0x6A6C02E0, name: 'weapon_marksmanrifle_mk2', damage: 35 }
];

alt.on('playerConnect', (player) => {
    player.spawn(0, 0, 72, 0);
    player.model = 'mp_m_freemode_01';
    player.giveWeapons = false;
});

alt.onClient('majesticRP', (player) => {
    toggleWeapons(player);
});

alt.on('playerDeath', (player) => {
    if (player.giveWeapons) {
        giveWeapons(player);
    }
});

chat.registerCmd('majestic', (player) => {
    toggleWeapons(player);
});

function toggleWeapons(player) {
    if (player.giveWeapons) {
        removeWeapons(player);
        player.giveWeapons = false;
        chat.send(player, 'Оружие снято.');
    } else {
        giveWeapons(player);
        player.giveWeapons = true;
        chat.send(player, 'Оружие выдано.');
    }
}

function giveWeapons(player) {
    weapons.forEach(weapon => {
        player.giveWeapon(weapon.hash, 9999, true);
        setWeaponDamage(player, weapon.hash, weapon.damage);
    });
}

function removeWeapons(player) {
    weapons.forEach(weapon => {
        player.removeWeapon(weapon.hash);
    });
}

function setWeaponDamage(player, weaponHash, damage) {
    // Здесь можно добавить код для установки урона по умолчанию.
    // В зависимости от вашего игрового сервера, вам может понадобиться использовать
    // специфичные API или методы для изменения урона оружия.
    // Например, вы можете использовать специальные методы или плагины для alt:V.
}

chat.registerCmd('setdamage', (player, fullText, weaponName, damage) => {
    const weapon = weapons.find(w => w.name === weaponName.toLowerCase());
    if (weapon) {
        weapon.damage = parseInt(damage);
        chat.send(player, `Урон для ${weapon.name} установлен на ${weapon.damage}.`);
    } else {
        chat.send(player, 'Оружие не найдено.');
    }
});

alt.on('playerDamage', (victim, attacker, damage, weaponHash) => {
    if (attacker && victim && weaponHash) {
        const weapon = weapons.find(w => w.hash === weaponHash);
        if (weapon) {
            const distance = alt.Vector3.distance(attacker.pos, victim.pos);
            const reducedDamage = distance > 20 ? weapon.damage * 0.2 : weapon.damage; // Уменьшаем урон на 20%, если расстояние больше 10 метров
            victim.health -= reducedDamage;
            chat.send(attacker, `Вы нанесли ${reducedDamage} урона с расстояния ${distance.toFixed(2)} метров.`);
        }
    }
});