
// In TypeScript, objects store key-value pairs, 
// and an object type describes the shape of that object.

let person : {
    name: string ,
    age: number ,
    gender?: string  // ?: ===> used for if we need optional key
    readonly date: number // Use readonly to make properties immutable (can’t be changed)
}

person = {
    name:"Suman"  ,
    age: 22, 
    gender: "male",   // it is optional .. if i dont include this , compiler does not give error
    date:20012003
}


console.log(person.date) ;

//You can use object types directly inside function parameters.

function printBooks(book: {name:string , author:string}) : void{
  
    console.log(`Book ${book.name}   Author: ${book.author} `) ;

}


printBooks({name:"C++" , author:"Cormann"}) ;

// Type 


type Product = {                 // creation of custom types

    readonly id: number ,
    name:string ,
    price: number ,
    discount?: number ,
    getFinalPrice() : number



}

const item : Product  =  {
    id:101 ,
    name:"Tshirt" ,
    price:500 ,
    discount:10 ,
    getFinalPrice() {
        return this.price - (this.discount ?? 0) ;
    }
}


console.log(item.getFinalPrice()) ;


