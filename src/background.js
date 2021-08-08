

const back = document.querySelector(".back")
function reloadBg(){
    const colorOne = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const colorTwo = "#" + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.background = `linear-gradient(${colorOne}, ${colorTwo})`;

    // const random = Math.floor(Math.random()*10+1);
    // const bg = document.body.style.backgroundImage = `url(../img/${random}.jpg)`
    // console.log(random)
}

reloadBg()