onload = () => {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");
  if (!!context) {
    const button = document.getElementById("animateButton");
    const favicon = document.querySelector('link[rel*="icon"]');
    /* Style of the lines of the square that'll be drawn */
    let gradient = context.createLinearGradient(0, 0, 32, 32);
    gradient.addColorStop(0, '#c7f0fe');
    gradient.addColorStop(1, '#56d3c9');
    context.strokeStyle = gradient;
    context.lineWidth = 8;
    // Enable the disabled button on page refresh (it's disabled when drawing is done)
    if (button.disabled) button.removeAttribute('disabled');
    let loadingInterval;
    /* Переменная, используемая для управления анимацией */
    let n = 0;
    button.addEventListener('click', function () {
      /* Длительность интервала анимации */
      loadingInterval = setInterval(drawLoader, 60);
      /* Стиль линий, которые будут использоваться для рисования квадратного индикатора загрузки */
      this.textContent = 'Loading...';
      this.style.backgroundColor = '#56d3c9';
      this.setAttribute('disabled', '');
    });
    function drawLoader() {
      context.clearRect(0, 0, 32, 32);
      context.beginPath();
      /* До 25% времени, выделенного на рисование*/
      if (n <= 25) {
        /*
            (0,0)-----(32,0)
        */
        context.moveTo(0, 0); context.lineTo((32 / 25) * n, 0);
      }
      /* Between 25 to 50 percent */
      else if (n > 25 && n <= 50) {
        /*
            (0,0)-----(32,0)
                      |
                      |
                      (32,32)
        */
        context.moveTo(0, 0); context.lineTo(32, 0);
        context.moveTo(32, 0); context.lineTo(32, (32 / 25) * (n - 25));
      }
      /* Between 50 to 75 percent */
      else if (n > 50 && n <= 75) {
        /*
            (0,0)-----(32,0)
                      |
                      |
            (0,32)----(32,32)
        */
        context.moveTo(0, 0); context.lineTo(32, 0);
        context.moveTo(32, 0); context.lineTo(32, 32);
        context.moveTo(32, 32); context.lineTo(-((32 / 25) * (n - 75)), 32);
      }
      /* Between 75 to 100 percent */
      else if (n > 75 && n <= 100) {
        /*
             (0,0)-----(32,0)
                |      |
                |      |
            (0,32)----(32,32)
         */
        context.moveTo(0, 0); context.lineTo(32, 0);
        context.moveTo(32, 0); context.lineTo(32, 32);
        context.moveTo(32, 32); context.lineTo(0, 32);
        context.moveTo(0, 32); context.lineTo(0, -((32 / 25) * (n - 100)));
      }
      context.stroke();

      // Преобразуем то, что нарисовано на элементе <canvas>, в формат PNG, и сделаем полученное изображение фавиконом
      favicon.href = canvas.toDataURL("image/png");
      /* После того, как рисование завершено */
      if (n >= 100) {
        clearInterval(loadingInterval);
        n = 0;
        favicon.href = "favicon.ico";
        button.textContent = 'Animate';
        button.style.backgroundColor = '';
        button.removeAttribute('disabled');
        return;
      }
      // Инкрементируем переменную, которая используется для управления анимацией
      n++;
    }
  }
};