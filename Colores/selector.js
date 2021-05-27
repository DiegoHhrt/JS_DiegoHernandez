window.addEventListener("load", ()=>{
    function colorear()
    {
        if(type.value==="S")
        {
            cont.fillStyle=mainColor;
            cont.strokeStyle=mainColor;
        }
        else if(type.value==="R")
        {
            gr=cont.createRadialGradient(width/2, height/2, width/20, width/2, height/2, width/3);
            gr.addColorStop(0, mainColor);
            gr.addColorStop(1,secondColor);
            cont.fillStyle=gr;
            cont.strokeStyle=gr;
        }
        else if(type.value==="L")
        {
            gr=cont.createLinearGradient(width/3, height/3, (width/3)*2, (height/3)*2);
            gr.addColorStop(0, mainColor);
            gr.addColorStop(1,secondColor);
            cont.fillStyle=gr;
            cont.strokeStyle=gr;
        }
    }
    
    var fig=document.getElementById("figSelect");
    var type=document.getElementById("gradient");
    var color=document.getElementById("solid");
    var button=document.getElementById("but");
    var node=document.getElementById("degC");
    var grad=document.getElementById("deg");

    var can=document.getElementById("Figures");
    var cont=can.getContext("2d");
    var width = can.width;
    var height = can.height;
    var mainColor, secondColor, gr;
    node.style.display="none";
    type.addEventListener("change",()=>{
        if(type.value=="L"||type.value=="R")
        {
            node.style.display="block";
        }
        else
        {
            node.style.display="none";
        }
    });
    button.addEventListener("click", ()=>{
        cont.clearRect(0,0,width, height);
        secondColor=grad.value;
        mainColor=color.value;
        if(fig.value==="mickey")
        {
            cont.beginPath();
                cont.arc(width/3, height/3, 60, 0, Math.PI*2);
                cont.arc((width/3)*2, height/3, 60, -Math.PI, Math.PI);
                cont.arc(width/2, height/2, 110, 0, Math.PI*2);
                
                colorear();
                cont.fill();
            cont.closePath();
        
        }
        if(fig.value==="star")
        {
            cont.beginPath();
                cont.moveTo(width/2, height/10)
                cont.lineTo((width/3)*2,(height/10)*9);
                cont.lineTo((width/10)*2,(height/7)*3);
                cont.lineTo((width/10)*8,(height/7)*3);
                cont.lineTo(width/3,(height/10)*9);
                
                colorear();
                cont.fill();
                cont.stroke();
            cont.closePath();
        }
        if(fig.value==="falcon")
        {
            cont.beginPath();
                cont.lineTo((width/4)*3, (height/10)*4);
                cont.lineTo((width/18)*14, (height/10)*4);
                cont.lineTo((width/18)*14, (height/10)*3);
                cont.lineTo((width/18)*13, (height/10)*3);
                cont.lineTo((width/9)*6, height/10);
                cont.lineTo((width/11)*7, height/10);
                cont.lineTo((width/2), (height/6)*2);
                cont.lineTo((width/11)*4, height/10);
                cont.lineTo((width/9)*3, height/10);
                cont.lineTo((width/4), height/2);
                cont.moveTo((width/2), height/2);
                
                colorear();
                cont.fill();
                cont.arc(width/2, height/2, width/4, 0, Math.PI*2);
                cont.fill();
                cont.stroke();
            cont.closePath();
        }
    });

});