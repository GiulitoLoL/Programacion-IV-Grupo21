"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dog = void 0;
class Dog {
    constructor(sound = 'Guau', move = 'El perro corre') {
        this.sound = sound,
            this.move = move;
    }
    hacerSonido() {
        console.log(this.sound);
    }
    moverse() {
        console.log(this.move);
    }
}
exports.Dog = Dog;
//# sourceMappingURL=dog.js.map