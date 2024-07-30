import alt from 'alt-client'

// Обработчик изменения времени
alt.on('time:Change', (hours) => {
  // Установите время дня
  alt.setTimeOfDay(hours, 0, 0);

  // Установите погоду (вы можете изменить на свои предпочтения)
  // 0 - ясно, 1 - облачно, 2 - дождь, 3 - гроза, 4 - снег
  alt.setWeather(0);
});