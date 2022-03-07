function convertPersonArrayIntoMap (pArray){
    const SET =  new Set() 
    const MAP = new Map()

    // create a set of last names from pArray
    pArray.forEach(function(x){
        SET.add(x.lName)
    })

    // set key to last name and value as obejcts with that last name
    SET.forEach(function(lastName){
        MAP.set(lastName, pArray.filter(function(person){
            return person.lName == lastName
        }))
    })  

    
    // iterate through MAP to check 
    for (const [key, value] of MAP.entries()) {
        console.log(key, value);
      }
}

module.exports = {convertPersonArrayIntoMap}

