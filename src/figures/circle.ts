import { Figure } from "./figure";

export class Circle extends Figure{
    override dibujar(){
        console.log("Dibujar Circle")
    }
    override borrar(){
        console.log("Borrar Circle")
    }
    override mover(){
        console.log("Mover Circle")
    }
    override eliminar(){
        console.log("Eliminar Circle")
    }
    override calcularArea(): void {
        
        let radio:number = 0;
        const pi:number = 3.14;

        if(this.y == 0){
            radio = 0
        }
        else{
            radio = Math.abs(0 + this.y)
        }

        console.log(`El area es ${Math.round((radio*pi)*100)/100}`)
    }
}