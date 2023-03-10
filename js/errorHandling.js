const numbers = [1, 2, 3, 4];

try{
    const count = countOccurrences(null, 1);
    console.log(count);
}catch(e){
    console.log(e.message);
}


function countOccurrences(array, searchElement){
    if(!Array.isArray(array))
        throw new Error("Invalid argument");
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}