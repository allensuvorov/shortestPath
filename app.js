// there are two steps to take
// step: *2
// step: -1
// input: x, y
// output: minimun steps from x to y

console.log(brokenDevice(2,3)); //-> 2 (*2, -1)
console.log(brokenDevice(5,8)); //-> 2 (-1, *2)
console.log(brokenDevice(3,8)); //-> 3 (-1, *2, *2)
// 3*2=6
// 6*2=12
// -1 -1 -1 -1

// 3-1=2
// 2*2=4
// 4*2=8

// 2,4,8,16,32,64,128,256,512,1024

function brokenDevice(x, y) {
  let ans = 0;
  if (y === x) return ans;
  
  while (y != x) {
    
    if (y > x) {
      x *= 2;
      ans +=1;
    };

    // if y is smaller it's simple 
    if (y < x) {
      x -= 1;
      ans +=1;
    };
  };
  return ans;
};