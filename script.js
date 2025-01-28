let alarmTime = null;
let alarmSet = false;

function updateCurrentTime() {
  const currentTimeDisplay = document.getElementById("current-time-display");
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  currentTimeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
  
  // Check if it's time to trigger the alarm
  if (alarmSet && alarmTime === `${hours}:${minutes}`) {
    alert("Time's up! Alarm ringing...");
    alarmSet = false;
    document.getElementById("alarm-status").textContent = "Alarm triggered!";
  }
}

function setAlarm() {
  const alarmInput = document.getElementById("alarm-time").value;
  if (!alarmInput) {
    alert("Please set a valid time for the alarm.");
    return;
  }

  alarmTime = alarmInput;
  alarmSet = true;
  document.getElementById("alarm-status").textContent = `Alarm set for ${alarmTime}`;
}

setInterval(updateCurrentTime, 1000);
