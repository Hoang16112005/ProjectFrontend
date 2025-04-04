let inputEmail = document.getElementById("inputEmail")
let inputPass = document.getElementById("inputPass")
let login = document.getElementById("login")
let emailError = document.getElementById("emailError")
let passError = document.getElementById("passError")

let user = JSON.parse(localStorage.getItem("user")) || []

login.addEventListener('click', (event) => {
    event.preventDefault();
    checkValidate()
})

let admin = 
    {
        name: 'hoang2006',
        email: 'nxh20051611@gmail.com',
        pass: 'hoang2006'
    }


function checkEmailAndPass(){
    let check = user.forEach((item) => {
        if(item.email === inputEmail.value && item.pass === inputPass.value){
            console.log("Log in sucessfully");
            return true;
        }
        else{
            console.log("Log in failed");
            return false;
        }
    });
    return check;
}

function checkValidate() {

    if (admin.email === inputEmail.value && admin.pass === inputPass.value){
        window.location.href="/ProjectFrontend/HTML/category-manager.html"
        inputEmail.value='';
        inputPass.value=''
    }
    
    let foundUser = user.find(item => item.email === inputEmail.value);

    if (!inputEmail.value.includes('@gmail.com') || inputEmail.value.includes('@gmail.vn')) {
        inputEmail.classList.add('check-false');
        emailError.innerText = "Wrong email format ";
        check = false;
    } 
    else if(!foundUser){
        inputEmail.classList.add('check-false');
        emailError.innerHTML = "Wrong email, try again";
        return;
    }

    if (inputPass.value.length <= 8) {
        inputPass.classList.add('check-false');
        passError.innerHTML = "Password length must be longer than 8";
        return;
    } 
    
    else if (inputPass.value !== foundUser.pass){
        passError.innerHTML = "Wrong password, try again";
        return
    }

    else{
    checkEmailAndPass()
    window.location.href="/ProjectFrontend/HTML/home.html"
    inputEmail.value='';
    inputPass.value=''
    } 
}
