const clock = document.getElementById('time');
const timeFinish = new Date("Nov 01, 2022 00:00:00").getTime();

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
    
    hours < 10 ? clock.innerHTML = days + "d " + "0" + hours + "h " + minutes + "m " + seconds + "s " : clock.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    minutes < 10 ? clock.innerHTML = days + "d " + hours + "h " + "0" + minutes + "m " + seconds + "s " : clock.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    days < 10 ? clock.innerHTML = "0" + days + "d " + hours + "h " + minutes + "m " + seconds + "s " : clock.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    setTimeout(countdown, 1000);
}