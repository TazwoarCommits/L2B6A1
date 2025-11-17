{

 class Person  {
    name : string ;
    age : number ;

    constructor(name : string , age : number){
        this.name = name ;
        this.age = age ; 
    }

     getDetails(){
        if(typeof this.name !== "string" || typeof this.age !== "number"){
            throw new Error ("Invalid Data Type") ;
        }
        return (`'Name : ${this.name} , Age : ${this.age}'`)
     }
}


const person1 = new Person('John Doe', 30.0);
console.log(person1.getDetails());

const person2 = new Person('Alice', 25.0);
console.log(person2.getDetails());

}