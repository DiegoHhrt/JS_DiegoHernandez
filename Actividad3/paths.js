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
    else
    {
        var firstChoice=cookieName("path0");
        var secondChoice=cookieName("path1");

        document.cookie="path0; expires="+expire.toGMTString();
        document.cookie="path1; expires="+expire.toGMTString();

        
    }
    return real;
}
let real="";
let now = new Date();
let expire= new Date();
now.setTime(now.getTime()+(1000*60*15));
expire.setTime(expire.getTime()-1000);
results= new Array;
//document.write("<img src='./statics/Caminos.jpeg' alt='caminos' width='700'>");
let temporizador = setTimeout(checkPath, 1500);


