
const CLOCK = document.querySelector(".clock");
const CALENDAR = document.querySelector(".calendar");

function clock(){
    const date = new Date();
    const hor = String(date.getHours()).padStart(2, "0")
    const min = String(date.getMinutes()).padStart(2, "0")
    const sec = String(date.getSeconds()).padStart(2, "0")
    const year = String(date.getFullYear())
    const mon = String(date.getMonth()+1).padStart(2, "0")
    const day = String(date.getDate()).padStart(2, "0")

    CLOCK.innerText = `${hor} : ${min} `
    CALENDAR.innerText = `${year}년 ${mon}월 ${day}일`
    
}
setInterval(clock, 1000) 