const alt = require('alt-server');

// Обработчик события для команды /time
alt.on('chat:message', (player, raw, message) => {
  if (message === '/time') {
    // Получите часы из аргументов сообщения
    const hours = parseInt(raw[1]);

    // Проверьте, является ли введенное значение числом и находится ли в диапазоне от 0 до 23
    if (!isNaN(hours) && hours >= 0 && hours <= 23) {
      // Отправьте событие изменения времени клиенту
      alt.emitClient(player, 'time:Change', hours);
    } else {
      // Отправьте сообщение об ошибке игроку
      alt.emit('chat:Message', player, `{FF0000}Введите число от 0 до 23.`);
    }
  }
});