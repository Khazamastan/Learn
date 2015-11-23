/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */



function makeIterator(array){
  var nextIndex = 0 ;
  
  return {
  next: function(){
           return nextIndex < array.length ?
               {value: array[nextIndex++], done: false} :
               {done: true};
       }
  }
}


var it = makeIterator(["Yo","Ya"]);

console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().done);