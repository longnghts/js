class Ninja{
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log('********************************');
        console.log(`Name:               ${this.name}`);
        console.log('********************************');
    }

    showStats(){
        console.log('********************************');
        console.log(`Name:               ${this.name}`);
        console.log(`Speed:             ${this.speed}`);
        console.log(`Strength:       ${this.strength}`);
        console.log(`Health:           ${this.health}`);
        console.log('********************************');
    }

    drinkSake(){
        console.log('********************************');
        this.health += 10;
        console.log(`${this.name} drank sake and regained some health! ${this.name}'s health is now ${this.health}`);
        console.log('********************************');
    }
}

const ninja1 = new Ninja("Hyabusa", 300);
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
