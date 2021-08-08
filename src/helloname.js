
const nameForm = document.querySelector(".nameForm");
const nameInput = document.querySelector(".nameInput");
const nameBox = document.querySelector("#nameBox");
const HIDDEN = "HIDDEN"
const LOCALNAME = localStorage.getItem("name")
function inName(e){
    e.preventDefault();
    const nameValue = nameInput.value;
    nameBox.innerText = `안녕 ${nameValue}`
    localStorage.setItem("name", nameValue)
    nameForm.classList.add(HIDDEN)
    nameBox.classList.remove(HIDDEN)
}

if( LOCALNAME === null){
    nameForm.addEventListener("submit", inName)
    nameForm.classList.remove(HIDDEN)
}else{
    nameForm.classList.add(HIDDEN)
    nameBox.innerText = `안녕 ${LOCALNAME}`
    nameBox.classList.remove(HIDDEN)
   
}

nameForm.addEventListener("submit", inName)


