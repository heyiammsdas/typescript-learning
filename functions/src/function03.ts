
/* 
Write an arrow function cube that returns the cube of a number.
Write a function expression isEven that returns true if a number is even.
*/

const cube = (num: number) : number => {

    return num*num*num ;
}

let ans: number = cube(4) ;

console.log(ans) ;


//-------------- -- ---- --- 


const isEven = (num: number): boolean =>  {

 if(num%2 ==0 ) {
    return true ;
 }
 else return false ;


}

console.log(isEven(5)) ;


