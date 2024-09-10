// Get the button, video, countdown, and other elements
const showVideoBtn = document.getElementById('show-video-btn');
const videoContainer = document.getElementById('video-container');
const video = document.getElementById('birthday-video');
const message = document.getElementById('message');
const photoScreen = document.getElementById('photo-screen');
const countdownElement = document.getElementById('countdown');
const countdownNumber = document.getElementById('countdown-number');

// Sound effect for the countdown
const countdownSound = new Audio('Audio.mp3');

// Function to stop the countdown sound if it's playing
function stopCountdownSound() {
    countdownSound.pause();      // Pause the sound
    countdownSound.currentTime = 0;  // Reset the sound to the start
}

// Function to display countdown and play sound (starting from 18th second)
function startCountdown() {
    let countdown = 10;
    countdownElement.classList.remove('hidden');

    // Fast forward the audio to the 18th second
    countdownSound.currentTime = 16;

    // Play the sound
    countdownSound.volume = .3
    countdownSound.play();

    const countdownInterval = setInterval(() => {
        countdownNumber.textContent = countdown;

        countdown--;

        if (countdown < 0) {
            clearInterval(countdownInterval);
            stopCountdownSound();  // Stop the sound when countdown ends
            countdownElement.classList.add('hidden');
            videoContainer.classList.remove('hidden');
            video.play();
        }
    }, 1700);  // Change each number every 2.1 seconds (2100 milliseconds)
}

// Add event listener to the button to trigger the countdown
showVideoBtn.addEventListener('click', function() {
    showVideoBtn.classList.add('hidden');  // Hide the button
    startCountdown();  // Start countdown and play video
});

// Add event listener to detect when the video ends
video.addEventListener('ended', function() {
    // Hide the video and birthday message
    videoContainer.classList.add('hidden');
    message.classList.add('hidden');

    // Show the screen with photos and balloon animation
    photoScreen.classList.remove('hidden');
});
