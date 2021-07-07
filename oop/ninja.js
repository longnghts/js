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

class Sensei extends Ninja{
    constructor(name, health){
        super(name, health);
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log('These are the words of wisdom that i will speak so sweetly to you.');
        }
    }


const ninja1 = new Ninja("Hyabusa", 300);
const sensei1 = new Sensei("Mike", 9001);

ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();
sensei1.speakWisdom();
