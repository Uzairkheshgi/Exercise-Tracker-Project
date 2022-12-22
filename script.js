// Prevent Default behavior of Login form
const loginform = document.getElementById('login');
loginform.addEventListener('submit', e => {
    e.preventDefault();
    let loginname = document.querySelector('#loginname');
    let loginpassword = document.querySelector('#loginpswrd');
    let logindata={loginname, loginpassword}
    fetch('http://localhost:8000/users')
    .then((response)=>{
        return response.json();
    })
    .then(data=>{
        // console.log(data)
        for (const user of data){
            console.log(user)
            console.log(user.data.name)
            if (user.data.name===loginname && user.data.password===loginpassword){
                console.log("Login successful")
            }
        }
    })
    console.log("Hello");
})
// Prevent Default behavior of signup form
const signupform = document.querySelector('#signup');
signupform.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log("Hi");
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const data = { name, email, password };
    console.log(data);
    // Store user data in json server
    fetch('http://localhost:8000/users', {
        method: 'POST',
        body: JSON.stringify({ data }),
        headers: { 'Content-Type': 'application/json' }
    })
        .then((resp) => {
            console.log("Account Created");
        })
})
// Show and hide login and signup forms
// let signupform=document.querySelector('#signup');
// let loginform=document.querySelector('#login');
let signupbtn = document.querySelector('#signupbtn');
let loginbtn = document.querySelector('#loginbtn');

signupbtn.addEventListener('click', () => {
    console.log('Create an account');
    loginform.style.display = 'none';
    signupform.style.display = 'block';
    signupbtn.style.display = 'none';
    loginbtn.style.display = 'block';
})

loginbtn.addEventListener('click', () => {
    console.log('login')
    loginform.style.display = 'block';
    signupform.style.display = 'none';
    signupbtn.style.display = 'block';
    loginbtn.style.display = 'none';
})


