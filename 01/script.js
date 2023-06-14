var clockEl = document.querySelector("#clock");

setInterval(writeTime, 1000);

function writeTime() {
clockEl.textContent = dayjs();
}