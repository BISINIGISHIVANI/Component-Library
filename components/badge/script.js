const inputOne=document.querySelector("#btn-ide");

function myFunction(){
    const userInput=document.querySelector("#toggle1");
    if(userInput.style.visibility === "visible"){
        userInput.style.visibility="hidden";
    }else{
        userInput.style.visibility="visible";
    }
}
// inputOne.addEventListener("click",myFunction) 