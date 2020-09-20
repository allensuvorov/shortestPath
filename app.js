// there are two steps to take
// step: *2
// step: -1
// input: x, y
// output: minimun steps from x to y

console.log(brokenDevice(3,10)); // 3
console.log(brokenDevice(2,3)); //-> 2 (*2, -1)
console.log(brokenDevice(5,8)); //-> 2 (-1, *2)
console.log(brokenDevice(3,8)); //-> 3 (-1, *2, *2)

function brokenDevice(x, y) {
    let ans = 0;
    // we will go backwards, from y to x
    while (y != x) {
        // console.log("y = ", y);
        if (y > x) {
            if (y%2 !== 0) {
                y += 1;
            } else {
                y /= 2;
            };
            ans +=1;
        };
        // if y is smaller it's simple 
        if (y < x) {
        y += 1;
        ans +=1;
        };
    };
    return ans;
};