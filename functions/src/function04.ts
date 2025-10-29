/**
 * 
 * 8. Create an overloaded function joinValues(a, b): 
If both are numbers → return sum
If both are strings → return concatenated string
 */

function joinValues(a: number , b:number) : number ;
function joinValues(a: string , b: string ): string  ;

function joinValues(a:any , b: any) : any {
    return a+ b ;
}


let ans: any =  joinValues(3 , 4 ) ;
let ans2: any = joinValues("Hell" , " Love") ;


console.log(ans) ;
console.log(ans2) ;


// Type inference : 

// type inference the ability to infer types from certain value in your code 
// let x = 43 ; // x : number automatically infer
// you cant do x="hello" ; // gives error 