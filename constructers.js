//Default constructer
function Employee(){
  this.name="Mohan";
  this.designation= "fsd";
  this.age= "24";
  this.salary="10Lpa"
  
}
let employee1 =new Employee()
console.log(employee1.name)
console.log(employee1.age)
console.log(employee1.salary)
console.log(employee1.designation)

//Parameterized constructer

class Employee {
  constructor(name, age,designation,salary) {
  this.name = name;
  this.age = age;
  this.designation=designation;
  this.salary=salary
  }
}
const employee2 = new Employee("mohan",25,"Fsd","10Lpa");

console.log("Employee name: " + employee2.name);
console.log("Age: " + employee2.age);
console.log("designation: " + employee2.designation);
console.log("salary: " + employee2.salary);
