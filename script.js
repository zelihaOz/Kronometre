// Copyright (c) 2025 Zeliha Özer. All rights reserved.
// Bu dosya, Kronometre için yazılmıştır.

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
	
  function kaydetSure() {
    const sureElement = document.getElementById("timerDisplay");
    const sure = sureElement.textContent;
	// Süre 00:00:00 ise kayıt edilmesin
    if (sure === "00:00:00") return;
	/*listeye ekle */
    const liste = document.getElementById("gecmisSureler");
    const yeniKayit = document.createElement("li");
    yeniKayit.textContent = sure;
    liste.appendChild(yeniKayit);
}

function kaydetSure() {
  const sureElement = document.getElementById("timerDisplay");
  const sure = sureElement.textContent;
  const not = prompt("Bu süreye bir not eklemek ister misin?");
  const liste = document.getElementById("gecmisSureler");
  const yeniKayit = document.createElement("li");
  yeniKayit.textContent = not ? `${sure} - ${not}` : sure;
  liste.appendChild(yeniKayit);
}



function temizleGecmis() {
  const liste = document.getElementById("gecmisSureler");
  liste.innerHTML = ""; // içeriği temizle
}



  
//menü aç kapa işlemi
   
  function toggleMenu() {
    const menu = document.getElementById("sideMenu");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  }
  // Sayfa yüklendiğinde olay dinleyici ekle
document.addEventListener("click", function(event) {
  const menu = document.getElementById("sideMenu");
  const menuIcon = document.querySelector(".menu-icon");

  // Eğer tıklanan yer menünün ya da simgenin içi değilse menüyü kapat
  if (!menu.contains(event.target) && !menuIcon.contains(event.target)) {
    menu.style.display = "none";
  }
});
 
 
 


