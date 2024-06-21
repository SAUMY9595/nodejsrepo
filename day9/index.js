// const student={
//     name:'sam',
//    rollno:'22212',
//    city:'Helsinki',
// }

// const{name}=student;

// // console.log(name);///it is destucturing of object

// const fruits=['apple','banana','mango','orange'];
// // console.log(fruits[0]);

// const []=fruits;

// //const [i1,i2]=fruits;
// //console.log(i1);///it is destructuring of array

// // if we want to skip any element then we can use ,,,,
// const [ , i5, ]=fruits;
// console.log(i5);///it will print banana


// const student = {
//     name: 'sam',
//     rollno: '22212',
//     city: 'Helsinki',
//     hobbies: ['reading', 'writing', 'coding'],
// };

// // Correct way to modify the original object's `hobbies` array
// student.hobbies[0] = 'singing';

// // Destructuring after the modification
// const { hobbies } = student;

// console.log(hobbies); // This will log the updated hobbies array: ['singing', 'writing', 'coding']
// console.log(student); // This will show the student object with the updated hobbies array

// rest---> to pack the values
// spread---> to unpack the values

// const s1 = {
//     name: 'sam',
//     rollno: '22212',
//     city: 'Helsinki',
//     hobbies: ['reading', 'writing', 'coding'],
// };

// //const s2 = s1; // Corrected from s1 to student

// //if we want to modify the object then we can use the spread operator
// const s2 = { ...s1 }; // This will create a new object with the same properties as s1
// s2.hobbies[0] = 'singing'; // This will modify the hobbies array of the new object in both objects because the array is 
// //shared between both objects
// s2.name = 'john';
// console.log(s1); // This will output the modified object
// console.log(s2); // This will output the same modified object as both variables refer to the same object


//question  

// Sum() //---> 0
// Sum(10) //---> 10
// Sum(10,20) //---> 30
// Sum(10,20,30) //---> 60
// Sum(1,2,10,4) //---> 17

// const arr=[1,2,3,4,5,6,7,8,9,10];
// const sum=arr.reduce((acc,a,b,c)=>{
//     console.log(acc,a,b,c);
//     const res=(a+b);
//     return res;
// })
// console.log(sum);



 function Sum(...arr){
        // let sum=0;
        // console.log(arr);
        // for(let i=0;i<arr.length;i++){
        //     sum+=arr[i];
        // }
        // return sum;
        
        //rest operator 
        // const res=arr.reduce((acc,arr)=>acc+arr);
        // console.log(res);

       const res=arr.reduce((acc,arr,idx)=>{
        console.log(acc,arr,idx);
        return acc+arr;
       },-1);
       
        
        // arr.reduce((acc,a,b,c)=>{
        //     console.log(acc,a,b,c);
        // })
    }
 Sum(3,4,7,8);
 Sum(1,3,4,8);

Sum(10);
Sum(10,20);
Sum(10,20,30);
Sum(1,2,10,4);


// what is asyn function
//An async function in JavaScript is a function that is declared with the async keyword, and the await keyword is permitted within them.
// The async keyword enables asynchronous, promise-based behavior to be written in a cleaner style, 
//avoiding the need to explicitly configure promise chains. async functions return a promise. If the function returns a value, 
//the promise will be resolved with that value. If the function throws an exception, the promise will be rejected with that exception.

// async function functionName() {
//   // await can be used inside this function
//   const result = await someAsyncOperation();
//   return result;
// }

// function getData() {
//     fetch('https://dummyjson.com/products') // Corrected the URL
//       .then((res) => res.json()) // Properly handle the fetch response and convert it to JSON
//       .then((data) => {
//         console.log(data); // Log the data
//       })
//       .catch((error) => {
//         console.error('Error fetching data:', error); // Handle any errors
//       });
//   }
  
//   getData();

async function getData() {
    const res=await fetch('https://dummyjson.com/products');
    const data= await res.json();
    console.log(data);
}
getData();
        

    
