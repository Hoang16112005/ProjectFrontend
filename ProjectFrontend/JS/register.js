document.addEventListener("DOMContentLoaded", function() {
    let inputName = document.getElementById("inputName");
    let inputEmail = document.getElementById("inputEmail");
    let inputPass = document.getElementById("inputPass");
    let inputConfirmPass = document.getElementById("inputConfirmPass");
    let form = document.getElementById("form");
    let nameError = document.getElementById("nameError");
    let emailError = document.getElementById("emailError");
    let passError = document.getElementById("passError");
    let confirmError = document.getElementById("confirmError");

    let user = [
        {
            name: 'hoang2005',
            email: 'nxh16112005@gmail.com',
            pass: 'hoang2005'
        }
    ];



    localStorage.setItem('user', JSON.stringify(user));
    
    let users = JSON.parse(localStorage.getItem("user")) || []

    if (form) {
        form.addEventListener('submit', (event) => { 
            event.preventDefault(); 
            checkValidate();
        });
    } else {
        console.error("Form element not found!");
    }

    function addUser() {
        let newUser = {
            email: inputEmail.value,
            pass: inputPass.value
        };
        user.push(newUser);
        console.log(user);
    }

    function checkValidate() {
        let check = true;

        if (inputName.value.length <= 5) {
            inputName.classList.add('check-false');
            nameError.innerHTML = "Name length must be longer than 5";
            check = false;
        } else {
            inputName.classList.remove('check-false');
            nameError.innerHTML = "";
        }

        if (!inputEmail.value.includes('@gmail.com') || inputEmail.value.includes('@gmail.vn')) {
            inputEmail.classList.add('check-false');
            emailError.innerText = "Wrong email format ";
            check = false;
        } 
        

        else {
            inputEmail.classList.remove('check-false');
            emailError.innerHTML = "";
        }

        let findExist = users.forEach(item => {
            if (inputEmail.value === item.email) {
                inputEmail.classList.add('check-false');
                emailError.innerText = "Email existed";
                check = false;
            };
        });

        if (inputPass.value.length <= 8) {
            inputPass.classList.add('check-false');
            passError.innerHTML = "Password length must be longer than 8";
            check = false;
        } else {
            inputPass.classList.remove('check-false');
            passError.innerHTML = "";
        }

        if (inputPass.value !== inputConfirmPass.value) {
            inputConfirmPass.classList.add('check-false');
            confirmError.innerHTML = "Password does not match";
            check = false;
        } else {
            inputConfirmPass.classList.remove('check-false');
            confirmError.innerHTML = "";
        }

        if (check) {
            addUser();
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href="/ProjectFrontend/HTML/home.html"
            inputEmail.value='';
            inputPass.value='';
            inputConfirmPass.value='';
        }
    }
});
