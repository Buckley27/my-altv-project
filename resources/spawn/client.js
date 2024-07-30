import * as alt from 'alt-client';

alt.onServer('setSpawn', () => {
    alt.emitServer('setSpawn');
});
