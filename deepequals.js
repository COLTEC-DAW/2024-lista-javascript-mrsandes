function deepEquals(obj1, obj2) {
    let keys1 = Object.keys(obj1);
    let keys2 = Object.keys(obj2);

    return keys1.length === keys2.length && keys1.every((element, index) => element === keys2[index]);
}

let obj1 = {
    a: 1,
    b: 2,
    c: 3
}

let obj2 = {
    a: 1,
    b: 2,
    c: 3
}

let obj3 = {
    b: 2,
    c: 3,
    d: 4
}

console.log(deepEquals(obj1, obj2));
console.log(deepEquals(obj1, obj3));