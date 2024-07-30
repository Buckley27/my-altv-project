import alt from 'alt-client';

alt.on('keydown', (key) => {
    if (key === 0x54) { // T key
        alt.emit('chatMessage', `Привет мир!`);
    }
});
