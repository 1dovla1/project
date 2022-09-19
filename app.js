let loginEmail = document.querySelector('#login-email');
let loginPassword = document.querySelector('#login-password');
let loginbtn = document.querySelector('.login-btn')
let loginForm = document.querySelector('#login-form');
let errorMessage = document.querySelector('#login-err-message');

function login(data){
    fetch(`https://www.melivecode.com/api/login`, {
        method: 'POST',
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => {

        if(response.status >= 500){
            location.href = '/error/err500.html';
        }
    
        return response.json();
    })
    .then(data => {
        console.log(data, 'data');

        // if(loginEmail.value === '' || loginPassword.value === '') {
        //     errorMessage.textContent = 'All fields must be entered!';
        // } else {
        //     localStorage.setItem('jwt', data.accessToken)
        //     location.href = 'index.html';
        // }

        if(data.status !== 'ok'){
            errorMessage.textContent = data.message;
        } else {
           localStorage.setItem('jwt', data.accessToken)
            location.href = 'index.html';
        }

       
    })
    .catch(err => {
        console.log(err, 'err');
    });
}

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let form = new FormData(loginForm);
    console.log(form);
    let json = Object.fromEntries(form.entries())
    console.log(json);
    login(json);
    loginEmail.value = '';
    loginPassword.value = '';
});

