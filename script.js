function countStep(num){
    let count = 0
    while (num > 0){
        if(num % 2 === 0){
            count += 1
            num = num/2
        } else if (num % 2 === 1){
            count += 1
            num -= 1
        } 
    }
    return count
}