

const year = document.querySelector('#year');
const days = document.querySelector('#days');
const hours = document.querySelector('#hours');
const minutes = document.querySelector('#minutes');
const seconds = document.querySelector('#seconds');
const countdown = document.querySelector('.countdown');

// Get Date data
const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);


function updateCountdown(){
    const currentTime = new Date();

    // Diffence between next year and current year
    const difference = newYearTime - currentTime;

    // Days
    const d = Math.floor(difference / (1000 * 60 * 60 * 24));
    // Hours
    const h = Math.floor((difference / (1000 * 60 * 60)) % 24);
    // Minutes
    const m = Math.floor((difference / (1000 * 60)) % 60);
    // Seconds
    const s = Math.floor((difference / 1000) % 60);

    days.textContent = d;
    hours.textContent = h < 10 ? '0' + h : h;
    minutes.textContent = m < 10 ? '0' + m : m;
    seconds.textContent = s < 10 ? '0' + s : s;;

    year.textContent = currentYear + 1;

    //console.log(d, h, m, s)
}

// Update Coundown every second
setInterval(updateCountdown, 1000)

