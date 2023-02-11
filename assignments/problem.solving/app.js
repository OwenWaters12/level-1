let max = [0]
const arr1 = [6, 13, 250, 3]
const arr2 = [3, 5, 2, 8, 1]
const arr3 = [-13, 40, 3, 0, 19, 22]
for(let i=0; i < arr1.length; i++){
    if([i] > max){
    max = [i]
    }
    if([i] < max){
        continue
    }
}
console.log(max)