

function loadUsers(){
    

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayUsers(data))
}

function displayUsers(users){
    const usersContainer = document.getElementById('users-container');

    for(const user of users){
        const userDiv = document.createElement('div');
        userDiv.classList.add('user')
        

        userDiv.innerHTML = `
            <h4>userId: ${user.userId}</h4>
            <h3>Title: ${user.title}</h3>
        `
        usersContainer.appendChild(userDiv);
    }
    
    
}
// displayUsers();

//POST users
function postUsers(){
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: 'POST',
        body: JSON.stringify({
            title: 'random user',
            id: 1,
            userId: 305
        }),
        headers: {
           'content-type': 'application/json'
        }


    })
    .then(res => res.json())
    .then(data => console.log(data))
}


//PUT : update users with PUT http request
function putUsers(){
    fetch('https://jsonplaceholder.typicode.com/posts/1',{
        method: 'PUT',
        body: JSON.stringify({}),
        headers:{
            'content-type'
        }
    })
    .then(res => res.json())
    .then(data => console.log(data))
}