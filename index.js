var Person = function(fname , lname){
    this.FirstName = fname;
    this.LastName = lname;
}

var ankit = new Person("ankit" , "goel");
var darshan = new Person("Darshan" , "Marathe");

delete ankit.FirstName;
ankit["Age"] = 32;
darshan.MiddleName  =  "Narayan";

// console.log(ankit);
// console.log(darshan);

// console.log(darshan["LastName"]);



var AJAX = function(data , onComplete , onError){

    if(data == null || data == undefined){
        onError({err : "What the fuck"});
        return;
    }
    setTimeout(function(){ 
        
        data.status  = "Processed";
        onComplete(data);

    } , 2000);


}


function ONAJAXCOMPLETE(data){
    console.log(data);
}

function ONAJAXERROR(err){
    console.log(err);
}

AJAX(null , ONAJAXCOMPLETE , ONAJAXERROR );
AJAX(ankit , ONAJAXCOMPLETE , ONAJAXERROR );
AJAX(darshan , function(data){
        console.log(data);
} , function(err){

})

