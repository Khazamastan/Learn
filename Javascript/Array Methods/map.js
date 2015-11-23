/* forEach is used to execute callback function on all elements of the array
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */


var myArray = ["One","Two","Three"];

var newArray = myArray.map(function(element){
  return element.toUpperCase();
});
console.log(myArray)
console.log(newArray)