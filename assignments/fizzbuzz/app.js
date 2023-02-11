let arr=[]
for(let i=0; i<25; i++){
    arr.push(i)
    let mod = [i] % 3
    let mod2 = [i] % 5
    if(mod === 0){
        arr.push('fizz')
    }
    if(mod2 === 0){
        arr.push('buzz')
    }
    console.log(arr)
}

