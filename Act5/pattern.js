var tLeft=document.getElementById("topLeft");
var tRight=document.getElementById("topRight");
var bLeft=document.getElementById("bottomLeft");
var bRight=document.getElementById("bottomRight");

tLeft.addEventListener("click", ()=>{
    console.log("tL");
});
tRight.addEventListener("click", ()=>{
    console.log("tr");
});
bLeft.addEventListener("click", ()=>{
    console.log("bl");
});
bRight.addEventListener("click", ()=>{
    console.log("br");
});