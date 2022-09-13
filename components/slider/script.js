const slider=document.querySelector("#range");
const output=document.querySelector("#value-range");
output.innerHTML=slider.value;
slider.oninput = function() {
    output.innerHTML = this.value;}
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
