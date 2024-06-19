function mod2(number) {
    return number % 2 == 0;
}

function mod(x, y) {
    if (x == y) {
        return true;
    }

    if (x <= y) {
        return false;
    }

    else {
        return mod(x - y, y);
    }
}

console.log(mod2(10));
console.log(mod(200, 13));