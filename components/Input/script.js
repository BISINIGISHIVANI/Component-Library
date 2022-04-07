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
const menubtn=document.querySelector("#menu-bar");
const sidemenu=document.querySelector("#open-sidemenu");
const closeSidebar=document.querySelector("#close-btn");

const openSidebar=()=>{
    sidemenu.style.display="block";
    closeSidebar.style.display=`block`;
    sidemenu.style.marginTop=`2rem`;
}
const closeSide=()=>{
    sidemenu.style.display="none";
}
menubtn.addEventListener("click",openSidebar)

closeSidebar.addEventListener("click",closeSide)