let countDownDate = new Date("September 20, 2023 17:30:00").getTime();
let firework1 = document.getElementById("firework1");
let firework2 = document.getElementById("firework2");
let firework3 = document.getElementById("firework3");
let firework4 = document.getElementById("firework4");
let firework5 = document.getElementById("firework5");

export const startTimer = () => {
  const timerElement = document.getElementById("timer");

  const zeroLeft = (n) =>
    Math.floor(n).toString().padStart(2, '0');

  const updateTimer = () => {
    let now = new Date().getTime();
    let distance = countDownDate - now;

    if (distance <= 0) {
      timerElement.innerHTML = "FINALMENTE";
      firework1.classList.add("firework");
      firework2.classList.add("firework");
      firework3.classList.add("firework");
      firework4.classList.add("firework");
      firework5.classList.add("firework");
      return;
    }

    let days = zeroLeft(Math.floor(distance / (1000 * 60 * 60 * 24)));
    let hours = zeroLeft(Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
    let minutes = zeroLeft(Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)));
    let seconds = zeroLeft(Math.floor((distance % (1000 * 60)) / 1000));

    timerElement.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    requestAnimationFrame(updateTimer);
  };

  updateTimer();
};