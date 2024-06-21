// // Corrected code snippet

// // A Promise is an object representing the eventual completion or failure of an asynchronous operation and its resulting value.
// // It has 3 states: pending, fulfilled, rejected, and settled is a term used to describe either fulfilled or rejected state.
// console.log('start');
// const pr = new Promise((resolve, reject) => {
//     // Your asynchronous operation code goes here...

//     let flag = true;
//     if (flag===true) {
//         setTimeout(()=>{
//         resolve(['apple', 'banana', ])
//         }, 4000);
//     } else {
//         reject('not done');
//     }
//     console.log('mid');
// });
// setTimeout(()=>{
//     console.log('done');
// }, 4000);

// pr.then((val) => {
//     console.log(val);
// }).catch((error) => {
//     console.log(error);
// });
// console.log('end');

// Corrected code snippet
// let cnt = 0;
// let id;
// const cb = () => {
//     cnt++;
//     console.log('done', cnt);
//     if (cnt === 5) {
//         clearInterval(id);
//     }
// }; 
// const time = 1000;

// id = setInterval(cb, time); 
// Corrected the placement of parentheses

// const arr=["apple","banana","cherry"];
// console.log(arr);
// arr.splice(1,0,"mango");

// difrrence between for each and map fuction is
// for each is used to iterate over an array and perform some operation on each element of the array.
// map function is used to iterate over an array and perform some operation on each element of the array and return the new array.

const arr=["0",1,2,3,4];
const res=arr.reduce((a,b,c)=>{
    console.log(a,b,c);
    return a;
});

const res2=arr.filter(a,b,c)=>{
    console.log
}

//code for map
const res=arr.map((a,b,c)=>{
    console.log(a,b,c);
    return a;
});
console.log(res);

//code for filter
const res1=arr.filter((a,b,c)=>{
    console.log(a,b,c);
    return a;
}); 
console.log(res1);  

//code for reduce
