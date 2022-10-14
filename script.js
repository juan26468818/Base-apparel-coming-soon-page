const button = document.getElementById("submit")
const input = document.getElementById("input-s")
const form = document.getElementById("form")

button.addEventListener("click", ()=>{
    input.oninvalid = input.className += " invalid";
    input.oninvalid = form.className += " error"
    
})