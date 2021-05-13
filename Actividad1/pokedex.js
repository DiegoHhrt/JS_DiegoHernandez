class pokemon{
    constructor(name, nature, type, life, attack, defense, speed, Level)
    {
        this.nombre=name;
        this.naturaleza=nature;
        this.tipo=type;
        this.vida=life;
        this.ataque=attack;
        this.defensa=defense;
        this.velocidad=speed;
        this.nivel=Level;
    }

    levelUp()
    {
        
        if(this.nivel<100)
        {
            this.nivel++;
            console.log("¡Tu "+this.nombre+" ha subido a nivel "+this.nivel+"!");
            if(this.naturaleza=="Audaz")
            {
                this.ataque+=4;
                console.log("El ataque de "+this.nombre+" Ha aumentado 4 puntos");
            }
            else if(this.naturaleza=="Osada")
            {
                this.defensa+=4;
                console.log("La defensa de "+this.nombre+" Ha aumentado 4 puntos");
            }
            else if(this.naturaleza=="Cauta")
            {
                this.vida+=4;
                console.log("La vida de "+this.nombre+" Ha aumentado 4 puntos");
            }
            else if(this.naturaleza=="Alegre")
            {
                this.velocidad+=4;
                console.log("El ataque de "+this.nombre+" Ha aumentado 4 puntos");
            }
        }
        else
        {
            console.log("Tu "+this.nombre+" ha alcanzado el nivel máximo");
        }
    }

    presentarse()
    {
        console.log("¡Hola! Soy "+this.nombre+", soy tipo "+this.tipo+" me encuentro en el nivel "+this.nivel+".");
    }

    enumerar()
    {
        console.log("Mis estadísticas son: Ataque "+this.ataque+", Vida "+this.vida+", Defensa "+this.defensa+", Velocidad "+this.velocidad+".")
    }
    
    suma()
    {
        this.enumerar();
        let numVida=parseInt(this.vida);
        let numAtaque=parseInt(this.ataque);
        let numDefensa=parseInt(this.defensa);
        let numVelocidad=parseInt(this.velocidad); 
        let suma=(numVida+numAtaque+numDefensa+numVelocidad);      
        console.log("La suma es: "+suma)
        return suma;
    }

    promedio()
    {
        this.enumerar();
        let numVida=parseInt(this.vida);
        let numAtaque=parseInt(this.ataque);
        let numDefensa=parseInt(this.defensa);
        let numVelocidad=parseInt(this.velocidad); 
        let suma=(numVida+numAtaque+numDefensa+numVelocidad); 
        let prom=suma/4;
        console.log("El promedio es: "+prom)
    }
}

const EEVEE = new pokemon('Eeve', 'Audaz', 'Normal', 12, 15, 13, 22, 2);
const NINETALES = new pokemon('Ninetales', 'Cauta', 'Fuego', 35, 48, 40, 28, 12);
const DRAGONITE = new pokemon('Dragonite', 'Alegre', 'Dragón', 155, 122, 99, 75, 35);
const MILOTIC = new pokemon('Milotic', 'Osada', 'Agua', 100, 155, 122, 99, 38);
const SYLVEON = new pokemon('Sylveon', 'Cauta', 'Hada', 355, 250, 288, 349, 100);
