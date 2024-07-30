import server from "alt-server";

server.on("playerConnect", (player) => {
    server.emitClient(
        player,
        "EasyNoClip:Notify",
        "~b~EasyNoClip Buckley ~g~100%~b~, press F3 нонклип гов."
    );
});

server.onClient("EasyNoClip:toggle", (player, isActive) => {
    player.visible = !isActive;
});
