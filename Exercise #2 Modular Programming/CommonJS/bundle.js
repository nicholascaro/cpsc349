(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const {convertPersonArrayIntoMap} = require('./module')

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

    


},{"./module":2}],2:[function(require,module,exports){
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


},{}]},{},[1]);
