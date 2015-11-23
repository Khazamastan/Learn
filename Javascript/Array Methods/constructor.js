/* Using Constructor
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function Car(name,model,year){
  this.name = name;
  this.model = model;
  this.year  = year;
}

var mycar = new Car("Audi","Ts2","2015")

console.log(mycar);