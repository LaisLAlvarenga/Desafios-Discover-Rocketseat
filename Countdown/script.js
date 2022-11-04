const clock = document.querySelector('.time');
const timeFinish = new Date("Jan 01, 2023 00:00:00").getTime();

function countdown() {
  const timeNow = new Date().getTime();

  const diferencaTempo = timeFinish - timeNow;

  //Conversão dos valores
  const days = Math.floor(diferencaTempo / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (diferencaTempo % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor(
    (diferencaTempo % (1000 * 60 * 60)) / (1000 * 60)
  );
  const seconds = Math.floor((diferencaTempo % (1000 * 60)) / 1000);

  days < 10 ? document.getElementById('day').innerHTML = "0" + days + " :" : document.getElementById('day').innerHTML = days;

  hours < 10 ? document.getElementById('hour').innerHTML = "0" + hours + " :" : document.getElementById('hour').innerHTML = hours;

  minutes < 10 ? document.getElementById('minute').innerHTML = "0" + minutes + " :": document.getElementById('minute').innerHTML = minutes + " :";

  seconds < 10 ? document.getElementById('second').innerHTML = "0" + seconds : document.getElementById('second').innerHTML = seconds;

  setTimeout(countdown, 1000);
}