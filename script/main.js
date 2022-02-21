// badge hide 
const btnInput=document.querySelector("#btn-input");
const hideBadge=()=>{
    const badge=document.querySelector("#badge-hide");
    if(badge.style.visibility === "visible"){
        badge.style.visibility="hidden";
    }else{
        badge.style.visibility="visible";
    }
}
btnInput.addEventListener("click",hideBadge);

// input sample validation check 
var userInput = document.querySelector("#phone-number")
var submitBtn = document.querySelector("#submit")
var output = document.querySelector("#output")
var label = document.querySelector("#label-pwd")

const validInputCheck = () => {
    if (userInput.value.length != 10) {
        output.style.color = `red`;
        label.style.color = `red`;
        userInput.style.border = `1px solid red`;
        userInput.style.outline = `none`;
        var inValidOutput = `please enter 10 digit valid mobile number`;
        output.innerHTML = inValidOutput;
    } else {
        output.style.color = `green`;
        label.style.color = `green`;
        userInput.style.border = `1px solid green`;
        userInput.style.outline = `none`;
        var validOutput = `you entered mobile number correctly`;
        output.innerHTML = validOutput;
    }
}
submitBtn.addEventListener("click", validInputCheck);

// nav hamburger 
const hamburger=document.querySelector("#hamburger");
const navUl=document.querySelector(".nav-ul");

hamburger.addEventListener('click',()=>{
    navUl.classList.toggle('show');
});

// slider component
const slider=document.querySelector("#range");
const output=document.querySelector("#value-range");
output.innerHTML=slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;}

