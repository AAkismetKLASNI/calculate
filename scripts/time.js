const timeBar = document.querySelector('.time-bar');

const date = new Date().toLocaleTimeString([], { timeStyle: 'short' });

timeBar.textContent = date;
