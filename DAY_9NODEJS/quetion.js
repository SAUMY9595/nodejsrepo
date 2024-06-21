function calc(s,...arr){
    if(s=='sum'){
        ans=arr.reduce((acc,ele)=>acc+ele);
    }
    if(s=='mul'){
        ans=arr.reduce((acc,ele)=>acc*ele);
    }
return ans;
}

const a1=calc('sum',10,20,30);
const a2=calc('mul',10,20,30);
const a3=mul(1,2);
console.log(a1,a2,a3);