
// Type Annotation means we assign types to the variable , function , objects explicitly

// string

let greet : string = "hello" ; // we can't assign greet as number

let num : number = 34 ; // it is for integer and floats

let  done : boolean = false ; // true or false 

let n : null = null ; // null value

let u : undefined = undefined ; // undefined 

let hey : any = "hello" // it actually disables type checking

let h : unknown = "hi" ; // safer alternative is any

// void  ===> Used for functions that don’t return anything
// without annotation ==> typescript can infer type

let arr: string[] = ["hello" , "madhusudan"] ; // array type 

let t: [string , number] = ["sudan" , 72] ; // tuple type
//  

console.log(t) ;

/* 
INTERVIEW Question 
What's the difference between any, unknown, and never types?

*/ 

