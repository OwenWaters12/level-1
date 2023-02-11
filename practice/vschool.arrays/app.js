var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

vegetables.pop()
console.log(vegetables);

fruit.shift()
console.log(fruit);

var orangeIndex = fruit.indexOf("orange")
fruit.push(orangeIndex)
console.log(orangeIndex);

var vegCount = vegetables.length
vegetables.push(vegCount)

var food = fruit.concat(vegetables)
console.log(food)

var cut = food.splice(4, 2)

food.reverse()

food.join()
