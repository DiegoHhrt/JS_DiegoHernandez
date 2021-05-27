window.addEventListener("load", ()=>{
    var fig=document.getElementById("figSelect");
    var color=document.getElementById("solid");
    var button=document.getElementById("but");
    var can=document.getElementById("Figures");
    var cont=can.getContext("2d");
    var width = can.width;
    var height = can.height;
    var mainColor;
    button.addEventListener("click", ()=>{
        mainColor=color.value;
        console.log(mainColor);
        console.log(fig.getAttribute("value"));
        if(fig.getAttribute("value")==="mickey")
        {
            cont.beginPath();
                cont.arc(width/3, height/3, 60, 0, Math.PI*2);
                cont.arc((width/3)*2, height/3, 60, -Math.PI, Math.PI);
                cont.arc(width/2, height/2, 110, 0, Math.PI*2);
                cont.fillStyle=mainColor;
                cont.fill();
            cont.closePath();
        }
        if(fig.getAttribute("value")==="mickey")
        {
            cont.beginPath();
                cont.moveTo(width/2, height/10)
                cont.lineTo((width/3)*2,(height/10)*9);
                cont.lineTo((width/10)*2,(height/7)*3);
                cont.lineTo((width/10)*8,(height/7)*3);
                cont.lineTo(width/3,(height/10)*9);
                cont.fillStyle=mainColor;
                cont.fill();
                cont.strokeStyle=mainColor;
                cont.stroke();
            cont.closePath();
        }
        if(fig.getAttribute("value")==="mickey")
        {
            cont.translate(width, 0);
            cont.rotate(Math.PI/180*90);
        
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
                cont.fillStyle=mainColor;
                cont.fill();
                cont.arc(width/2, height/2, width/4, 0, Math.PI*2);
                cont.fillStyle=mainColor;
                cont.fill();
            cont.closePath();
        }
    });
    cont.translate(width, 0);
    cont.rotate(Math.PI/180*90);

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
        cont.fillStyle=mainColor;
        cont.fill();
        cont.arc(width/2, height/2, width/4, 0, Math.PI*2);
        cont.fillStyle=mainColor;
        cont.fill();
    cont.closePath();
});