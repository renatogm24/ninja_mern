class Ninja {
  constructor(nombre, salud) {
    this.nombre = nombre;
    this.salud = salud;
    this.velocidad = 3;
    this.fuerza = 3;
  }

  sayName() {
    console.log(this.nombre);
  }

  showStats() {
    console.log(
      `Nombre: ${this.nombre}, fuerza: ${this.fuerza}, velocidad:${this.velocidad}, salud:${this.salud}`
    );
  }

  drinkSake() {
    this.salud += 10;
  }
}

const newNinja = new Ninja("Renato", 50);
newNinja.sayName();
newNinja.drinkSake();
newNinja.showStats();
