var min = 0;
var sec = 0;
var msec = 0;

var getmin = document.querySelector("#mins");
var getsec = document.querySelector("#secs");
var getmsec = document.querySelector("#msecs");

var stop;

function startbtn() {
  stop = setInterval(() => {
    msec++;

    getmsec.innerHTML = msec;

    if (msec == 100) {
      sec++;
      getsec.innerHTML = sec;
      msec = 0;
    } else if (sec == 60) {
      min++;
      getmin.innerHTML = min;
      sec = 0;
    }
  });

  document.querySelector("#startbtn").disabled = true;
}

function stopbtn() {
  clearInterval(stop);
  document.querySelector("#startbtn").disabled = false;
}

function reset() {
  min = 0;
  sec = 0;
  msec = 0;

  getmin.innerHTML = min;
  getsec.innerHTML = sec;
  getmsec.innerHTML = msec;

  clearInterval(stop)

  document.querySelector("#startbtn").disabled = false;
}
