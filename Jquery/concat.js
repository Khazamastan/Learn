/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

var people = [
  {
    name : 'Shane'
  },
  {
    name : 'Sally'
  }
];
var people2 = [
  {
    name : 'Simon'
  },
  {
    name : 'Ben'
  }
];

people.concat(people2)
      .forEach(function(person){
               console.log(person.name);
       })
