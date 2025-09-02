import { animals } from "./animals"

export class Dog{
    private sound:string
    private move:string

    constructor (
        sound:string = 'Guau', 
        move:string = 'El perro corre'){
        
        this.sound = sound,
        this.move = move
    }

    hacerSonido():void{
        console.log(this.sound)
    }

    moverse():void{
        console.log(this.move)
    }
}