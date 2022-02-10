const slider=document.querySelector("#range");
const output=document.querySelector("#value-range");
output.innerHTML=slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;}
