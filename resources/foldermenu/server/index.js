import alt from 'alt-server';

alt.on('playerConnect', (player) => {
    alt.log(`${player.name} has connected.`);
});

alt.onClient('requestPlayerList', (player) => {
    const playerList = alt.Player.all.map(p => ({ id: p.id, name: p.name }));
    alt.emitClient(player, 'receivePlayerList', playerList);
});
