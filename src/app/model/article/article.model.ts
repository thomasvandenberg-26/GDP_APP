export class Article {

    id: number;
    price: number;
    title: string;
    quantity: number;
    description: string;

    constructor(id : number, price: number, title: string, quantity: number, description: string){

      this.id = id;
      this.price = price;
      this.title = title;
      this.quantity = quantity;
      this.description = description;
    }

}
