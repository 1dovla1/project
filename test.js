let adminOrgContainer = document.querySelector('#admin-org-container');
let orgContainer = document.querySelector('#org-container');


window.addEventListener('DOMContentLoaded', (e) => {
    e.preventDefault();
})

function getUsers() {

    fetch(`https://www.melivecode.com/api/users`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data);

            let adminImg = document.createElement('img');
            let adminfName = document.createElement('p');
            let adminlName = document.createElement('p');
            let adminUsername = document.createElement('p');
            let adminContainer = document.createElement('div');
            adminImg.classList.add('org-all-users-img');
            adminContainer.classList.add('org-all-users-container');
        
        for (const x of data) {            

            adminImg.src = x.avatar,
            adminfName.textContent = x.fname, 
            adminlName.textContent = x.lname, 
            adminUsername.textContent = x.username

            adminContainer.append(
                adminImg,
                adminfName, 
                adminlName, 
                adminUsername
            );

            adminOrgContainer.appendChild(adminContainer)


            let userImg = document.createElement('img');
            let fName = document.createElement('p');
            let lName = document.createElement('p');
            let username = document.createElement('p');
            let userContainer = document.createElement('div');
            userImg.classList.add('org-all-users-img');
            userContainer.classList.add('org-all-users-container');

            let deleteBtn = document.createElement('a');
            let deleteImg = document.createElement('img');
            deleteBtn.classList.add('delete-btn');
            deleteImg.src = 'images/user.png';
            deleteImg.classList.add('delete-img');
            deleteBtn.appendChild(deleteImg);

            let deleteButton = document.querySelectorAll('.delete-btn');
           console.log(deleteButton);

           for (const y of deleteButton) {
                y.addEventListener('click', (e) => {
                    e.preventDefault();
                    deleteUser(y);
                })
            }

            userImg.src = x.avatar,
            fName.textContent = x.fname, 
            lName.textContent = x.lname, 
            username.textContent = x.username

            userContainer.append(
                userImg,
                fName, 
                lName, 
                username,
            );
            userContainer.appendChild(deleteBtn);

            orgContainer.appendChild(userContainer); 
           
        }
    })
    .catch(err => {
        console.log(err);
    });
}
getUsers();

function deleteUser(id) {
    fetch(`https://www.melivecode.com/api/users/delete${id}`, {
                        method: 'DELETE'
                    })
                    .then(response => {
                        return response.json();
                    })
                    .then(data => {
                        console.log(data);
                    })
                    .catch(err => {
                        console.log(err);
                    });
}

