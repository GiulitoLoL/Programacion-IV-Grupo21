import { Figure } from "./figure";

export class Triangulo extends Figure{
    override dibujar(){
        console.log("Dibujar Triangulo")
    }
    override borrar(){
        console.log("Borrar Triangulo")
    }
    override mover(){
        console.log("Mover Triangulo")
    }
    override eliminar(){
        console.log("Eliminar Triangulo")
    }
    override calcularArea(): void {
        
        let area:number = 0;

        if(this.x == 0 || this.y == 0){
            area = 0
        }
        else{
            area = Math.abs(this.x * this.y)
        }

        console.log(`El area es ${area/2}`)
    }
}