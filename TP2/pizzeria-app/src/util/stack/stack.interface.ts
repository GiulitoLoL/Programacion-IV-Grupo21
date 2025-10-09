export interface Stack<T> {    
    push(value:T):void;
    top():T;
    pop():T;
    size():number;
    isEmpty():boolean;
}