
let orgContainer = document.querySelector('#org-container');

let userImg = document.createElement('img');
let fName = document.createElement('p');
// fname.style.display = 'inline';

let lName = document.createElement('p');
let username = document.createElement('p');
let deleteBtn = document.createElement('button');

let userContainer = document.createElement('div');

userContainer.append(userImg, fName, lName, username);

window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
    orgContainer.appendChild(userContainer);
})

function getUsers() {

    fetch(`https://www.melivecode.com/api/users`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);
        for (const x of data) {
            fName.textContent += x.fname + ' ';
            lName.textContent = x.lname + ' ';
            username.textContent = x.username;
        }
    })
    .catch(err => {
        console.log(err);
    });
}
getUsers()

// function getUsers() {

//     let jwt = localStorage.getItem('jwt')
//     fetch(`https://www.melivecode.com/api/auth/user`, {
//         method: 'GET',
//         headers: {
//             "content-type": "application/json",
//             Authorization: "Bearer " + localStorage.getItem("jwt")
//         }
//     })
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err => {
//         console.log(err);
//     });
// }
// getUsers()