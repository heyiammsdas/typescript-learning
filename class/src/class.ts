// A class is a blueprint for creating objects with properties (data) and methods (functions).


class Person {

    name : string  ; 
    age: number ;

    constructor(name: string , age: number) {
        this.name = name ;
        this.age = age ;
    }

    greet() {
        console.log(`Hi , I'm ${this.name} and I'm ${this.age} years old`) ;
    }

}


const p1 = new Person("Madhusudan" , 22) ;
console.log( p1) ;

p1.greet() ; 

/**
 * 
 * Access modifiers control visibility of class members.

Modifier	Accessible from Class	Subclass	Outside
public (default)	✅	             ✅     	✅
private          	✅	             ❌	    ❌
protected	        ✅	             ✅ 	    ❌
 * 
 */

// Getters and Setters (Encapsulation)


class Account {

    private _balance: number  = 0;

    get balance() {
        return this._balance ;
    }


    set balance(amount : number) {
        if(amount >= 0) this._balance = amount ;
        else {
            console.log("Invalid balance") ;
        }
    }
}

const a = new Account(); 

a.balance = 300 ;

console.log(a) ;

// Abstract classes define a common blueprint but cannot be directly instantiated.

abstract class Shape {

    constructor(public color:string) {

    }

    abstract area(): number ;  // abstract class must be implemented in derived class 

}

class Circle extends Shape {

    constructor( color: string , private radius : number) {
         super(color) ;
    } 
   

    area(){
        return parseFloat((Math.PI * this.radius ** 2).toFixed(2)) ;
    }


}


const s = new Circle("red" , 4) ;

console.log(s.area()) ;

// Inheritance 

// Method Over-riding