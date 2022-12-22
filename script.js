// Prevent Default behavior of Login form
const loginform =document.getElementById('login');
loginform.addEventListener('submit', e=>{
    e.preventDefault()  
    console.log("Hello")    
})
// Prevent Default behavior of signup form
const signupform=document.querySelector('#signup')
signupform.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Hi")
    const name = document.querySelector('#name').value;
    const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    const data={name, email, password};
    console.log(data);
    // Store user data in json server
    fetch ('http://localhost:8000/users', {
        method: 'POST',
        body : JSON.stringify({data}),
        headers:{'Content-Type': 'application/json'}
    })
    .then((resp)=>{
        console.log("Account Created")
    }) 
})

// Show and hide login and signup forms
const handleSignup=()=>{
    let signupform=document.querySelector('#signup')
    let signinform=document.querySelector('#login')
    signinform.style.display='none'
    signupform.style.display='block'
    document.querySelector('#signupbtn').style.display='none';
    document.querySelector('#loginbtn').style.display='block'
}

// const handleLogin=()=>{
//     let signupform=document.querySeletor('#signup')
//     let signinform=document.querySelector('#login')
//     signinform.style.display='block'
//     signupform.style.display='none'
// }
// Get the signup button and add event listener, to hide and show login and sign forms
// const sign= document.getElementById('handle')
// console.log(sign.value)
// sign.addEventListener('submit', ()=>{
//     let signupform=document.querySelector('#signup1');
//     let signinform=document.querySelector('#login');
//     signinform.style.display='none';
//     signupform.style.display='block';
// })

// const handleSubmission= (e)=>{
//     e.preventDefault();
//     console.log("Hi")
// }


