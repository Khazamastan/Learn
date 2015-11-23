/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function CreateObject(name,email,phone){
    this.name = name;
    this.emai = email;
    this.phone = phone;
    this.address = "Hyderabad";
}

var newObj = new CreateObject("Khaja","khazamastan@gmail.com","720434");


function Company(name,email,phone){
    CreateObject.call(this);
    this.name = name;
    this.emai = email;
    this.phone = phone;
    this.companyName = "Thrymr";
}
    
var newObj = new Company("Khaja","khazamastan@gmail.com","720434");

console.log(newObj);

