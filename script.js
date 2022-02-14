// Clipboard
const clipBtn=document.querySelector("#clip-btn")
const copyText=document.querySelector("#clip-input")

const clipAction=()=>{
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    alert("Copied text:"+copyText.value);
}
clipBtn.addEventListener('click',clipAction);