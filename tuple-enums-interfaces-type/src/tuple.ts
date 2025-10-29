//  Tuple : A tuple is like an array, but with 
// fixed number of elements
//  specific type for each position


let user : [string , number] = ["madhusudan" , 22] ; // user[0] → must be a string
 //                                                     user[1] → must be a number

console.log(user) ;

//  tuple with type annotation 

type employee =  [string , number, string?] ; // so string? is optional ==> first we should write
                                            // the required types then optional types field
const e1 : employee = ["madhu" ,22 , "sde"] ;
const e2 : employee = ["raghav" , 25 , "developer"] ;

console.log(e1) ;

// Using push (be careful!)
// Even though tuples have fixed length, TypeScript still allows push().

let role: [string, number] = ["Admin", 1];
role.push("Extra"); // allowed 😐


//👉 But this is discouraged — tuples are meant to have a fixed shape.

// Create a tuple Car with [brand: string, model: string, year: number].
//Try to print all values.

type Car = [brand: string , model: string , year: number] ;

let c1 : Car = ["Tesla" , "ev" , 2022] ;
let c2 : Car = ["Ford" , "racing" , 2019] ;

console.log(c1) ;


// Create a tuple type Coordinate that can hold 2D and 3D points using rest elements.
// Example: [x, y] or [x, y, z].

type Dimension2 = [x:number , y:number] ;

type Dimension3 = [...Dimension2 , z:number] ;


let color: Dimension3 = [4,2,5] ;

console.log(color) ;

