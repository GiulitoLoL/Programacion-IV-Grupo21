export interface Stack {
    
    push(value:number):void;
    top():number;
    pop():number;
    size():number;
    isEmpty():boolean;
}