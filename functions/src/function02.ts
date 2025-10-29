

// Create a function subtract(a: number, b: number) that returns the difference.

function subtract(a: number , b:number) : number {

    return a-b ;

}

let ans : number = subtract(7,4) ;

console.log(ans) ;


/* 
Write a function sayHi(name: string, age: number) that prints
"Hi <name>, you are <age> years old!".
*/


function sayHi(name: string , age: number) : void{

    console.log(`Hi ${name} , you are ${age} years old!`) ; 


}


sayHi("Madhusudan" , 22) ;



// To run this :::: command line 

// npx tsc src/function02.ts  

// node function02.js


