// const arr=require('./mymath.js');
// const res=arr[0](10,20);
// console.log(res);
// const res1=arr[1](10,20);
// console.log(res1);

// const [summ, mull] = require('./mymath.js');
// const res = summ(10, 20);
// console.log(res);
// const res1 = mull(10, 20);
// console.log(res1);

// const { sum, add2, sub } = require('./mymath.js');
// const res = sum(10, 20);
// console.log(res); // Expected output: 30
// const res1 = add2(10);
// console.log(res1); // Expected output: 12
// const res2 = sub(10, 20);
// console.log(res2); // Expected output: -10npm


const figlet = require('figlet');
figlet("sam", (err, data) => {
  if (err) { // Fixed syntax error by adding parentheses around condition
    console.log(err);
  } else { // Added else block to ensure data is logged only when there's no error
    console.log(data);
  }
});
