// Prevent Default behavior of Login form
const form =document.getElementById('login');
form.addEventListener('submit', e=>{
    e.preventDefault()  
    console.log("Hello")    
})
// Prevent Default behavior of signup form
const form2=document.querySelector('#signup')
form2.addEventListener('submit', (e)=>{
    e.preventDefault();
    console.log("Hi")
    const name = document.querySelector('#name').value;
    const email=document.querySelector('#email').value;
    const password=document.querySelector('#password').value;
    const data={name, email, password}
    console.log(data)
    
    fetch ('userdata/db.json', {
        method: 'POST',
        body : JSON.stringify(data),
        Headers:{'Content-Type': 'application/json'}
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
}

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


