function pattern () {
    var secuence;
    for(let i=0; i<5; i++)
    {
        secuence=Math.floor(Math.random()*4)+1;
    }
    return secuence;
}
function show(shine) {
    if(shine==1){
      setTimeout(()=>{
            tLeft.style.backgroundColor = "#378144";
      },300)
    }
    if(shine==2){
        setTimeout(()=>{
            tRight.style.backgroundColor = "#a88826";
        },300)
    }
    if(shine==3){
        setTimeout(()=>{
            bLeft.style.backgroundColor = "#ad253e";
        },300)
    }
    if(shine==4){
        setTimeout(()=>{
            bRight.style.backgroundColor = "#3b51b4";
        },300)
    }
}
function reestablish(unshine) {
    if(unshine==1){
        setTimeout(()=>{
            tLeft.style.backgroundColor = "#69D67D";
        },300)
    }
    if(unshine==2){
        setTimeout(()=>{
            tRight.style.backgroundColor = "#D6BA64";
        },300)
    }
    if(unshine==3){
        setTimeout(()=>{
            bLeft.style.backgroundColor = "#D64D65";
        },300)
    }
    if(unshine==4){
        setTimeout(()=>{
            bRight.style.backgroundColor = "#697DD6";
        },300)
    }
}
var tLeft=document.getElementById("topLeft");
var tRight=document.getElementById("topRight");
var bLeft=document.getElementById("bottomLeft");
var bRight=document.getElementById("bottomRight");
var head=document.getElementById("title");
var game=0;
var ilumination=new Array;
var clicks = new Array;
if(game==0)
{
    var start=document.getElementById("button");
    game=1;
    start.addEventListener("click",()=>{
        const prom = new Promise((resolve, reject)=>{
            console.log("Patrón:");
            setTimeout(()=>{
                let ind=pattern();
                show(ind);
                ilumination.push(ind);
                resolve(ind)
            },600)
        }).then((previous)=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    reestablish(previous);
                    let ind=pattern();
                    show(ind);
                    ilumination.push(ind);
                    resolve(ind)
                },600) 
            })
        }).then((previous)=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    reestablish(previous);
                    let ind=pattern();
                    show(ind);
                    ilumination.push(ind);
                    resolve(ind)
                },600) 
            })
        }).then((previous)=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    reestablish(previous);
                    let ind=pattern();
                    show(ind);
                    ilumination.push(ind);
                    resolve(ind)
                },600) 
            })
        }).then((previous)=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    reestablish(previous);
                    let ind=pattern();
                    show(ind);
                    ilumination.push(ind);
                    resolve(ind)
                },600) 
            })
        }).then((previous)=>{
            return new Promise((resolve)=>{
                setTimeout(()=>{
                    reestablish(previous);
                    resolve()
                },600)
            })
        }).then(()=>{
            return new Promise((resolve, reject)=>{
                setTimeout(()=>{
                    let position=0;
                    console.log(ilumination);
                    tLeft.classList.add("pointer");
                    tRight.classList.add("pointer");
                    bLeft.classList.add("pointer");
                    bRight.classList.add("pointer");
                    tLeft.addEventListener("click", ()=>{
                        clicks.push(1);
                        if(clicks[position]!=ilumination[position]){
                            console.log("win");
                            reject()
                        }
                        else if(position>3)
                        {
                            resolve()
                        }
                        position++;
                        console.log(clicks);
                    });
                    tRight.addEventListener("click", ()=>{
                        clicks.push(2);
                        if(clicks[position]!=ilumination[position]){
                            console.log("win");
                            reject()
                        }
                        else if(position>3)
                        {
                            resolve()
                        }
                        position++;
                        console.log(clicks);
                    });
                    bLeft.addEventListener("click", ()=>{
                        clicks.push(3);
                        if(clicks[position]!=ilumination[position]){
                            console.log("win");
                            reject()
                        }
                        else if(position>3)
                        {
                            resolve()
                        }
                        position++;
                        console.log(clicks);
                    });
                    bRight.addEventListener("click", ()=>{
                        clicks.push(4);
                        if(clicks[position]!=ilumination[position]){
                            console.log("win");
                            reject()
                        }
                        else if(position>3)
                        {
                            resolve()
                        }
                        position++;
                        console.log(clicks);
                    });
                },800)
            })
        }).then(()=>{
            tLeft.classList.remove("pointer");
            tRight.classList.remove("pointer");
            bLeft.classList.remove("pointer");
            bRight.classList.remove("pointer");
            head.innerText="Felicidades, ¡Ganaste! Kiki te adora";
            start.innerText="Reiniciar";
            start.addEventListener("mouseover", ()=>{
                window.location.reload();
            });
        }).catch(()=>{
            tLeft.classList.remove("pointer");
            tRight.classList.remove("pointer");
            bLeft.classList.remove("pointer");
            bRight.classList.remove("pointer");
            head.innerText="Perdiste):";
            start.innerText="Reiniciar";
            start.addEventListener("mouseover", ()=>{
                window.location.reload();
            });
        })
    });
}

