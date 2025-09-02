import { Figure } from "./figure";

export class Rectangle extends Figure{
    override dibujar(){
        console.log("Dibujar Rectangle")
    }
    override borrar(){
        console.log("Borrar Rectangle")
    }
    override mover(){
        console.log("Mover Rectangle")
    }
    override eliminar(){
        console.log("Eliminar Rectangle")
    }
    override calcularArea(): void {
        
        let area:number = 0;

        if(this.x == 0 || this.y == 0){
            area = 0
        }
        else{
            area = Math.abs(this.x * this.y)
        }

        console.log(`El area es ${area}`)
    }
}