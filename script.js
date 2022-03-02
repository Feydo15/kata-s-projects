
function great(name) {

    if(name === "" || name === undefined){
        return 'Hello World';
    }else{
        return "Hello, " + name[0].toUpperCase()+ name.substring(1).toLowerCase();
    }


   

   
}

console.log(great('feyDo'));
