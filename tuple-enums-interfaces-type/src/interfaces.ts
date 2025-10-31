
// Interface in typescript is defined as a keyword and describes shape of an object , including
// its properties and its type


interface User {

    id: number , 
    name : string ,
    passward: string | number ;
    email?: string  // Optional Properties: Use ? to indicate properties that are not required.

} 

const user1 : User = {
    id: 23445 ,
    name: "arunava" ,
    passward: "hello" 
}
console.log(user1.name) ; //  arunava 

//  array in the interface 

interface Book {
    name: string ,
    author: string[] , // [string] ==> a tuple does not mean array of string 
    price: number ,
    year: number  
}
let book1 : Book =  {
    name : "Life Long" ,
    author:["Madhusudan" , "Tanu" , "Kiara"] ,
    price: 500,
    year : 2025
}
console.log(book1) ;


// Why Use extends with Interfaces?
//Sometimes, one interface is a specialized version of another — 
//it includes all properties of the base interface plus some new ones.


interface Person {
    name: string ,
    age: number 
}


interface Employee extends Person {    // Employee has all properties of Person with 
                                       // some additional properties
    id: number ,
    department: string
}



const emp : Employee = {
    name: "Raghav" , 
    age: 25 ,
    department: "HR" ,
    id: 4322 
    
}

console.log(emp) ;


/**
 * 
 * 
 *  | Feature                          | **Interface**                   | **Type**                  |
| -------------------------------- | ------------------------------- | ------------------------- |
| **Syntax**                       | `interface Name {}`             | `type Name = {}`          |
| **Extending**                    | `extends` keyword               | `&` intersection          |
| **Merging**                      | ✅ Yes                           | ❌ No                      |
| **Unions / Primitives / Tuples** | ❌ No                            | ✅ Yes                     |
| **Use with Classes**             | ✅ Common                        | ⚙️ Possible but less used |
| **Performance**                  | Slightly better at compile-time | Similar in most cases     |
| **Preferred For**                | Object shapes, APIs             | Complex type combinations |

 * 
 */


// Merging 


interface Yoyo {
    name : string 
}



interface Yoyo {
    age: number 
}



let user2 : Yoyo  = {
    name: "Sumit" ,
    age: 21
}


// But for type  , merging does not work 


// In type for combining something we use intersection & 


type Gentleman = {name : string , age:number } & {experience:number } ;

let man : Gentleman = {
    name : "Narendra" ,
    age: 56 ,
    experience: 30 
}


console.log(man) ;