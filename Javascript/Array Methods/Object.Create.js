/*
 * This is a JavaScript Scratchpad.
 *
 * Enter some JavaScript, then Right Click or choose from the Execute Menu:
 * 1. Run to evaluate the selected text (Ctrl+R),
 * 2. Inspect to bring up an Object Inspector on the result (Ctrl+I), or,
 * 3. Display to insert the result in a comment after the selection. (Ctrl+L)
 */

function Employee() {
  this.name = "Hi";
  this.dept = "general";
}

function Manager() {
  Employee.call(this);
  this.reports = [];
}
Manager.prototype = Object.create(Employee.prototype);

function WorkerBee() {
  Employee.call(this);
  this.projects = [];
}
WorkerBee.prototype = Object.create(Employee.prototype);

var managerObj = new Manager();
var WorkbeeObj = new WorkerBee();
console.log(managerObj)
console.log(WorkbeeObj)


// SalesPerson && Engineer

function SalesPerson(){
  WorkerBee.call(this);
  this.dept = "sales";
  this.quota = 100;
}

SalesPerson.prototype = Object.create(WorkerBee.prototype);

function Engineer(){
    WorkerBee.call(this);
    this.dept = "Engineer";
    this.machine = "";
}
 
Engineer.prototype = Object.create(WorkerBee.prototype);


var SalesPersonObj = new SalesPerson();
var EngineerObj = new Engineer();
console.log(SalesPersonObj)
console.log(EngineerObj)

/*
Exception: ReferenceError: Workbee is not defined
@Scratchpad/10:41:1
*/
/*
Exception: ReferenceError: Workerbee is not defined
@Scratchpad/10:41:1
*/
/*
Exception: ReferenceError: Workerbee is not defined
@Scratchpad/10:41:1
*/
/*
Exception: TypeError: Object.Create is not a function
@Scratchpad/10:41:25
*/