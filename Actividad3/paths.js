function cookieName (name) 
{
    let cookies = document.cookie;
    let cookieArray = cookies.split("; ");
    for (let value of cookieArray)
    {
        let cookie=value.split("=");
        if(cookie[0]===name)
        {
            return cookie[1];
        }
    }
    return false;
}

function checkPath () {
    if(!(cookieName("path1")))
    {
        while(real!="IZQUIERDA" && real!="DERECHA")
        {
            let direc=prompt("¿A qué dirección te dirges?", "Izquierda o derecha");
            real = direc.toUpperCase();
        } 
        if(!(cookieName("path0")))
        {
            document.cookie="path0="+real+"; expires="+now.toGMTString();
            window.location.reload();
        }
        else
        {
            document.cookie="path1="+real+"; expires="+now.toGMTString();
            window.location.reload();
        }
    }
    else if(cookieName("path1"))
    {
        var firstChoice=cookieName("path0");
        var secondChoice=cookieName("path1");

        document.cookie="path0; expires="+expire;
        document.cookie="path1; expires="+expire;

        if(firstChoice=="IZQUIERDA"&&secondChoice=="IZQUIERDA")
        {
            console.log("casa");
            clearTimeout(temporizador);
            return 1; 
        }
        else if(firstChoice=="IZQUIERDA"&&secondChoice=="DERECHA")
        {
            console.log("arbol");
            clearTimeout(temporizador);
            return 2; 
        }
        else if(firstChoice=="DERECHA"&&secondChoice=="IZQUIERDA")
        {
            console.log("hongo");
            clearTimeout(temporizador);
            return 3; 
        }
        else if(firstChoice=="DERECHA"&&secondChoice=="DERECHA")
        {
            console.log("bruja");
            clearTimeout(temporizador); 
            return 4;
        }
    }
}
let real="";
let now = new Date();
let expire= new Date();
now.setTime(now.getTime()+(1000*60*15));
expire.setTime("Wed May 19 2011 19:10:14 GMT-0500");
results= new Array;
//document.write("<img src='./statics/Caminos.jpeg' alt='caminos' width='700'>");
let temporizador = setTimeout(checkPath, 1500);
if(cookieName("path1")&&cookieName("path0"))
{
    if(checkPath()===1)
    {
        window.location="./casa.html";
    }
    else if(checkPath()===2)
    {
        window.location="./tronco.html";
    }
    else if(checkPath()===3)
    {
        window.location="./hongo.html";
    }
    else if(checkPath()===4)
    {
        window.location="./bruja.html";
    }
}