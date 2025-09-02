export abstract class Figure {
    constructor(
        private _x = 0, 
        private _y = 0
    ){}

    get x(){ 
        return this._x; 
    } 
    set x(v: number){ 
        this._x = v; 
    }

    get y(){ 
        return this._y; 
    } 
    set y(v: number){ 
        this._y = v; 
    }

    abstract dibujar(): void;
    abstract borrar(): void;
    abstract mover(): void;
    abstract eliminar(): void;
    abstract calcularArea():void;
}

