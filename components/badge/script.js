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
