function dados(callback)
{
    console.log("¡Tiraste!");
    Math.round(Math.random()*5)+1;
}

function tirada(callback) {
    console.log("Tirando dados");
    setTimeout(()=>{
        callback()
        setTimeout(()=>{
            callback()
            setTimeout(()=>{
                console.log("End");
            },1000)
        },1000)
    },1000)
}



new Promise((resolve, reject)=>{
    console.log("Tiraste");
    setTimeout(()=>{
        console.log(dados());
        resolve()
    },1000)
}).then(()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            console.log(dados())
            resolve()
        },1000)
    })
//El último no requiere promesa ya que no devuelve el resultado de una promesa
}).then(()=>{
    setTimeout(() => {
        console.log("End");
    }, 1000);
})