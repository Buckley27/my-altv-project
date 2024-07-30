import alt from 'alt-client';

let webView = null;

alt.on('keydown', (key) => {
    if (key === 192) { // '`' key (backtick)
        if (!webView) {
            webView = new alt.WebView('http://resource/client/playerList.html');
        }
        alt.emitServer('requestPlayerList');
        webView.focus();
        webView.emit('show');
    }
});

alt.onServer('receivePlayerList', (playerList) => {
    if (webView) {
        webView.emit('receivePlayerList', playerList);
    }
});

alt.on('keyup', (key) => {
    if (key === 192 && webView) { // '`' key (backtick)
        webView.unfocus();
        webView.emit('hide');
    }
});
