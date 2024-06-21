// const title=document.getElementsByTagName('section')[1].getElementsByTagName('h1')[0];
// title.innerText="Hello world"

// const title=document.querySelector("section:last-of-type>h1");
// title.style.color='brown';
// title.className='cs1';

const pr=document.createElement('p');
pr.innerText='Hello world';
const sec=document.getElementsByTagName('section')[0];
sec.appendChild(pr);
sec.append("Hello world");

sec.append("new text");
function printhellow(){
    console.log("Hello world");
}

function handleUserName(e){
    console.log("inputKeydown");
    console.log(e.target.value);
}
function handleUserAge(e){
    console.log("inputChanged");
    console.log(e.target.value);
}
function handleSubmit(e){
    e.preventDefault();
    //console.log("formSubmitted\n",e.target);
    const userName=e.target.userName.value;
    const userAge=e.target.userAge.value;
    console.log(userName,userAge);
    if(userAge<30){
        document.append
    }
    else{
        document.append("You are too old");
    }
}

//event alligation 
//what is event alligation?
//event alligation is a way to add event listener to multiple elements at once