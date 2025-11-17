{  
    
    
    type User = {
    id : number ; 
    name : string ; 
    email : string ;
    isActive : boolean ;
}

const filterActiveUsers = (users : User[]) : User[] => {
     users.forEach((user, idx) => {
        if(typeof user.id !== "number"){
            throw new Error(`Invalid data type in index ${idx}`)
        }
        else if(typeof user.name !== "string" || typeof user.email !== "string"){
            throw new Error(`Invalid data type in index ${idx}`)
        }
        else if(typeof user.isActive !== "boolean"){
            throw new Error(`Invalid data type in index ${idx}`)
        }
     } )

     return users.filter(user => user.isActive === true ) ; 
}

const users = [
  { id: 1, name: 'Rakib', email: 'rakib@example.com' , isActive: true },
  { id: 2, name: 'Asha', email: 'asha@example.com', isActive: false },
  { id: 3, name: 'Rumi', email: 'rumi@example.com', isActive: true },
];

console.log(filterActiveUsers(users));




}