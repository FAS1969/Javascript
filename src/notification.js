'use strict'
{
  console.clear();
  let str = document.location.toString();
  let root = str.substring(0, str.lastIndexOf("/"));
  let spawnNotification = function (body, icon, title) {
    var options = {
      action: "archive",
      body: body,
      icon: icon
    };
    var n = new Notification(title, options);
    n.onclick = function (event) {
      console.log(event);
      //event.target.close();
    };
  };
  //отправка 
  let notifyMe = function () {
    // Проверка поддержки браузером уведомлений
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }

    // Проверка разрешения на отправку уведомлений
    else if (Notification.permission === "granted") {
      // Если разрешено, то создаем уведомление
      spawnNotification("Привет из программы!!!", root + "/images/octa-logo.png", "FAS says");
    }

    // В противном случае, запрашиваем разрешение
    else if (Notification.permission !== 'denied') {
      Notification.requestPermission(function (permission) {
        // Если пользователь разрешил, то создаем уведомление 
        if (permission === "granted") {
          console.log(permission);
          spawnNotification("Привет из программы!!!", root + "/images/octa-logo.png", "FAS says");
        }
      });
    }
  };
  notifyMe();
  /*Notification.requestPermission().then(function (result) {
      console.log(result);
  });*/
  /*self.addEventListener('notificationclick', function(event) {
      event.notification.close();
      if (event.action === 'archive') {
        // Archive action was clicked
        alert("Archive");
      } else {
        // Main body of notification was clicked
        alert("Not archive");
      }
    }, false);*/

}