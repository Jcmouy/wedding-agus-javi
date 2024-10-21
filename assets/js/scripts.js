function playAudio() {
    var audio = document.getElementById("backgroundMusic");
    audio.play();
    document.getElementById("playButton").classList.add("hidden");
    document.getElementById("pauseButton").classList.remove("hidden");
}

function pauseAudio() {
    var audio = document.getElementById("backgroundMusic");
    audio.pause();
    document.getElementById("pauseButton").classList.add("hidden");
    document.getElementById("playButton").classList.remove("hidden");
}

function updateCountdown() {
    var countDownDate = new Date(countdownDate).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;

    if (distance < 0) {
        document.getElementById("countdownText").innerHTML = "¡Hoy es el gran día!";
        return;
    }

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval(updateCountdown, 1000);
