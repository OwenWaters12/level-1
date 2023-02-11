const readline = require("readline-sync");
const name = readline.question("What is your name? ");
const prompt = readline.question(`${name} you are stuck in a room find the key and open the door to escape!`)
// var options = readline.question("Where would you like to look? 1. Under the table. 2. In the cabinet. 3. Under the rug. 4. Behind the picture on the wall. ")

let run = true
while(run === true){
   var options = readline.question("Where would you like to look? 1. Under the table. 2. In the cabinet. 3. Under the rug. 4. Behind the picture on the wall. ")
   
   console.log({options})
   
   if(options === '1'){
        table()
    }if(options === '2'){
        table()
    }if(options === '3'){
        rug()
    }if(options === '4'){
        picture()
    }

function table(){
   var option3 = readline.question("AH the key is not there! Where would you like to look next? 1. Under the table. 2. In the cabinet. 3. Under the rug. 4. Behind the picture on the wall. ")
    if(option3 === '1'){
        table()
    }if(option3 === '2'){
        table()
    }if(option3 === '3'){
        rug()
    }if(option3 === '4'){
        picture()
     }

}
function rug(){
    readline.question("CONGRATULATIONS!! You found the key! Open the door to leave!")
    }
function picture(){
    var hole = readline.question("There is a hole in the wall behind the picture! Do you wan to reach in and check? 1. yes 2. no ") 
    if(hole === '1'){
            readline.question("AHH the wall goblin got you! GAME OVER! ")
    }
    if(hole === '2'){
        question()
    }
    }
    if(hole === '1'){
        run = false
    }
    function question(){
       const option2 = readline.question("Good choice! Where would you like to look next? 1. Under the table. 2. In the cabinet. 3. Under the rug. ")
        if(option2 === '1'){
            table()
        }if(option2 === '2'){
            table()
        }if(option2=== '3'){
            rug()
     }
}
}
// switch(options){
//     case 1,2 : var notThere = readline.question("AH the key is not there! Where would you like to look next? 1. Under the table. 2. In the cabinet. 3. Under the rug. 4. Behind the picture on the wall. ")
//     break;
//     case 3: readline.question("CONGRATULATIONS!! You found the key! Open the door to leave!")
//     break;
//     case 4: var hole = readline.question("There is a hole in the wall behind the picture! Do you wan to reach in and check? 1. yes 2. no ")
//     break;
// }
    
// switch(notThere){
//     case 1,2: readline.question("OH NO! The key is not there! where would you like to look next? 1. Under the table. 2. In the cabinet. 3. Under the rug. 4. Behind the picture on the wall. ")
//     break;
//     case 3: readline.question("CONGRATULATIONS!! You found the key! Open the door to leave!")
//     break;
//     case 4: var hole = readline.question("There is a hole in the wall behind the picture! Do you wan to reach in and check? 1. yes 2. no ")
//     break;
// }
// switch(hole){
//     case 1: var gameOver = readline.question("AHH the wall goblin got you! GAME OVER! ")
//     break;
//     case 2: var noHole = readline.question("Good choice! Were do you want to look next? 1. Under the table. 2. In the cabinet. 3. Under the rug. 4. Behind the picture on the wall. ")
//     break;
// }
// if(options, notThere, noKey, noHole === 1,2){
//     var notThere = ()=> { readline.question("AH the key is not there! Where would you like to look next? 1. Under the table. 2. In the cabinet. 3. Under the rug. 4. Behind the picture on the wall. ")
// toggle(notThere)}
// if(options, notThere, noKey, noHole === 3){
//     var win = () => {readline.question("CONGRATULATIONS!! You found the key! Open the door to leave!")
//     toggle(win)}
// }if(options, notThere, noKey, noHole === 4){
//     var hole = () => {readline.question("There is a hole in the wall behind the picture! Do you wan to reach in and check? 1. yes 2. no ")
//     toggle(hole)}
// }if(hole === 1){
//     var gameOver = readline.question("AHH the wall goblin got you! GAME OVER! ")
//     toggle(gameOver)}
// if(hole === 2){
//    var noHole = readline.question("Good choice! Were do you want to look next? 1. Under the table. 2. In the cabinet. 3. Under the rug. 4. Behind the picture on the wall. ")
// }
// const noKey = () => {
//     readline.question("The key is not there! Where would you like to look next? 1. Under the table. 2. In the cabinet. 3. Under the rug. 4. Behind the picture on the wall. ")
