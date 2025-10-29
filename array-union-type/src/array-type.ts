
// There are two types of syntax -- 
// method 1 : number[]    method 2 : Array<number> 

// create a array of string of fruits  ==> array ==> to store multiple data 

let fruits: string[] = ["mango" , "jackfruit"] ;

fruits.push("papaya") ; // add at the end
fruits.pop() ; // remove from the end

fruits.unshift("guava") ; // add at the start 
fruits.shift() ; // remove from the start

console.log(fruits) ;



/**   --------------------------------------------------------- */

/**
     * Create a type Book with title, author, and price.
     Then create an array of books and 
    print the titles of all books whose price is more than 500.
 */

    type Book  = {
        title:string ,
        author: string ,
        price:number
    }  


    let books : Book[] = [
        {
            title:"C++" ,
            author:"Robert" ,
            price:300
        } ,
        {
             title:"Computer Network" ,
            author:"Robert" ,
            price:600
        },
        {
             title:"Money" ,
            author:"Raj" ,
            price:400
        } ,
        {
             title:"Operating System" ,
            author:"Josh" ,
            price:800
        }
    ]


    let expensive : Book[] = books.filter(b => b.price > 500) ;

    console.log(expensive) ;

