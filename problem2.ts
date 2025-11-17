
{

   const getLength = (val : string | any[]  ) : number => {
   if(typeof val === "string") {
        return val.length ;
    } 
    else if (Array.isArray(val)) {
        return val.length ;
    } else {
        throw new Error (`${val} has invalid data type`)
    }
}











}

