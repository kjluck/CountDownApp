// Get the target date and time (in this case, 1 day from now)
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 1);

// Countdown function
function updateCountdown() {
    const currentDate = new Date();
    const timeDifference = targetDate - currentDate;

    // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    // Update the countdown display
    document.getElementById('days').textContent = `${days} Days`;
    document.getElementById('hours').textContent = `${hours} Hours`;
    document.getElementById('minutes').textContent = `${minutes} Minutes`;
    document.getElementById('seconds').textContent = `${seconds} Seconds`;

    // If the countdown is over, display a message
    if (timeDifference < 0) {
        clearInterval(interval);
        document.getElementById('days').textContent = 'Countdown Over';
        document.getElementById('hours').textContent = '';
        document.getElementById('minutes').textContent = '';
        document.getElementById('seconds').textContent = '';
    }
}

// Initial call to display countdown immediately
updateCountdown();

// Update the countdown every second
const interval = setInterval(updateCountdown, 1000);
