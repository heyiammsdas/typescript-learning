/**
 * 
  Concept	                 Simple Explanation
   
  Generic                   	A type placeholder
   <T>	                     "I'll work with whatever type you give me"
  Benefit	                 Write flexible code that's still type-safe
 
 */


  // Why use generics???

  /**
   * 
   * Reusability  : write once and use in many types
   * 
   * Type safety: still catches error at compile time 
   * 
   * better that 'any' : incase of any , it losses all type information
   * 
   */

//   let  hel: string = "hello" ;
//    console.log(hel.toUpperCase()) ;

//   function Identity(input : any) : any {
//     return input.toUppercase() ;
//   } 
//   Identity('hello') ;
// It will give error ===> the function loses the information of the input type



// so generics comes into picture 


function Identity<Type> (input: Type) : Type{
    if(typeof input ==='string' ) {
     let ans : Type = (input as string).toUpperCase() as Type;
     return  ans;
    }

    return input ;

}


console.log(Identity('jessy')) ;



// Multiple Generics 

function generateArray<T , K > (input1: T , input2 : K) : [T , K] {

    return [input1 , input2] ;


}

console.log(generateArray('hello' , 67)) ;




