document.addEventListener("DOMContentLoaded", function(event) {
  showTime();
  getBatteryLevel();
  getBrowser();
  getHistoryLength();
  getLanguage();
  getCpu();
});

function showTime () {
  var message;
  var time = new Date().getHours();
  if (time > 0) message = 'It\'s so damn late!';
  if (time > 5) message = 'It\'s so damn early!';
  if (time > 8) message = 'Good morning!';
  if (time > 12) message = 'Good afternoon!';
  if (time > 16) message = 'Good evening!';
  document.getElementById('time').innerHTML = message;
}

function getBatteryLevel () {
  navigator.getBattery().then(function(battery) {
    var level = battery.level * 100;
    var minutes = battery.dischargingTime / 60;
    document.querySelector('#chargingTime').textContent = minutes.toFixed(0);
    document.querySelector('#level').textContent = level.toFixed(0);
  });
}

function getBrowser () {
  var sBrowser, sUsrAg = navigator.userAgent;
  if(sUsrAg.indexOf("Chrome") > -1) {
      sBrowser = "Chrome";
  } else if (sUsrAg.indexOf("Safari") > -1) {
      sBrowser = "Safari";
  } else if (sUsrAg.indexOf("Opera") > -1) {
      sBrowser = "Opera";
  } else if (sUsrAg.indexOf("Firefox") > -1) {
      sBrowser = "Mozilla Firefox";
  } else if (sUsrAg.indexOf("MSIE") > -1) {
      sBrowser = "Internet Explorer";
  }
  document.querySelector('#showBrowser').textContent = sBrowser;
}

function getLanguage () {
  document.querySelector('#language').textContent = navigator.language;
}

function getHistoryLength () {
  document.querySelector('#historyLength').textContent = window.history.length;
}

function getCpu () {
  document.querySelector('#cpu').textContent = window.navigator.oscpu || window.navigator.platform;
}

// Get Location Button
function getLocation () {

  document.querySelector('#showLocation').textContent = 'loading...';

  var options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };

  function success(pos) {
    var crd = pos.coords;

    document.querySelector('#showLocation').textContent =
      `Latitude: ${crd.latitude.toFixed(2)}\n
      Longitude: ${crd.longitude.toFixed(2)}\n
      More or less within ${crd.accuracy} meters.`;
  }

  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  navigator.geolocation.getCurrentPosition(success, error, options);
}


