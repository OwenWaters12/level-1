// var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
// for (var i=0; i < officeItems.length; i++){
//     if (officeItems === "computer"){
//         var count = 0;
//          count++
//         console.log(count)
//     }
// }
var furyRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]
for (var i=0; i < furyRoad.length; i++){
    if(furyRoad[i].age < 18){
        console.log(furyRoad[i].name + " is not old enough")
    }if(furyRoad[i].age >= 18){
        console.log(furyRoad[i].name + " is old enough")
    }
}