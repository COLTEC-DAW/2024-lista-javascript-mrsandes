function range(min, max, i) {
    let array = [];

    for (let index = min; index <= max; index += i) {
        array.push(index);        
    }

    return array;
}

console.log(range(21, 79, 8));