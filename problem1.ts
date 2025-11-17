

{


 const formatValue =  (val : string | number | boolean) : string | number | boolean => {
   if(typeof val === "string"){
        return val.toUpperCase() ;
     }
     else if (typeof val === "number") {
        return val * 10 ; 
     } 
     else if (typeof val === "boolean") {
        return !val ;
     }
     else {
        throw new Error (`${val} has invalid data type`)
     }
 }


 
}




