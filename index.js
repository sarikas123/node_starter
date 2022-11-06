document.getElementById('Add-user-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const name = document.querySelector("#fname").value;
    const age = document.querySelector("#age").value;
    console.log(name,age);
   
})

function userCreate  (name,age){
    fetch('http://localhost:3000/api/users',{
        method:"POST",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify({name,age}),
        
    });
}

console.log("server started");