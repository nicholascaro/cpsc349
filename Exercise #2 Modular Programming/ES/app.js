import { convertPersonArrayIntoMap } from './module.js'

class Person {
    constructor(first_name, last_name, dob){
        this.fName = first_name; 
        this.lName = last_name; 
        this.dob = dob
    }
}



let numOfPerson = parseInt(prompt("How many people objects would you like to add?", ) , 10);

    

const array = []
for (let i = 0; i < numOfPerson; i++){
    let fName = prompt("First Name? ", )
    let lName = prompt("Last Name? ", )
    let month  = prompt("Month you were born? ", )
    let day = prompt("Day you were born? ", )
    let year = prompt("Year you were born? ", )
    let dob = new Date('${month} ${day} ${year}')

    let person = new Person(fName, lName, dob); 
    array.push(person)

   
}
    
convertPersonArrayIntoMap(array)