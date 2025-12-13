// Type Assersion
// Type assertion tells TypeScript : 
// 👍Trust me !! I know the actual type of this value 
/*
Why do we need type assertion?

TypeScript sometimes cannot infer the correct type, especially when:
i)Using any or unknown
ii)Working with DOM elements
iii)Parsing JSON
iv)Handling external data (API response)

*/
// Example 1

let response : any = "42" ;

let len = (response as string).length ; // This is type assertion 

console.log(len) ;

// Example 2 

type Book = {
    name: string ,
    author: string ,
    price: number
} 

let Mybook : string  = '{"name" : "Lies cannot Flies" , "author" : "Madhusudan Das" , "price": 500}' ;

let bookObj = JSON.parse(Mybook) as Book ;

console.log(bookObj.name) ;






