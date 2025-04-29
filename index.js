//Increasing the salary of developers by 10%
function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
}

let employeeList = [
  new Employee("Adeday", "Product_Manager", 200300),
  new Employee("Karen", "Developer", 80050),
  new Employee("Helen", "UX Researcher", 80050),
  new Employee("Fiona", "Developer", 95000),
  new Employee("Mercyline", "CTO", 5000000)
];

employeeList.forEach(employee => {
  if (employee.position === "Developer") {
    employee.salary = employee.salary * 1.10;
  }

})
console.log((employeeList));

//Array of products in stock
function inStockCheck(products) {
  let inStockProducts = products.filter(product => product.inStock);
  inStockProducts.sort((a, b) => a.price - b.price);
  return inStockProducts
}

let products = [
  {
    clothing: "skirts",
    price: 5000,
    inStock: true
  },
  {
    clothing: "pants",
    price: 10000,
    inStock: false
  },
  {
    clothing: "top",
    price: 3000,
    inStock: false
  },
  {
    clothing: "jackets",
    price: 15000,
    inStock: true
  }
]

let inStockProductsSorted = inStockCheck(products);
console.log("The products that are instock are: ", inStockProductsSorted);
console.log('');



// Finding the average of students and grading it
let studentsScore={
  Pheobe: [90, 78, 60, 89],
  Tirsit: [98, 54, 20, 78],
  Meron: [89, 100, 43, 97],
  Mercyline: [70, 40, 10, 30]
}

function gradeStudents(studentsScore){
  let studentScore;
  for (studentScore in studentsScore){
    let scores = studentsScore[studentScore];
    let sum = scores.reduce((sum, score)=> sum + score, 0);
    let ave = sum/scores.length;
    if(ave>70){
      console.log('Pass');

    }
  else{
    console.log('Fail');
  }    
      }
}

gradeStudents(studentsScore)

console.log("");
//Active Users

function User(username, email, isActive){
  this.username = username;
  this.email=email;
  this.isActive = isActive
}

let users = [
  new User("LoveLace", "lovelace@email.com", true),
  new User("Coooper", "cooper@gmail.com", false),
  new User("Kay", "kay@gmail.com", true),
  new User("Hejlis", "heljis@email.com", true)
]

function activeUsers(){
    users.forEach(user => {
      if (user.isActive) {
          console.log(user.username);
      }
  });
}
activeUsers(users)
console.log("");
//Destination

function destinationCheck(destinations, maxDistance, budget){

  let affordableFlight = destinations.filter(destination=>
     destination.distance <= maxDistance && destination.budgetRequired<=budget) 
     if (affordableFlight.length ===0){

      return "No flights availavle in your budget within the distance."
     }
     else{
      return affordableFlight
     }
}
let destinations = [
  {name: "Mekelle", distance: 80000, budgetRequired: 70000},
  {name: "Mombasa", distance: 20000, budgetRequired: 20000},
  {name: "Capetown", distance: 100000, budgetRequired: 100000}
]

let maxDistance = 100000;
let budget = 70000;


let affordableFlight = destinationCheck(destinations, maxDistance, budget)
console.log(affordableFlight);


