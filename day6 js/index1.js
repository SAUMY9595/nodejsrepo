const handleSubmit=(e)=>{
    e.preventDefault();
    const arr=e.target;
    const name=arr[0].value;
    const email=arr[1].value;

    const form=document.getElementById('form')[0];
    form.style.display='none';

    console.log(name,email);

    renderCard(name,email);
}
const renderCard=()=>{
    const root=document.getElementById('root');
    root.innerHTML=n+' ' +e;
    root.innerHTML=
    `
    <h3> class='name' is: ${n}</h3>
    <h4> class='email' is: ${e}</h4>
    `
}