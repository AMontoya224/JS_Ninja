class Ninja{
    constructor( nombre ){
        this.nombre = nombre;
        this.salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log( "\nMi nombre es ", this.nombre );
    }

    showStats(){
        console.log( "\nNombre: ", this.nombre,
                        "\nFuerza: ", this.fuerza,
                        "\nVelocidad: ", this.velocidad,
                        "\nSalud: ", this.salud );
    }

    drinkSake(){
        this.salud += 10;
    }
}

class Sensei extends Ninja{
    constructor( nombre ){
        super( nombre )
        this.salud = 200;
        this.velocidad = 10;
        this.fuerza = 10;
        this.sabiduría  = 10;
    }

    speakWisdom(){
        super.drinkSake();
        console.log( "\nLo que un programador puede hacer en un mes, dos programadores pueden hacerlo en dos meses." );
    }
}
const ninja1 = new Ninja( "Hyabusa" );
console.log( "--- NINJA ---" );
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();

const superSensei = new Sensei( "Master Splinter" );
console.log( "\n--- SENSEI ---" );
superSensei.speakWisdom();
superSensei.showStats();