// Initialize AOS (for animations on scroll)
AOS.init();

// Countdown Timer
const countdown = document.getElementById('countdown');
const weddingDate = new Date('Feb 20, 2025 17:00:00').getTime();

const interval = setInterval(() => {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        clearInterval(interval);
        countdown.innerHTML = "The big day is here!";
    }
}, 1000);

// Background Music Controls
const music = document.getElementById('backgroundMusic');
const muteButton = document.getElementById('muteButton');

muteButton.addEventListener('click', () => {
    if (music.paused) {
        music.play();
        muteButton.textContent = "Mute Music";
    } else {
        music.pause();
        muteButton.textContent = "Play Music";
    }
});

// Google Maps Integration
function initMap() {
    const location = { lat: 25.7617, lng: -80.1918 }; // Miami location
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
    const marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

// RSVP Form Submission to Google Sheets
const scriptURL = 'https://script.google.com/macros/s/AKfycbyqUcWZ5zJUWwfVi67t7CF-1JGYp1jFLIebnx5wfsd4uiwqMlITSUQMXyx0xvfGLS8K6g/exec'; // Replace with your Google Script URL
const form = document.getElementById('rsvp-form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            alert('RSVP submitted successfully!');
            form.reset(); // Clear the form after submission
        })
        .catch(error => {
            alert('Error submitting RSVP. Please try again.');
            console.error('Error!', error.message);
        });
});
