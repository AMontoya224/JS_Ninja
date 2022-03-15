class Ninja{
    constructor( nombre ){
        this.nombre = nombre;
        this. salud = 100;
        this.velocidad = 3;
        this.fuerza = 3;
    }

    sayName(){
        console.log( "Mi nombre es ", this.nombre );
    }

    showStats(){
        console.log( "Nombre: ", this.nombre,
                        "\nFuerza: ", this.fuerza,
                        "\nVelocidad: ", this.velocidad,
                        "\nSalud: ", this.salud );
    }

    drinkSake(){
        this.salud += 10;
    }
}

let ninja1 = new Ninja( "Hyabusa" );
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();