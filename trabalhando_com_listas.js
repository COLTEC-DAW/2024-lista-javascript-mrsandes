function toList(array) {
    let list = {
        value: array[0],
        rest: null
    };

    let node = list;

    for (let i = 1; i < array.length; i++) {
        node.rest = {
            value: array[i],
            rest: null
        }

        node = node.rest;
    }

    return list;
}

console.log(toList([1, 2, 3, 4]));