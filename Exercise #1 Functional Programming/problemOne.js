// create a person object 
// put person objects in an array 
// convert array of person to map

class Person {
    constructor(first_name, last_name, age){
        this.fName = first_name; 
        this.lName = last_name; 
        this.age = age; 
    }
}

let p1 = new Person("Tom", "Brady", 44)
let p2 = new Person ("Eli", "Manning", 41)
let p3 = new Person ("Peyton", "Manning", 50)
let p4 = new Person ("Mario", "Lopez", 39)
let p5 = new Person ("Jennifer", "Lopez", 50)
let p6 = new Person ("George", "Lopez", 59)

const array = []

array.push(p1)
array.push(p2)
array.push(p3)
array.push(p4)
array.push(p5)
array.push(p6)


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

convertPersonArrayIntoMap(array)

