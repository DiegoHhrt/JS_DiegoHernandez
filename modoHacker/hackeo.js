function newPos()
{
    return Math.round(Math.random()*100);
}
window.addEventListener('load', () =>{
    var butNo=document.getElementById("nel");
    butNo.addEventListener("mouseover", () => {
        butNo.style.left=newPos()+"%";
        butNo.style.top=newPos()+"%";
    })

    var butSi=document.getElementById("sis");
    butSi.addEventListener("click", ()=>{
        var congrats=document.getElementById("congrats");
        congrats.style.display="block";
        butNo.style.display="none";
        butSi.style.display="none";
    })
})
