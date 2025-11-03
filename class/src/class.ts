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
// Inheritance allows one class (child) to extend another (parent) 
// and reuse its properties and methods.
// Using super() Keyword

class Animal {

    papa: string  ;

    constructor( papa: string) {
        this.papa = papa ;
    }

    move(): void {
        console.log(`${this.papa} is moving...`) ;
    }


}


class Dog extends Animal {

    bark(): void {
        console.log(`${this.papa} : woff woff`) ;
    }

}

class Bird extends Animal {

    canfly: boolean ;
    constructor(name: string , canfly: boolean) {

        super(name) ;

        this.canfly = canfly ;


    }

    fly() : void {

        if(this.canfly) {
            console.log(`${this.papa} can fly`) ;
        }

        else {
            console.log(`${this.papa} cannot fly but can walk`) ;
        }
    }


}

const d = new Dog("pinky") ;

const f = new Bird("parrot" , true) ;

f.fly() ;
f.move() ;


// Method Over-riding
// TypeScript doesn’t support true runtime method overloading like Java or C++.
 // But it supports function signature overloading — multiple signatures for the same method.

 class Calculator {
  add(a: number, b: number): number;
  add(a: string, b: string): string;

  add(a: any, b: any): any {
    return a + b;
  }
}

const calc = new Calculator();
console.log(calc.add(10, 20));     // 30
console.log(calc.add("Hello, ", "World!")); // "Hello, World!"
