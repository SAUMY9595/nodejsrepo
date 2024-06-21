function form(e){
    e.preventDefault();
    const arr=e.target;
    const name=arr[0].value;
    const username=arr[1].value;
    const email=arr[2].value;
    const age=arr[3].value;
    const phone=arr[4].value;
    const form=document.getElementsByTagName("form")[0];
    form.style.display="none"
    renderCard(name,username,email,age,phone);
}

const renderCard=(n,u,e,a,p)=>{
const root=document.getElementById("root");
root.innerHTML=
    `<h2>This is your name ${n}</h2>
    <h2>This is your username ${u}</h2>
    <h2>This is your email ${e}</h2>
    <h2>This is your age ${a}</h2>
    <h2>This is your phone Number ${p}</h2>
    `
}