function getTimeRemaining(endtime) {
  let t = Date.parse(endtime) - Date.parse(new Date());
  let second = Math.floor((t / 1000) % 60);
  let minutes = Math.floor((t / 1000 / 60) % 60);
  let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  let days = Math.floor(t / (1000 * 60 * 60 * 24));
  return {
    total: t,
    days: days,
    hours: hours,
    minutes: minutes,
    second: second
  };
}

function initializeClock(id, endtime) {
  let clock = document.getElementById(id);
  let daysSpan = clock.querySelector(".action_timer_days .action_timer_element_count");
  let hoursSpan = clock.querySelector(".action_timer_hour .action_timer_element_count");
  let minutesSpan = clock.querySelector(".action_timer_min .action_timer_element_count");
  let secondSpan = clock.querySelector(".action_timer_sec .action_timer_element_count");
  function updateClock() {
    let t = getTimeRemaining(endtime);

    if (t.total <= 0) {
      clearInterval(timeinterval);
      initializeClock("action_timer", deadline);
    }

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
    minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
    secondSpan.innerHTML = ("0" + t.second).slice(-2);
  }

  updateClock();
  let timeinterval = setInterval(updateClock, 1000);
}
let deadline = "Feb 22 2022 00:00:00 GMT+0300";
initializeClock("action_timer", deadline);