// const showResult=(res)=>{
//     console.log('................'res);
//     // const root=document.getElementById('root');
//     // root.innerHTML=res;
// }

// const printPretty=(res)=>{
//     console.log('#######'res);
//     // const root=document.getElementById('root');
//     // root.style.color='brown';
//     // root.innerHTML=res;
// }

// const sum=(a,b, fn)=>{
//     const res=a+b;
//     fn (res);
// }

// // const mul=(a,b)=>{
// //     const res=a*b;
// //     showResult(res);
// // }

// sum(2,3,printPretty);

// function paywithrazorpay(){
//     console.log("payment started by razorpay");
// }
// function paywithpaytm(){
//     console.log(`payment started by paytm`);
// }

// const userDetails=(name,age,seat,proccessPayment)=>{    
//     console.log(`booking for ${name} with age ${age} for seat ${seat}`);
//     proccessPayment();
// } 

// const proccessPayment = () => {
//     console.log('Processing payment');
// }

// if(true){
//     proccessPayment();
// }else{
//     console.log('error in payment')
// }
// userDetails('sachin',25,12,paywithrazorpay);


//array function in java script

// const arr=[1,2,3,4,5];
// console.log(arr);
// arr.shift();
// console.log(arr);

// arr.unshift(0);
// console.log(arr);

// arr.push(6);
// console.log(arr);

// arr.pop();
// console.log(arr);

// const arr=["fruits","apple","banana","mango","grapes"];
// const printValue=(a,b,c)=>
// {
//     console.log('value  is:',a);
//     console.log('index is:',b);
//     //console.log('array is:',c);
//     console.log("............................................");
// }

// // for(let i=0;i<arr.length;i++)
// // {
// //     printValue(arr[i],i,arr);
// // }

// arr.forEach(printValue);


// const arr=[1,2,3,4,5];


// arr.forEach((a,b)=>{
//     console.log(a,b);
// });


// //using forech function find sum of array
// let sum=0;
// arr.forEach((b)=>{
//     sum+=b;
// });
// console.log(sum); 

const arr = [21, 62, 33, 44, 55];

const res = arr.filter(x => {
    if(x % 2 == 0){
        return true;
    } else {
        return false;
    }
});

console.log(res); 
console.log(arr);
//const res=arr.filter(isEven);
console.log(res); 
console.log(arr);


//task after submitting data on form card should be there with name and email
 