

const back = document.querySelector(".back")
function reloadBg(){
    const colorOne = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    const colorTwo = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
    document.body.style.background = `linear-gradient(${colorOne}, ${colorTwo})`;

   
}

reloadBg()