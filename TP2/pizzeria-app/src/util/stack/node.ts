export class Node<T> {
    constructor(
        public siguiente:Node<T> | null,
        public elemento:T
    ){}
}