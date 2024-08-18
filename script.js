document.addEventListener('DOMContentLoaded', function () {
    // Función para obtener la fecha y hora en una zona horaria específica
    function getTimeInTimeZone(timeZone) {
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            timeZone: timeZone,
            timeZoneName: 'short'
        };
        return new Date().toLocaleString('es-ES', options);
    }

    // Mostrar la hora en Guayaquil
    const guayaquilElement = document.getElementById('guayaquil-time');
    guayaquilElement.textContent = getTimeInTimeZone('America/Guayaquil');

    // Mostrar la hora en Los Ángeles
    const laElement = document.getElementById('la-time');
    laElement.textContent = getTimeInTimeZone('America/Los_Angeles');

    // Actualizar la hora cada segundo
    setInterval(() => {
        guayaquilElement.textContent = getTimeInTimeZone('America/Guayaquil');
        laElement.textContent = getTimeInTimeZone('America/Los_Angeles');
    }, 1000);
});
