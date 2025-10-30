// Enum (enumeration) is a way to give names to a set of contants

// Numbercal enums ==> default

enum Direction {
    Up , // 0
    Down ,  // 1
    Right ,//2
    Left   // 3

}


console.log(Direction.Left) ;

// Real-World Use Cases

// Api response 

enum ApiStatus {
    Success =  200 ,
    NotFound = 404 ,
    ServerError = 500 
    
}

function handleApi(status : ApiStatus) {

    if(status === ApiStatus.Success) {
        console.log("Request successful") ;
         
    }

    else if(status === ApiStatus.NotFound) {
        console.log("404 Error") ;
    }

    else {
        console.log("Server error") ;
    }


}

handleApi(200) ;

// Role-Based Access Control

enum Role {
    Admin = "ADMIN" ,
    Editor ="EDITOR" ,
    Viewer = "VIEWER"
}

function hasPermission(userRole: Role) : boolean{

    if(userRole === Role.Admin  || userRole === Role.Editor  ) {
        return true ;
    }
    else {
        return false ;
    }
}
console.log(hasPermission(Role.Admin)) ;


