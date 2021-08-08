
const API_KEY = `9938bfb5b7b84bcf0f8c541dbf193d9e`



function onGO(pos){
    const lat = pos.coords.latitude
    const lon = pos.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    fetch(url).then(response => response.json()).then(data => {
        const info = document.querySelector(".info")
        const name = data.name;
        const weather = data.weather[0].main;
        info.innerText = `지역은 ${name} 날씨는 ${weather}`
    })
    

}

function offGO(){
    const info = document.querySelector(".info")
    info.innerText = "여긴 어디?"
}


navigator.geolocation.getCurrentPosition(onGO,offGO)

