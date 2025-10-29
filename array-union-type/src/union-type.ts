
// Union types allow variables to hold values of multiple types


let value : string | number  = "hello" ;

value = 76 ;


// Union with array 

let data : (string | number)[] = ["shrj" ,54] ;

console.log(data) ;

// Write a function display that accepts either a string or an array of strings.
// If it’s a string, print "Single: <string>".
// If it’s an array, print "Multiple:" followed by all strings.


function display(value: string | string[]): void {

    if(typeof value === "string") {
        console.log(`Single: ${value}`) ;
    }
    else {
        console.log(`Multiple: ${value}` ) ;
    }


}


display(["hello" , "welcome"]) ;