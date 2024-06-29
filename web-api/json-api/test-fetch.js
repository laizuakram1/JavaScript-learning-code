

//get data with fetch

function loadData(){

    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dynamicDisplay(data))
}


//display data
// function displayData(data){
//     const ui = document.getElementById('users-list');

//     for(const user of data){
//         const li = document.createElement('li');
//         li.innerText = user.name;
//         ui.appendChild(li);
//     }

// }


//dynamic display data
function dynamicDisplay(posts){
    const postsDiv = document.getElementById('posts-container');
    
    for(const post of posts){
        
        const postDiv = document.createElement('div');
        postDiv.innerHTML = `
            <h3>${post.name}</h3>
        
        
        `
        postsDiv.appendChild(postDiv)

    }



}