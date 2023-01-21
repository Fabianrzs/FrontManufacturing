export class Product {
    constructor(name: string) {
        this.name = name;
    }
    name: string;
    id: string | undefined;
    state: number | undefined;
}
