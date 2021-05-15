var randomRow=Math.floor(Math.random()*10)+1;
var randomCol=Math.floor(Math.random()*10)+1;

console.log("alto: "+randomRow);
console.log("ancho: "+randomCol);

var fullFibo=[];
var wormFibo=[];
var spiralFibo=[];

var ant = 0, x = 1, ter=randomRow*randomCol;
for(let fib = 1; fib <= ter; fib++)
{
    let resf = ant + x;
    fullFibo.push(resf);
    x = ant;
    ant = resf;
}

var recorrido=0;

for(let i=0; i<randomRow; i++)
{
    wormFibo[i]=[];
    for(x=0; x<randomCol; x++)
    {
        if(i%2===0)
        {
            wormFibo[i].push(fullFibo[recorrido]);
        }
        else
        {
            wormFibo[i].unshift(fullFibo[recorrido]);
        }
        recorrido++;
    }
    console.log(wormFibo[i]);
}
// recorrido=0;
// for(let i=0; i<randomRow; i++)
// {
//     spiralFibo[i]=[];
//     for(let x=0; x<randomCol; x++)
//     {
//         if(i===0)
//         {
//             spiralFibo[i].push(fullFibo[recorrido]);
//         }
//         recorrido++;
//     }
//     for(let x=0; x<randomCol-1; x++)
//     {
//         if(i!==0)
//         {
//             spiralFibo[i].push(fullFibo[recorrido]);
//         }
//         recorrido++;
//     }

//     console.log(spiralFibo[i]);
// }