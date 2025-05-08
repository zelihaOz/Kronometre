
// Zamanlayıcıyı başlatan fonksiyon
    let [seconds, minutes, hours] = [0, 0, 0];
    let timer = null;

    function updateDisplay() {
      let h = hours < 10 ? "0" + hours : hours;
      let m = minutes < 10 ? "0" + minutes : minutes;
      let s = seconds < 10 ? "0" + seconds : seconds;
      document.getElementById("timerDisplay").innerText = `${h}:${m}:${s}`;
    }

    function timerCycle() {
      seconds++;
      if (seconds == 60) {
        seconds = 0;
        minutes++;
        if (minutes == 60) {
          minutes = 0;
          hours++;
        }
      }
      updateDisplay();
    }

    function startTimer() {
      if (timer !== null) return;
      timer = setInterval(timerCycle, 1000);
    }

    function pauseTimer() {
      clearInterval(timer);
      timer = null;
    }

    function resetTimer() {
      pauseTimer();
      [seconds, minutes, hours] = [0, 0, 0];
      updateDisplay();
    }
  
