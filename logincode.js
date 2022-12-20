const form =document.getElementById('login');
form.addEventListener('submit', e=>{
    e.preventDefault()  
    console.log("Hello")    
})

const handleSignup=()=>{

    let signupform=document.querySelector('#signup1')
    let signinform=document.querySelector('#login')
    signinform.style.display='none'
    signupform.style.display='block'
    signupform.addEventListner('submit', e=>{
        e.preventDefault()
        console.log("Helllo")
    })
}
// const signupform1=document.querySelector('#signup1')
// signupform1.addEventListner('submit', e=>{
//     e.preventDefault()
//     console.log("Helllo")
// })