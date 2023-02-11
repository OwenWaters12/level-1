function Employee(name, jobTitle, salery, status){
    this.name = name
    this.jobTitle = jobTitle
    this.salery = salery
    this.status = status
}

let employees = []

let employee1 = new Employee("Jeff", "cook", "$23 hr", "full time")
employees.unshift(employee1)

let employee2 = new Employee("Susan", "host", "$20 hr", "full time")
employees.unshift(employee2)

let employee3 = new Employee("jenn", "dishwasher", "$15", "part time")
employees.unshift(employee3)

console.log(employees)